var windows=document.getElementsByClassName('window');
var menuImg=document.getElementsByClassName('menuImg');
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
menuImg[0].onclick=showAbout;
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
var contactFields=document.getElementsByClassName('contactFields');
var contactImg=document.getElementsByClassName('contactImg');
contactFields[0].onmouseover=changeMail;
contactFields[0].onmouseout=returnMail;
contactFields[1].onmouseover=changePhone;
contactFields[1].onmouseout=returnPhone;
contactFields[2].onmouseover=changeLinked;
contactFields[2].onmouseout=returnLinked;
menuImg[1].onclick=showContact;
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
var showMenuField=document.getElementsByClassName("showMenuFields");
menuImg[2].onclick=showProjects;
showMenuField[0].onclick=showRSP;
showMenuField[1].onclick=showEsoteric;
showMenuField[2].onclick=showWordpress;
showMenuField[3].onclick=showIQ;
close[2].onclick=hideProjects;	

function showProjects()
{
	windows[2].style.display="block";
}

function hideProjects()
{
	windows[2].style.display="none";
	menuField[0].style.display="none";
	menuField[1].style.display="none";
}

function showRSP()
{
	menuField[0].style.display="block";
	menuField[0].style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	menuField[0].style.animation="slide-bottom 0.6s ease-in-out both";
}

function showEsoteric()
{
	menuField[1].style.display="block";
	menuField[1].style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	menuField[1].style.animation="slide-bottom 0.6s ease-in-out both";
}

function showWordpress()
{
	menuField[2].style.display="block";
	menuField[2].style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	menuField[2].style.animation="slide-bottom 0.6s ease-in-out both";
}

function showIQ()
{
	menuField[3].style.display="block";
	menuField[3].style.webkitAnimation="slide-bottom 0.6s ease-in-out both";
	menuField[3].style.animation="slide-bottom 0.6s ease-in-out both";
}
//Animacja
$( "#logo" ).one( "click", function() {
 	$("#header").animate({paddingTop: '2vh'});
	$("#logo").css({height: '22vh'});
    $(".menu").delay(850).fadeIn(450);
});
