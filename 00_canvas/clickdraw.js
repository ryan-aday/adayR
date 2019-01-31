var c = document.getElementById("slate);
var ctx = c.getContext("2d");

//Code from class
//ctx.fillStyle = "#FF0000";
//ctx.fillRect(10, 10, 10, 10);

//Clea Rect function
document.getElementById("clear").addEventListener("click", function() {
  ctx.clearRect(0, 0, c.width, c.height); 
});
