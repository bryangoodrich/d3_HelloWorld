var w=960,h=100,
svg=d3.select("#chart")
.append("svg")
.attr("width",w)
.attr("height",h);
 
var text=svg
.append("text")
.text("hello world")
.attr("y",50);

var sampleSVG = d3.select("#viz_circle")
	.append("svg:svg")
	.attr("width", 100)
	.attr("height", 100);

sampleSVG.append("svg:circle")
	.style("stroke", "black")
	.style("fill", "white")
	.attr("r", 40)
	.attr("cx", 50)
	.attr("cy", 50)
