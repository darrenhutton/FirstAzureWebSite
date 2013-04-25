// JavaScript Document


function popup(url,winname,w,h,feat)
{
	if (!(isNaN(w) || isNaN(h)))
	{
		var x=parseInt((screen.width-w)/2);
		var y=parseInt((screen.height-h)/2);
		if (x<0)	x=0;
		if (y<0)	y=0;
		
		if (feat!=null && feat!="")
		{
			feat=","+feat;
		}
		else
		{
			feat="";
		}
		feat="left="+x+",top="+y+",width="+w+",height="+h+feat;
	}
	window.open(url,winname,feat);
}


function helpMe() {
	popup(dotdotpath+"help","",900,700,"");
}