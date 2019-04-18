// Clyde "Thluffy" Sinclair
// SoftDev pd0
// K11 -- basic SVG work
// 2019-03-13w
var pic = document.getElementById("vimage");
var wipe = document.getElementById("but_clear");
var move= document.getElementById("move");

//coords of last placed dot
var lastX = 0;
var lastY = 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//
var createDot = function(e)
{
  console.log("running . . .");

  //store click location, relative to "canvas"
  var newX = getRandomInt(0,500);
  var newY = getRandomInt(0,500);
  var counter=-1

  var newdot = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
  newdot.setAttribute("fill", "red");
  newdot.setAttribute("cx", newX);
  newdot.setAttribute("cy", newY);
  newdot.setAttribute("r", 10)

  var xVel=3;
  var yVel=3;

  var x=newdot.getAttribute("cx");
  var y=newdot.getAttribute("cy");
  var rad=newdot.getAttribute("r");
  while(1==1){
    if (x >= 500 - rad){
      xVel *= -1;
    }
    if (y >= 500 - rad){
      yVel *= -1;
    }
    //These bounds necessary for logo to bounce back
    //from top and left walls

    if (x <= 0){
      xVel *= -1;
    }
    if (y <= 0){
      yVel *= -1;
    }
    x += xVel;
    y += yVel;
  }
  pic.appendChild(newdot);

  lastX = newX;
  lastY = newY;
}


move.addEventListener("click", createDot)




//sequentially remove all dots and lines from "canvas"
wipe.addEventListener(
  "click", function()
  {
    var fc = pic.firstChild;
    while(fc) {
      console.log("removing " + fc + "...");
      pic.removeChild(fc);
      fc = pic.firstChild;
    }
    lastX = null;
    lastY = null;
  });
