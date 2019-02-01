//Ryan aday
//SoftDev2 pd8
//K00> --  I See a Red Door...
//2019-01-31

var c = document.getElementById("slate");
var ctx = c.getContext("2d");

//Code from class
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(10, 10, 10, 10);

//Clear Rect function
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height);
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
document.getElementById("slate").addEventListener("click", function(ev) {
  if (document.getElementById("toggle").innerHTML =="Rect"){
    ctx.fillRect(ev.clientX - c.offsetLeft, ev.clientY - c.offsetTop, 100, 200);
  }
  else if(document.getElementById("toggle").innerHTML == "Dot"){
    ctx.fillRect(ev.clientX - c.offsetLeft, ev.clientY - c.offsetTop, 5, 5);
  }
});
