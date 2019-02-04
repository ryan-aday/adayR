//Team Terrible Trio -- Hasif Ahmed, Raunak Chowdhury, Ryan Aday
//SoftDev2 pd8
//K02 -- Connecting the Dots
//2019-02-04


var c = document.getElementById("playground");
var ctx = c.getContext("2d");

var counter=0;

//Clear Rect function
function isCanvasBlank(canvas) {
    var blank = document.createElement('canvas');
    blank.width = canvas.width;
    blank.height = canvas.height;

    return canvas.toDataURL() == blank.toDataURL();
}

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

//Toggle Bwtn displaying button and dot
document.getElementById("playground").addEventListener("click", function(e) {

    //ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 5, 0, 2*Math.PI);
    ctx.fillStyle = "red";
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.moveTo(e.offsetX, e.offsetY);


    //ctx.lineTo(e.offsetX+20, e.offsetY+20);
    //replcing moveTo with lineTo fills in shapes.
    //I suspect it's because the lineTo function actively
    //tries to connect the given point to all other points in same canvas.


  //beginPath initiates canvas to be changed
  //offsetX and offsetY take x and y coords of cursor


});
