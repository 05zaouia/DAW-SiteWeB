// Javascript Document
var compteurImage=0 ;
var totalimage=4;


function slider(x){
	
	var image=document.getElementById('img') ;
	compteurImage =compteurImage + x ;
	image.src="IMG/corona"+compteurImage+".jpg";

	if(compteurImage>=totalimage)
	{
		compteurImage=1;
	}

	if(compteurImage<1){
		compteurImage=totalimage;
	}
}



function sliderauto(){
	
	var image=document.getElementById('img') ;
	compteurImage =compteurImage + 1 ;
	image.src="IMG/corona"+compteurImage+".jpg";

	if(compteurImage>=totalimage)
	{
		compteurImage=1;
	}

	if(compteurImage<1){
		compteurImage=totalimage;
	}
}


window.setInterval(sliderauto,3000);