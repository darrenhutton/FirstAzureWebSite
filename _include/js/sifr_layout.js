// JavaScript Document
//<[CDATA[
  	var avantgarde = {
	src: dotdotpath + 'flash/sifr/ag_xl.swf'
	,ratios:[8, 1.42, 11, 1.38, 17, 1.32, 21, 1.3, 23, 1.27, 30, 1.28, 44, 1.26, 59, 1.25, 62, 1.24, 63, 1.25, 66, 1.24, 67, 1.25, 97, 1.24, 98, 1.23, 101, 1.24, 102, 1.23, 108, 1.24, 111, 1.23, 114, 1.24, 115, 1.23, 117, 1.24, 120, 1.23, 121, 1.24, 124, 1.23, 1.24]
	};
	
	var gradienttext = {
	src: dotdotpath + 'flash/sifr_mask2.swf'
	,ratios:[8,1.41,10,1.33,14,1.31,16,1.26,20,1.27,24,1.26,25,1.24,26,1.25,35,1.24,49,1.23,74,1.22,75,1.21,76,1.22,77,1.21,79,1.22,80,1.21,81,1.22,1.21]
	};
	
	sIFR.delayCSS  = true;
 // sIFR.domains = ['novemberborn.net'] // Don't check for domains in this demo
 	sIFR.activate(avantgarde,gradienttext);
	
	//sIFR.debug.ratios({ src: 'flash/sifr/ag_xl.swf', selector: 'h1' });

sIFR.replace(avantgarde, {
    selector: 'h1'
	,wmode: 'transparent'
    ,css: ['.sIFR-root {color: #ff0000; leading: 0; letter-spacing: 0;}','em { font-style: normal; color: #000000; letter-spacing: 0;}']
  });


/*sIFR.replace(avantgarde, {
	selector: '.subheading'
	,wmode: 'transparent'
	,css: '.sIFR-root {color: #FD3402; leading: 0;text-align: justify;letter-spacing: 0;}'
});


sIFR.replace(avantgarde, {
	selector: '.link'
	,wmode: 'transparent'
	,css: ['.sIFR-root {color: #000000; leading: 0;}','a { text-decoration: none; }','a:link { color: #000000; text-decoration: none;}','a:hover { color: #ff0000; text-decoration: underline;}']
});

sIFR.replace(avantgarde, {
    selector: '.filtered'
    ,css: {
      '.sIFR-root': { 'color': '#660000', 'letter-spacing':0, 'text-transform': 'capitalize' }
    }
    ,filters: {
      DropShadow: {
        knockout: true
        ,distance: 1
        ,color: '#330000'
        ,strength: 2
      }
    }
  });

sIFR.replace(avantgarde, {
	selector: '.opacity'
	,wmode: 'transparent'
	,css: '.sIFR-root {color: #FD3402; leading: 0;text-align: justify; opacity: 20;}'
});

sIFR.replace(avantgarde, {
    selector: 'h2.threecolour'
	,wmode: 'transparent'
    ,css: ['.sIFR-root {color: #ff0000; leading: 0; letter-spacing: 0;}','em { font-style: normal; color: #000000; letter-spacing: 0;}','strong { font-style: normal; font-weight:normal; color: #3300FF; letter-spacing: 0;}']
  });
	
sIFR.replace(gradienttext, {
	selector: 'h2.gradient'
	,wmode: 'transparent'
	,css: '.sIFR-root {color: #000000; leading: 0;letter-spacing: 0;text-transform:uppercase;}'
});*/
//]]>