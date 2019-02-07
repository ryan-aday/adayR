//Team R&R -- Raunak Chowdhury, Ryan Aday
//SoftDev2 pd8
//K03 --  What Is It Saving the Screen From?
//2019-02-06

var canvas = document.getElementById("playground");
var clear = document.getElementById("clear");
var dotButton = document.getElementById('circle');
var dvdButton = document.getElementById('dvd');
var stopButton = document.getElementById('stop');
var ctx = canvas.getContext("2d");

var requestID;
var radius=10;
var growing=0;

ctx.fillStyle="#00ff00"

var clear_C= function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear rectangle
}


//Frame flashes if you press both logo and dot buttons wihout the stop button
//NOTE: Fixed with canccelAnimationFrame
var drawDot= function(){
  //Alters growing so that if past canvas bounds is negated to reverse direction
  window.cancelAnimationFrame( requestID );

  if (growing == 10 && radius >= canvas.width/2){
    growing = -10;
  }
  else if (growing == -10 && radius <= 0){
    growing = 10;
  }
  radius += growing;

  clear_C();
  ctx.beginPath();
  ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill();
  requestID=window.requestAnimationFrame(drawDot);
};

var stopIt = function(){
  window.cancelAnimationFrame(requestID);
  growing=0;
  console.log(requestID);
};

dotButton.addEventListener('click', function(e){
  if(growing==0){
    growing=10;
    drawDot();
  }
});


var dvdLogoSetup= function(){
  clear_C();
	window.cancelAnimationFrame(requestID);

	var rectWidth=100;
	var rectHeight=50;

	var rectX=Math.floor(Math.random() * (canvas.width-rectWidth));
	var rectY=Math.floor(Math.random() * (canvas.height-rectHeight));

	var xVel=3;
	var yVel=3;

	var logo=new Image();
	logo.src="logo_dvd.jpg";
  //logo.src="dvdLogo.png"
  //.png files tend to leave a trace, .jpg files dont.


  var dvdLogo = function(){
    window.cancelAnimationFrame( requestID );

    if (rectX >= canvas.width - rectWidth){
      xVel *= -1;
    }
    if (rectY >= canvas.height - rectHeight){
      yVel *= -1;
    }
    //These bounds necessary for logo to bounce back
    //from top and left walls

    if (rectX <= 0){
      xVel *= -1;
    }
    if (rectY <= 0){
      yVel *= -1;
    }
    rectX += xVel;
    rectY += yVel;

    ctx.drawImage( logo, rectX, rectY, rectWidth, rectHeight );
    requestID = window.requestAnimationFrame( dvdLogo );
  };
dvdLogo();
};

var dvdLogo = function(){
  dvdLogoSetup();

};
stopButton.addEventListener('click', stopIt);
dvdButton.addEventListener('click', dvdLogoSetup)
