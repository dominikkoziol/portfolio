var about=document.getElementById('about');
var contact=document.getElementById('contact');
var projects=document.getElementById('projects');
var close=document.getElementsByClassName('close');
var mail=document.getElementById('mail');
var phone=document.getElementById('phone');
var linked=document.getElementById('linked');

var game=document.getElementById("game");
game.onclick=showHungry;

about.onclick=showAbout;
contact.onclick=showContact;
projects.onclick=showProjects;
close[0].onclick=hideAbout;
close[1].onclick=hideContact;
close[2].onclick=hideProjects;
mail.onmouseover=changeMail;
mail.onmouseout=returnMail;
phone.onmouseover=changePhone;
phone.onmouseout=returnPhone;
linked.onmouseover=changeLinked;
linked.onmouseout=returnLinked;


function showAbout()
{
	var window=document.getElementsByClassName('window');
	window[0].style.display="block";
}

function showContact()
{
	var window=document.getElementsByClassName('window');
	window[1].style.display="block";
}

function showProjects()
{
	var window=document.getElementsByClassName('window');
	window[2].style.display="block";
}

function hideAbout()
{
	var window=document.getElementsByClassName('window');
	window[0].style.display="none";
}

function hideContact()
{
	var window=document.getElementsByClassName('window');
	window[1].style.display="none";
}

function hideProjects()
{
	var window=document.getElementsByClassName('window');
	window[2].style.display="none";
}

function changeMail()
{
	var mail=document.getElementById('mailImg');
	var mail1=document.getElementById('mail');
	mail.style.transform="scale(1.05)";
	mail1.style.backgroundColor="#E95420";
}

function returnMail()
{
	var mail=document.getElementById('mailImg');
	var mail1=document.getElementById('mail');
	mail.style.transform="scale(1)";
	mail1.style.backgroundColor="#F2F1F0";
}

function changePhone()
{
	var phone=document.getElementById('phoneImg');
	var phone1=document.getElementById('phone');
	phone.style.transform="scale(1.05)";
	phone1.style.backgroundColor="#E95420";
}

function returnPhone()
{
	var phone=document.getElementById('phoneImg');
	var phone1=document.getElementById('phone');
	phone.style.transform="scale(1)";
	phone1.style.backgroundColor="#F2F1F0";
}

function changeLinked()
{
	var linked=document.getElementById('linkedImg');
	var linked1=document.getElementById('linked');
	linked.style.transform="scale(1.05)";
	linked1.style.backgroundColor="#E95420";
}

function returnLinked()
{
	var linked=document.getElementById('linkedImg');
	var linked1=document.getElementById('linked');
	linked.style.transform="scale(1)";
	linked1.style.backgroundColor="#F2F1F0";
}

function showHungry()
{
	var hungry=document.getElementById('hungry');
	hungry.style.display="block";
	hungry.style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	hungry.style.animation="slide-bottom 0.6s ease-in-out both";
}
document.onkeydown = function(evt)
{
		var window = document.getElementsByClassName('window');
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        window[0].style.display="none";
				window[1].style.display="none";
				window[2].style.display="none";
    }
};



//Animacja
$( "#logo" ).one( "click", function() {
 	$("#header").animate({paddingTop: '2vh'});
	$("#logo").css({height: '22vh'});
    $(".menu").delay(850).fadeIn(450);
});
