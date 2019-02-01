var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//Code from class
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(10, 10, 10, 10);

//Clear Rect function
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.clearArc(0, 0, c.width, c.height);
});

//toggle Button Name
document.getElementById("toggle").addEventListener("click", function() {
  if (document.getElementById("toggle").innerHTML =="Rect"){
    document.getElementById("toggle").innerHTML = "Dot";
  }
  else
  {
    document.getElementById("toggle").innerHTML = "Rect";
  }
});

//Toggle Bwtn displaying button and dot
document.getElementById("slate").addEventListener("click", function(e) {
  if (document.getElementById("toggle").innerHTML =="Rect"){
    ctx.beginPath();
    ctx.rect(e.offsetX, e.offsetY, 150, 100);
    ctx.fillStyle = "red";
    ctx.fill();
  }
  //beginPath initiates canvas to be changed
  //offsetX and offsetY take x and y coords of cursor
  else if(document.getElementById("toggle").innerHTML == "Dot"){
    ctx.beginPath();
    ctx.arc(e.offsetX, e.offsetY, 5, 0, 2*Math.PI);
    ctx.fillStyle = "green";
    ctx.fill();;
  }
});
