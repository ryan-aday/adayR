//Team R&R -- Raunak Chowdhury, Ryan Aday
//SoftDev2 pd8
//K03 --  Connecting the Dots
//2019-02-06

//NOTES FRom 2-6-19
//window.requestAnimationFrame)
//*executes on next available screen repaint
//(ensures browser+hardware ready)
//pauses for background tabs, hiddeen frames, etc.
//is automaticallly passed a timestamp to mark call setTimeout(function () {
//Returns nonzero integer (can be used as ID)
//60fps (target)
//can be optimized by browser (smoother animations
//more resource efficient
//syntax: requestAnimationFrame(callback

//window.cancelAnimationFrame()
//*stops animations
//*syntax: cancelAnimationFrame(id)

//model for html5

//var c=document.getElementById

var canvas = document.getElementById("playground");
var clear = document.getElementById("clear");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var ctx = canvas.getContext("2d");

var requestID;
var radius=10;
var growing=0;

ctx.fillStyle="#00ff00"

var clear_C= function(){
  ctx.clearRect(0, 0, canvas.width, canvas.height); //clear rectangle
}

var drawDot= function(){
  //Alters growing so that if past canvas bounds is negated to reverse direction
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

stopButton.addEventListener('click', stopIt);
