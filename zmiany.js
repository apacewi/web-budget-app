var number = Math.floor(Math.random()*4)+1;
var description='<div class="mess">Efektywnie zarządzaj własnym budżetem!</div>';

function changeposition()
{
	
	if (number == 1)
		 description='<div class="mess2">Efektywnie zarządzaj własnym budżetem!</div>';
	if (number == 2)
		 description='<div class="mess3">Zadbaj o stabilny przyrost gotówki!</div>';
	if (number == 3)
		description='<div class="mess">Zrób użytek z każdego grosza, zamień go w prawdziwy majątek!</div>';
	if (number == 4)
		description='<div class="mess4">Regularność przerodzi się w sukces!</div>';
}
function hideslide()
{
	$("#slider").fadeOut(200);
}

function changeslide()
{
	number++; 
	if (number > 4) number=1;
	
	var plik = "<img src=\"img/img"+number+".png\" width = 800px height = 400px />";
	
	changeposition();
	document.getElementById("slider").innerHTML = plik+description;
	
	$("#slider").fadeIn(200);
	
	setTimeout("changeslide()", 8000);
	
	setTimeout("hideslide()",7800);
}