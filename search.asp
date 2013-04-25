<%
	' SET PATH FROM SITE ROOT
	dotdotpath = ""
	section = "Search"
	subsection = ""
	subsubsection = ""
	meta_title = "NHS Blood and Transplant - Research and Development"
	meta_description = "NHS Blood and Transplant - Research and Development. NHS Blood and Transplant (NHSBT) is a Special Health Authority, dedicated to saving and improving lives through the wide range of services we provide to the NHS."
	meta_keywords = "National,Health,Service,Blood,organ donation,nhsbt,sustainable development,performance highlights,strategic direction,chairman's message,corporate profile"
	' SET SPECIFIC PAGE TITLE FOR THIS PAGE
	
%>
<!-- #include virtual="/_include/ssi/base.asp" -->

<!--<script language="javascript" type="text/javascript">
	$(document).ready(function(){
		$("#e-mail").focus(function(){
			var emailVar = $(this).attr('value');
			if(emailVar == 'Type your e-mail address'){
				$(this).attr('value', '');
				//alert(emailVar);
			}else{}		
		});
		$("#e-mail").blur(function(){
			var emailVar = $(this).attr('value')
			if(emailVar == "" || emailVar == null){
				$(this).attr('value', 'Type your e-mail address');
				//alert(emailVar);
			}else{}		
		});
	});
	
</script>-->
	
</head>
<body>
<!-- #include virtual="/_include/ssi/search.asp" -->
<div id ="outline">

  <!-- begin site -->
  <div class="outer_container">
    <!-- #include virtual="/_include/ssi/header.asp" -->
  <div class ="container">
    
    <!-- begin content -->
    <div class="row content_repeat">
    	<div class="row content_top">
        	<div class="row content">
                <div class="c1 left">
                	<h1>Search Results</h1>
                    
                	<div id="cse-search-results"></div>
					<script type="text/javascript">
                        var googleSearchIframeName = "cse-search-results";
                        var googleSearchFormName = "cse-search-box";
                        var googleSearchFrameWidth = 680;
                        var googleSearchDomain = "www.google.com";
                        var googleSearchPath = "/cse";
                    </script>
                    <script type="text/javascript" src="http://www.google.com/afsonline/show_afs_search.js"></script>
                    
                    
                </div>
                
                <div class="c2 left">
                	<!-- #include virtual="/_include/ssi/right_column.asp" -->
                </div>
                
                <div class="clear"></div>
                
            </div>
		</div>
    </div>
    <!-- end content -->
	<!-- #include virtual="/_include/ssi/footer.asp" -->
  </div>
  </div>
  <!-- end site -->
</div>
<!-- #include virtual="/_include/ssi/analytics.asp" -->
</body>
</html>
