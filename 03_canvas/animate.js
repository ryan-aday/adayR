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
var clear = document.getElementById("playground");
var dotButton = document.getElementById('circle');
var stopButton = document.getElementById('stop');
var ctx = c.getContext("2d");

var requestID; var radius=5; var growing=5;

//Clear Rect function
function isCanvasBlank(canvas) {
    var blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() == blank.toDataURL();
}

var clear= function(e){}

document.getElementById("clear").addEventListener("click", function() {
  if (isCanvasBlank(c))
    {
      //prevent dafault event from happening- in this case, the event
      //triggered if the modulo was 0
    ctx.preventDefault();
  }
  ctx.beginPath();
  ctx.clearRect(0, 0, c.width, c.height); //clear rectangle
});

var drawDot= function(){
  //draw the dotconn
  ctx.beginPath();
  ctx.arc(c.width/2, c.height/2, radius, 0, 2*Math.PI);
  ctx.stroke();
  ctx.fill;
  ctx.requestAnimationFrame("circle")

  radius= radius+growing;
  requestID=window.requestAnimationFrame(drawDot);
};

var stopIt=function(){
  console.log(requestID);
}

dotButton.addEventListener("click", drawDot);
stopButton.addEventListener("click", stopIt);
