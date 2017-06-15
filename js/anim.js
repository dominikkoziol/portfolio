$( "#logo" ).one( "click", function() {
	"use strict";
 	$("#header").animate({marginRight: '90.5%', paddingTop: '36vh'});
	$("#logo").css({height: '26vh'});
    $("#menu-top").delay(850).fadeIn(450);
	$("#menu-bottom").delay(850).fadeIn(450);
});

function showAbouut()
{
	"use strict";
	//$("#").show(0);
}

var showAbout=document.getElementById("about");
showAbout.onclick=showAbouut;
	


