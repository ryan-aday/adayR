//Ryan Aday
//SoftDev2 pd8
//K15 -- Scattered
//2019-05-01

//http://wiki.stat.ucla.edu/socr/index.php/SOCR_Data_Dinov_020108_HeightsWeights

var data = [[0.00000126,0.128],
[0.00000252,0.245],
[0.00000504,0.43],
[0.0000104,0.865],
[0.0000126,1.035]];

var margin = {top: 20, right: 20, bottom: 50, left: 70},
    width = 960 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;
    
var x = d3.scaleLinear()
                .domain([0, d3.max(data, function(d) { return d[0]; })])
                .range([ 0, width ]);

var y = d3.scaleLinear()
    	          .domain([0, d3.max(data, function(d) { return d[1]; })])
    	          .range([ height, 0 ]);

var svg = d3.select(".chart")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)

var main = svg.append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
    .attr('width', width)
	  .attr('height', height);


var xAxis = d3.axisBottom(x);

main.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

svg.append("text")
    .attr("transform",
          "translate(" + (width/2) + " ," +
                         (height + margin.top + 20) + ")")
    .style("text-anchor", "middle")
    .text("Date");

var yAxis = d3.axisLeft(y);

main.append("g")
    .call(yAxis);

svg.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 0 - margin.left)
    .attr("x",0 - (height / 2))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
    .text("Value");

var group = main.append("svg:g");

group.selectAll("circles")
    .data(data)
  .enter().append("svg:circle")
    .attr("cx", function (d,i) { return x(d[0]); } )
    .attr("cy", function (d) { return y(d[1]); } )
    .attr("r", 3.5);
