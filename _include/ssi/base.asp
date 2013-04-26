<%

' CATCH NULL PAGE TITLE
If meta_title = "" Then
	meta_title = "NHS Blood and Transplant (NHSBT)"
End If

' CATCH NULL META DESCRIPTION
If meta_description = "" Then
	meta_description = "NHSBT is a Special Health Authority, dedicated to saving and improving lives through the wide range of services we provide to the NHS."
End If

' CATCH NULL META KEYWORDS
If meta_keywords = "" Then
	meta_keywords = "National Health Services,NHS Blood and Transplant,Research and Development,Strategic Objectives,Blood Components,Organ Donation and Transplantation,Tissues,Diagnostic Services,Stems Cells,Specialist Therapeutic Services,NHSBT Corporate,Key Action Plan Milestones,Financial Summary"
End If


function GetFileSizeType(WhatFile)

	set fs=Server.CreateObject("Scripting.FileSystemObject")
	file = Server.MapPath(WhatFile) 
	set f = fs.GetFile(file)
	intSizeK = Int((f.Size/1024) + .5)
	if intSizeK = 0 then intSizeK = 1
	
	GetFileSizeType = "("&UCase(fs.GetExtensionName(file))&", "&intSizeK&"K)"
	
	set f=nothing
	set fs=nothing

end function	

	
%>



<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title><%=meta_title%></title>
<meta name="description" content="<%=meta_description%>" />
<meta name="author" content="Michael Ambler" />
<meta name="robots" content="noindex, nofollow" />
<script type="text/javascript">
	var dotdotpath = '<%=dotdotpath%>';
</script>
<link href="<%=dotdotpath%>_include/css/master.css" rel="stylesheet" type="text/css" />
<link href="<%=dotdotpath%>_include/css/import.css" rel="stylesheet" type="text/css" />
<!--[if lte IE 6]> 
	<link href="<%=dotdotpath%>_include/css/ie6.css" rel="stylesheet" type="text/css" />	
<![endif]-->
<link href="<%=dotdotpath%>_include/css/sifr.css" rel="stylesheet" type="text/css" media="all" />
<script language="javascript" type="text/javascript" src="<%=dotdotpath%>_include/js/swfobject-1.4.js"></script>
<script language="javascript" type="text/javascript" src="<%=dotdotpath%>_include/js/js_css.js"></script>
<script type="text/javascript" src="<%=dotdotpath%>_include/js/jquery.js"></script>
<script type="text/javascript" src="<%=dotdotpath%>_include/js/superfish.js"></script> 
<script type="text/javascript"> 
        function top_nav(){												//declare function
            $(" #nav ul ").css({display: "none"}); 						
                $(" #nav li").hover(function(){
                     $(this).find('ul:first') 							//select first ul
                        .css({visibility: "visible",display: "none"})	//show ul
                        .show();								//apply effect
                 },function(){
                     $(this).find('ul:first')							//select first ul
                     .css({visibility: "hidden"});						//hide it
                 });
                }
            
             $(document).ready(function(){								//run the function
                 $("ul.sf-menu").superfish();
				 top_nav();
				 
        });
</script> 
