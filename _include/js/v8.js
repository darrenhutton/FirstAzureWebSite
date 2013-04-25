// --------------------------------------------------
// code copyright Lightmaker 2006
// --------------------------------------------------
// v8.js
// version: 2.2
// created: 8 June 2006
// updated: 19 December 2006
// creator: Julian Wheaton
// lightmaker.com
// --------------------------------------------------


function v8()
{
	this.label_array=new Array();
	this.test_array=new Array();
	this.custommessage_array=new Array();
	
	this.name_array=new Array();
	this.message_array=new Array();
}

// Define Messages
v8.prototype.message_obj=new Object();
v8.prototype.message_obj.intro="The following fields are incomplete or incorrect:";
v8.prototype.message_obj.outro="Please correct and resubmit form.";
v8.prototype.message_obj.notfound="{field} was not found";
v8.prototype.message_obj.invalid="{field} is invalid";
v8.prototype.message_obj.required="{field} is required";
v8.prototype.message_obj.email="{field} must be a valid email address";
v8.prototype.message_obj.url="{field} must be a valid url";
v8.prototype.message_obj.number="{field} must be a number";
v8.prototype.message_obj.number_fix="{field} must be a number equal to {minimum}";
v8.prototype.message_obj.number_min="{field} must be a number greater than or equal to {minimum}";
v8.prototype.message_obj.number_max="{field} must be a number less than or equal to {maximum}";
v8.prototype.message_obj.number_minandmax="{field} must be a number between {minimum} and {maximum}";
v8.prototype.message_obj.string="{field} must be a greater than or equal to {minimum} characters";
v8.prototype.message_obj.string_fix="{field} must be a equal to {minimum} characters";
v8.prototype.message_obj.string_min="{field} must be a greater than or equal to {minimum} characters";
v8.prototype.message_obj.string_max="{field} must be a less than or equal to {maximum} characters";
v8.prototype.message_obj.string_minandmax="{field} must be a between {minimum} and {maximum} characters";
v8.prototype.message_obj.datetime="{field} must be a valid date/time";
v8.prototype.message_obj.date="{field} must be a valid date";
v8.prototype.message_obj.time="{field} must be a valid time";
v8.prototype.message_obj.allow="{field} contains invalid characters";
v8.prototype.message_obj.deny="{field} contains invalid characters";
v8.prototype.message_obj.mask="{field} is not in the correct format";
v8.prototype.message_obj.guid="{field} is not in the correct format";
v8.prototype.message_obj.compare_equal="{field} must be equal to {field2}";
v8.prototype.message_obj.compare_notequal="{field} must not be equal to {field2}";




v8.prototype.setlabel=function (name_str,label_str)
{
	var o=new Object();
	o.name=name_str;
	o.label=label_str;
	this.label_array.push(o);
}

v8.prototype.setmessage=function (name_str,test_str,message_str)
{
	var o=new Object();
	o.name=name_str;
	o.test=test_str;
	o.message=message_str;
	switch (o.test)
	{
		case "r":// Required
		case "required":
		case "req":
			o.test="required";
			break;
		case "email":// Email Address
		case "emailaddress":
			o.test="email";
			break;
		case "guid":// GUID
		case "uniqueidentifier":
			o.test="guid";
			break;
	}
	this.custommessage_array.push(o);
}

v8.prototype.addtest=function (name_str,test_str)
{
	var label_str="";
	for (var i=0; i<this.label_array.length; i++)
	{
		if (this.label_array[i].name==name_str)
		{
			label_str=this.label_array[i].label;
			break;
		}
	}
	if (label_str=="")
	{
		label_str=name_str;
	}
	var o=new Object();
	o.name=name_str;
	o.test=test_str.toLowerCase();
	o.label=label_str;
	o.data=new Array();
	o.data[0]=(arguments.length<2) ? "" : arguments[2];
	o.data[1]=(arguments.length<3) ? "" : arguments[3];
	o.testmessage=o.test;

	switch (o.test)
	{
		case "r":// Required
		case "required":
		case "req":
			o.test="required";
			o.testmessage=o.test;
			break;
		case "email":// Email Address
		case "emailaddress":
			o.test="email";
			o.testmessage=o.test;
			break;
		case "guid":// GUID
		case "uniqueidentifier":
			o.test="guid";
			o.testmessage=o.test;
			break;
		case "compare":
			if (o.data[0] != "" && o.data[1] != "")
			{
				o.testmessage+="_"+o.data[1];
			}
			break;
		case "date":// Date
		case "time":// Time
			o.test="datetime";
			break;
		case "number":// Number
		case "string":// String
			if (o.data[0] != "" && o.data[1] != "")
			{
				if (o.data[0] == o.data[1])
				{
					o.testmessage+="_fix";
				}
				else
				{
					o.testmessage+="_minandmax";
				}
			}
			else if (o.data[0] != "" && o.data[1] == "")
			{
				o.testmessage+="_min";
			}
			else if (o.data[0] == "" && o.data[1] != "")
			{
				o.testmessage+="_max";
			}
			break;
	}

	this.test_array.push(o);
}

