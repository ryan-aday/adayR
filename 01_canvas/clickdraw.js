//Ryan Aday
//SoftDev2 pd8
//K01> --  ...and I want to Paint It Better
//2019-02-01


var c = document.getElementById("slate");
var ctx = c.getContext("2d");

var counter=0;

//Code from class
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(10, 10, 10, 10);

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
      ctx.clearRect(0, 0, c.width, c.height);
      ctx.clearArc(0, 0, c.width, c.height);
});

//toggle Button Name
document.getElementById("toggle").addEventListener("click", function() {
  counter++;
});

//Toggle Bwtn displaying button and dot
document.getElementById("slate").addEventListener("click", function(e) {

  if (counter%2==0){
    ctx.beginPath();
    ctx.rect(e.offsetX, e.offsetY, 150, 100);
    ctx.fillStyle = "red";
    ctx.fill();

  }
  //beginPath initiates canvas to be changed
  //offsetX and offsetY take x and y coords of cursor
  else {
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 5, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();;
  }

});
