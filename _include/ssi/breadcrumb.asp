<div class="row mrgB30">
You are here: 
<% IF dotdotpath = "" THEN %>
	<strong><%= section %></strong>
<% ELSEIF dotdotpath = "../" THEN %>
	<a href="" title="<%= section %>"><%= section %></a>
<% ELSEIF dotdotpath = "../../" THEN %>
<strong><%= section %></strong> > <a href="" title="<%= Replace(subsection, "_", " ") %>"><%= Replace(subsection, "_", " ") %></a> 
<% ELSEIF dotdotpath = "../../../" THEN %>
	<strong><%= section %></strong> > <a href="../" title="<%= Replace(subsection, "_", " ") %>"><%= Replace(subsection, "_", " ") %></a> > <a href="" title="<%= Replace(subsubsection, "_", " ")  %>"><%= Replace(subsubsection, "_", " ") %></a>
<% ELSEIF dotdotpath = "../../../../" THEN %>
	<a href="../../../../" title="<%= section %>"><%= section %></a> > <a href="../../../" title="<%= Replace(subsection, "_", " ") %>"><%= Replace(subsection, "_", " ") %></a> > <a href="../../../research-and-development/" title="<%= Replace(subsubsection, "_", " ") %>"><%= Replace(subsubsection, "_", " ") %></a> > <a href="../" title="<%=Replace(subsubsubsection, "_", " ")  %>"><%= Replace(subsubsubsection, "_", " ") %></a> > <%= Replace(subsubsubsubsection, "_", " ") %>
	<% ELSEIF dotdotpath = "../../../../../" THEN %>
	<a href="../../../../../" title="<%= section %>"><%= section %></a> > <a href="../../../../" title="<%= Replace(subsection, "_", " ") %>"><%= Replace(subsection, "_", " ") %></a> > <a href="../../../"  title="<%=  Replace(subsubsection, "_", " ") %>"><%= Replace(subsubsection, "_", " ") %></a> > <a href="../../../research-and-development/"  title="<%= Replace(subsubsubsection, "_", " ") %>"><%= Replace(subsubsubsection, "_", " ") %></a> > <a href="../"  title="<%= Replace(subsubsubsubsection, "_", " ") %>"><%= Replace(subsubsubsubsection, "_", " ") %></a> > <%= subsubsubsubsubsection %>
<% END IF %>
</div>