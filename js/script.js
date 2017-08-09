var windows=document.getElementsByClassName('window');
var close=document.getElementsByClassName('close');

{
	document.onkeydown = function(evt)
	{
	    evt = evt || windows.event;
	    if (evt.keyCode == 27) {
	        windows[0].style.display="none";
					windows[1].style.display="none";
					windows[2].style.display="none";
	    }
	};
}

//About windows
var about=document.getElementById('about');
about.onclick=showAbout;
close[0].onclick=hideAbout;

function showAbout()
{
	windows[0].style.display="block";
}

function hideAbout()
{
	windows[0].style.display="none";
}

//Contact windows
var contact=document.getElementById('contact');
var contactFields=document.getElementsByClassName('contactFields')
var contactImg=document.getElementsByClassName('contactImg');
contactFields[0].onmouseover=changeMail;
contactFields[0].onmouseout=returnMail;
contactFields[1].onmouseover=changePhone;
contactFields[1].onmouseout=returnPhone;
contactFields[2].onmouseover=changeLinked;
contactFields[2].onmouseout=returnLinked;
contact.onclick=showContact;
close[1].onclick=hideContact;

function showContact()
{
	windows[1].style.display="block";
}

function hideContact()
{
	windows[1].style.display="none";
}

function changeMail()
{
	contactImg[0].style.transform="scale(1.05)";
	contactFields[0].style.backgroundColor="#E95420";
}

function returnMail()
{
	contactImg[0].style.transform="scale(1)";
	contactFields[0].style.backgroundColor="#F2F1F0";
}

function changePhone()
{
	contactImg[1].style.transform="scale(1.05)";
	contactFields[1].style.backgroundColor="#E95420";
}

function returnPhone()
{
	contactImg[1].style.transform="scale(1)";
	contactFields[1].style.backgroundColor="#F2F1F0";
}

function changeLinked()
{
	contactImg[2].style.transform="scale(1.05)";
	contactFields[2].style.backgroundColor="#E95420";
}

function returnLinked()
{
	contactImg[2].style.transform="scale(1)";
	contactFields[2].style.backgroundColor="#F2F1F0";
}

//Projects windows
var menuField=document.getElementsByClassName('menuField');
var game=document.getElementsByClassName("showMenuFields");
var projects=document.getElementById('projects');
projects.onclick=showProjects;
game[0].onclick=showMenuField;
close[2].onclick=hideProjects;

function showProjects()
{
	windows[2].style.display="block";
}

function hideProjects()
{
	windows[2].style.display="none";
}

function showMenuField()
{
	menuField[0].style.display="block";
	menuField[0].style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	menuField[0].style.animation="slide-bottom 0.6s ease-in-out both";
}

//Animacja
$( "#logo" ).one( "click", function() {
 	$("#header").animate({paddingTop: '2vh'});
	$("#logo").css({height: '22vh'});
    $(".menu").delay(850).fadeIn(450);
});