v8.prototype.alert=function ()
{
	this.name_array=new Array();
	this.message_array=new Array();
	for (var i=0; i<this.test_array.length; i++)
	{
		this.highlight(this.test_array[i].name,false);
		var value=this.getvalue(this.test_array[i].name);
		switch (this.test_array[i].test)
		{
			case "required":// Required
				if (value == "")
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "email": // Email Address
				if (!this.validate_emailaddress(value))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "url": // URL
				if (!this.validate_url(value))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "datetime": // Date/Time
				if (!this.validate_datetime(value))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "guid": // GUID
				if (!this.validate_guid(value))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "number": // Number
				if (!this.validate_number(value,this.test_array[i].data[0],this.test_array[i].data[1]))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "string": // String
				if (!this.validate_string(value,this.test_array[i].data[0],this.test_array[i].data[1]))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "allow": // Allowed Characters
				if (!this.validate_charactercheck(value,this.test_array[i].data[0],""))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "deny": // Denied Characters
				if (!this.validate_charactercheck(value,"",this.test_array[i].data[0]))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "mask": // Regular Expression Format
				if (!this.validate_mask(value,this.test_array[i].data[0]))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "compare": // Compare
				var value2=this.getvalue(this.test_array[i].data[0]);

				this.test_array[i].label2=this.test_array[i].data[0];
				for (var a=0; a<this.label_array.length; a++)
				{
					if (this.label_array[a].name==this.test_array[i].data[0])
					{
						this.test_array[i].label2=this.label_array[a].label;
						break;
					}
				}
				if (!this.validate_compare(value,value2,this.test_array[i].data[1]))
				{
					this.invalid(this.test_array[i]);
				}
				break;
			case "custom": // Custom
				this.invalid(this.test_array[i]);
		}
	}
	var a=document.getElementById("alert");
	var at=document.getElementById("alerttext");
	if (this.name_array.length>0)
	{
		window.scroll(0,0);
		this.focusto(this.name_array[0]);
		for (var i=0; i<this.name_array.length; i++)
		{
			this.highlight(this.name_array[i],true);
		}
		if (a && at)
		{
			at.innerHTML=this.message_obj.intro+'<br /><br /><ul><li>'+this.message_array.join("</li><li>")+'</li></ul><br />'+this.message_obj.outro;
			a.style.display="";
		}
		else
		{
			alert(this.message_obj.intro+'\r\n'+this.message_array.join("\r\n")+'\r\n\r\n'+this.message_obj.outro);
		}
	}
	else
	{
		if (a)
		{
			a.style.display="none";
		}
	}
}


v8.prototype.valid=function ()
{
	return (this.name_array==0);
}


v8.prototype.invalid=function (test_obj)
{
	for (var i=0; i<this.name_array.length; i++)
	{
		if (this.name_array[i] == test_obj.name)
		{
			return;
		}
	}
	this.name_array.push(test_obj.name);
	var message=this.message_obj.invalid;
	if (this.message_obj[test_obj.testmessage])
	{
		message=this.message_obj[test_obj.testmessage];
	}

	for (var i=0; i<this.custommessage_array.length; i++)
	{
		if (this.custommessage_array[i].name == test_obj.name && this.custommessage_array[i].test == test_obj.test)
		{
		message=this.custommessage_array[i].message;
		}
	}

	message=message.replace("{field}",test_obj.label);
	if (test_obj.label2)
	{
		message=message.replace("{field2}",test_obj.label2);
	}
	message=message.replace("{minimum}",test_obj.data[0]);
	message=message.replace("{maximum}",test_obj.data[1]);
	this.message_array.push(message);
}


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


// getfield
v8.prototype.getfield=function (name_str)
{
	for (var a=0; a<document.forms.length; a++)
	{
		for (var b=0; b<document.forms[a].length; b++)
		{
			var o=document.forms[a][b];
			if (o.name==name_str)
			{
				return o;
			}
		}
	}
}

// getfieldarray
v8.prototype.getfieldarray=function (name_str)
{
	var ret_array=new Array();
	for (var a=0; a<document.forms.length; a++)
	{
		for (var b=0; b<document.forms[a].length; b++)
		{
			var o=document.forms[a][b];
			if (o.name==name_str)
			{
				ret_array.push(o);
			}
		}
	}
	return ret_array;
}

