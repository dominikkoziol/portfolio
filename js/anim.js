$( "#logo" ).one( "click", function() {
	"use strict";
 	$("#header").animate({marginRight: '91%', marginTop: '36vh'});
	$("#logo").css({height: '26vh'});
	window.setTimeout(function() {
    	$("#menu-top").css({display: 'block'});
		$("#menu-bottom").css({display: 'block'});
    }, 850);
	
});


	


