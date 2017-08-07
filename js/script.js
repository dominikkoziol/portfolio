$("#about").click( function(){
	$("#window").show(0);
});

$("#contact").click( function(){
	$("#window1").show(0);
});

$("#close").click( function(){
	$("#window").hide(0);
});

$("#close1").click( function(){
	$("#window1").hide(0);
});


document.onkeydown = function(evt)
{
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        document.getElementById('window').style.display="none";
    }
};

//Animacja
$( "#logo" ).one( "click", function() {
 	$("#header").animate({paddingTop: '2vh'});
	$("#logo").css({height: '22vh'});
    $(".menu").delay(850).fadeIn(450);
});
