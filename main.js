
// Crie uma variável canvas
var canvas=new fabric.Canvas("myCanvas");

//Defina as posições iniciais da bola e do buraco.
var dugX=0;
var dugY=0;
var buXa=800;
var buaY=400;
var objeto_B;
var objeto_D;
block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("https://www.pngkit.com/png/full/17-178747_put-your-dog-in-a-kitchen-laundry-room.png",function(IMG){
		objeto_B=IMG;
		objeto_B.scaleToWidth(50);
		objeto_B.scaleToHeight(50);
		objeto_B.set({
			top:buaY,
			left:buXa
		});
		canvas.add(objeto_B);
	});
	newImage();
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("wiiiiiiiiii.png",function(IMG){
		objeto_D=IMG;
		objeto_D.scaleToWidth(50);
		objeto_D.scaleToHeight(50);
		objeto_D.set({
			top:dugY,
			left:dugX
		});
		canvas.add(objeto_D);
	});
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if(dugX==buXa && dugY==buaY){
		canvas.remove(objeto_D);
		document.getElementById("hd3").innerHTML="voce atingiu o osso";
		document.getElementById("myCanvas").style.borderColor="green";
	}
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if(dugY>=0){
			dugY=dugY-block_image_height;
			canvas.remove(objeto_D);
			newImage();
		}
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if(dugY<=450){
			dugY=dugY+block_image_height;
			canvas.remove(objeto_D);
			newImage();
		}
		 
	}

	function left()
	{
		if(dugX>5)
		{
			// Escreva o código para mover a bola para a esquerda.
				dugX=dugX-block_image_width;
				canvas.remove(objeto_D);
				newImage();
		}
		
	}

	function right()
	{
		if(dugX<=1050)
		{
			// Escreva o código para mover a bola para a direita.
				dugX=dugX+block_image_width;
				canvas.remove(objeto_D);
				newImage();
	}
  }

}