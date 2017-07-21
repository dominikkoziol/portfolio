$("#contact").click( function(){
	"use strict";
	$("#window").show(0);

});

$("#about").click( function(){
	"use strict";
	$("#window").show(0);

});

$("#close").click( function(){
	"use strict";
	$("#window").hide(0);
});



//Animacja
$( "#logo" ).one( "click", function() {
	"use strict";
 	$("#header").animate({paddingTop: '2vh'});
	$("#logo").css({height: '22vh'});
    $(".menu").delay(850).fadeIn(450);
});

function showAbouut()
{
	"use strict";
	//$("#").show(0);
}

var showAbout=document.getElementById("about");
showAbout.onclick=showAbouut;
