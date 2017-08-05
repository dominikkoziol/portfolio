$("#about").click( function(){
	$("#window").show(0);
});

$("#close").click( function(){
	$("#window").hide(0);
});

$("#showInfo").click( function(){
	$("#second").show(0);
	$("#showInfo").css({backgroundColor: '#E95420'});
	$("#userName").css({color: 'white'});
	$("#secondly").css({color: 'whitesmoke'});
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