// getvalue
v8.prototype.getvalue=function (name_str)
{
	var o=this.getfield(name_str);
	if (!o)
	{
		return "";
	}
	switch (o.type)
	{
		case "text":
		case "password":
		case "file":
		case "hidden":
		case "textarea":
			return o.value;
		case "select-one":
			return o.options[o.selectedIndex].value;
		case "select-multiple":
			var ret=new Array();
			var o=o.options;
			for (var i=0; i<o.length; i++)
			{
				if (o[i].selected)
				{
					ret.push(o[i].value);
				}
			}
			return ret.join(",");
		case "radio":
		case "checkbox":
			var ret=new Array();
			var o=this.getfieldarray(name_str);
			for (var i=0; i<o.length; i++)
			{
				if (o[i].checked)
				{
					ret.push(o[i].value);
				}
			}
			return ret.join(",");
	}
	return "";
}



// getvalue
v8.prototype.highlight=function (name_str,hl)
{
	var o=this.getfield(name_str);
	if (!o)
	{
		return;
	}
	try
	{
		var ok=false;
		for (var i=0; i<20; i++)
		{
			if (ok && o.nodeName=="TR")
			{
				var cn=o.className;
				var p=cn.indexOf(" ");
				if (p!=-1)
				{
					var cn=cn.substr(0,p);
				}
				o.className=cn+((!hl) ? "" : " v8");
				break;
			}
			else if (o.nodeName=="TD" && o.className=="detail")
			{
				ok=true;
			}
			o=o.parentNode;
		}
	}
	catch(e)
	{
	}
}

// getvalue
v8.prototype.focusto=function (name_str)
{
	var o=this.getfield(name_str);
	if (!o)
	{
		return;
	}
	if (o.type=="hidden")
	{
		var o=this.getfield(name_str+"d");
		if (!o || o.type=="hidden")
		{
			return;
		}
	}
	try
	{
		o.focus();
	}
	catch(e)
	{
		
	}
}


//----------------------------------------------------------------------------------------------------
//----------------------------------------------------------------------------------------------------


// Validate_Date
v8.prototype.validate_datetime=function (value)
{
	var d=new Date(value);
	if (isNaN(d))// Not a date
	{
		return false;
	}
	return true;
}


// Validate_String
v8.prototype.validate_string=function (value,minimum,maximum)
{
	if (minimum != "" && value.length < minimum)// Too Short
	{
		return false;
	}
	else if (maximum != "" && value.length > maximum)// Too Long
	{
		return false;
	}
	return true;
}


// Validate_Number
v8.prototype.validate_number=function (value,minimum,maximum)
{
	if (!isNumber(value))// Not a number
	{
		return false;
	}
	value=Math.floor(value);
	if (isNumber(minimum) && value < Math.floor(minimum))// Too Short
	{
		return false;
	}
	else if (maximum != "" && value > Math.floor(maximum))// Too Long
	{
		return false;
	}
	return true;
}


// Validate_Guid
v8.prototype.validate_guid=function (value)
{
	return true;
}


// Validate_CharacterCheck
v8.prototype.validate_charactercheck=function (value,allow,deny)
{
	if (allow.length>0)
	{
		for (var i=0; i<value.length; i++)
		{
			if (allow.indexOf(value.charAt(i))==-1)
			{
				return false;
			}
		}
	}
	for (var i=0; i<deny.length; i++)
	{
		if (value.indexOf(deny.charAt(i))!=-1)
		{
			return false;
		}
	}
	return true;
}


// Validate_EmailAddress
v8.prototype.validate_emailaddress=function (value)
{
	if (value.length==0)
	{
		return true;
	}
	if (value.indexOf("@") == -1 || value.indexOf("@") == value.length-1 || value.indexOf("@") != value.lastIndexOf("@") || value.indexOf("@") > value.lastIndexOf("."))
	{
		return false;
	}
	if (value.indexOf(".") == 0 || value.indexOf(".") == value.length-1 || value.indexOf("..") != -1 || value.indexOf("@.") != -1 || value.indexOf(".@") != -1)
	{
		return false;
	}
	return true;
}


//Validate_URL
v8.prototype.validate_url=function (value)
{
	if (value.substr(0,7)!="http://" && value.substr(0,8)!="https://" && value.substr(0,6)!="ftp://")// starts with http:// or https:// or ftp://
	{
		return false;
	}
	return true;
}


// Validate_Mask
v8.prototype.validate_mask=function (value,mask)
{
	if (REFindNoCase(mask,value,1,false) == 1)// Regular Expression
	{
		return true;
	}
	return false;
}


// Validate_Compare
v8.prototype.validate_compare=function (value,value2,comparison)
{
	switch (comparison)
	{
		case "equal":
			if (value != value2)
			{
				return false;
			}
			break;
		case "notequal":
			if (value == value2)
			{
				return false;
			}
			break;
	}
	return true;
}


function isNumber(n)
{
	var s=String(n);
	
	return ((s.length>0) && !isNaN(Math.floor(s)));
}
