<!-- begin header -->
<div class="row header abs" id="header">
	<div class="header_bg padL15 padR15">
    <ul>
    	<li class="hdr_logo left mrgT35">
        	
        	<% if section="Annual Review" THEN %>
        	<a href="<%=dotdotpath%>annualreview/" title="NHSBT Annual Review"><img src="<%=dotdotpath%>images/layout/annualreview_header_logo.png" /></a>
        	<% elseif section="Triennial Report" THEN %>
        	<a href="<%=dotdotpath%>triennialreport/" title="NHSBT Triennial Report"><img src="<%=dotdotpath%>images/layout/triennialreport_header_logo.png" /></a>
        	<% elseif section="Strategic Plan" THEN %>
        	<a href="<%=dotdotpath%>strategicplan/" title="NHSBT Strategic Plan"><img src="<%=dotdotpath%>images/layout/strategicplan_header_logo.png" /></a>
			<% elseif section="Trigger" THEN %>
        	<a href="<%=dotdotpath%>trigger/" title="NHSBT Trigger"><img src="<%=dotdotpath%>images/layout/trigger_header_logo.png" /></a>
        	<% else %>
        	<a href="<%=dotdotpath%>" title="NHS Blood and Transplant (NHSBT)"><img src="<%=dotdotpath%>images/layout/nhsbt_header_logo.png" /></a>
        	<% end if %>
        	
        </li>
        <li class="nhs_logo right mrgT31">
        	<% if section="Home" then %>
        	<img src="<%=dotdotpath%>images/layout/nhsbt_logo.png" alt="NHS Blood and Transplant logo" />
        	<% else %>
        	<a href="<%=dotdotpath%>" title="Click here to return to NHSBT homepage"><img src="<%=dotdotpath%>images/layout/nhsbt_logo.png" /></a>
        	<% end if %>
        </li>
     </ul>
    </div>  
    
    <!-- #include virtual="/_include/ssi/navigation_nhsbt.asp" -->
    
</div>
<div class="swoosh">
<img src="<%=dotdotpath%>images/layout/bg_header_secondary.gif" class="hide" alt="" />
</div>
<!-- end header -->