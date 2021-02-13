var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");


//переменные

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();


//картинки обьектов(птичка, фон, и т.д)

	bird.src = "img/bird.png";
	bg.src = "img/bg.png";
	fg.src = "img/fg.png";
	pipeUp.src = "img/pipeUp.png";
	pipeBottom.src = "img/pipeBottom.png";


	var gap = 100;

//При нажатии на пробел птичка подлетает

document.addEventListener("keydown", moveUp);

function moveUp() {
	yPos -=45
   fly.play(); 
}

//звуковые эффекты
var fly = new Audio();

var score = new Audio();

//Файл со звуками

fly.src = "Audio/fly.mp3";

score.src = "Audio/score.mp3";
//создание блоков

var pipe = [];


pipe[0] = {

x : cvs.width,

y : 0

}

	var score = 0;

	//позиция птички

	var xPos = 60;
	var yPos = 150;
	var grav = 2.1;
	
//координаты обьектов
	
	
			function draw() {

		ctx.drawImage(bg, 0, 0);
 


		for(var i = 0; i < pipe.length; i++) {

		ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);

		ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);


		pipe[i].x--;

		if(pipe[i].x == 80) {
			pipe.push({

			x : cvs.width,
			y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
			});

			}

			if(xPos + bird.width >= pipe[i].x
			&& xPos <=pipe[i].x +pipeUp.width
			&& (yPos <= pipe[i].y + pipeUp.height
			|| yPos + bird.height >= pipe[i].y + pipeUp.height + gap)
			|| yPos + bird.height >= cvs.height - fg.height)  {
				
				
				location.reload(); // Перезапуск игры
				alert("game ower!!!")


			}

			if(pipe[i].x == 5) {

				score++;
				
				
			}
		}


		ctx.drawImage(fg, 0, cvs.height - fg.height);

		ctx.drawImage(bird, xPos, yPos);


			yPos += grav;

ctx.fillColor = ""
ctx.fillStyle = "#ffffff"
ctx.font = "60px Verdana"
ctx.fillText( +score, 130, cvs.height - 450)

	requestAnimationFrame(draw);

}

pipeBottom.onload = draw;
