var f = d3.format(".1f");

/////////////////////////////////////////////////////////
////Data///////////
////////////////////////////////////
var dataset1 = [{ distance: 370, width: 50, ID: 3.0703893278914, MT:604.40425531915},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:604.60790273556},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:592.0547112462},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:604.02431610942},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:588.57446808511},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:613.17325227964},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:587.00911854103},
{ distance: 370, width: 50, ID: 3.0703893278914, MT:608.36474164134},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:846.4103343465},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:855.27051671733},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:873.38601823708},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:859.38905775076},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:875.85106382979},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:862.7537993921},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:860.34042553191},
{ distance: 240, width: 10, ID: 4.6438561897747, MT:854.37386018237},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:414.6170212766},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:415.76595744681},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:411.20668693009},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:400.4407294832},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:405.82978723404},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:413.18844984802},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:403.74468085106},
{ distance: 180, width: 70, ID: 1.8365012677171, MT:400.67781155015}];


var dataset2 = [{distance: 233, width: 10,  ID: 5.54225805, MT: 1013.272455},
{distance: 278,	width: 11,	ID: 5.659509454, MT: 977.9371257},
{distance: 263,	width: 12,	ID: 5.453956489, MT: 984.5149701},
{distance: 260,	width: 12,	ID: 5.437405312, MT: 958.5808383},
{distance: 280,	width: 14,	ID: 5.321928095, MT: 953.0928144},
{distance: 255,	width: 14,	ID: 5.186998515, MT: 891.8443114},
{distance: 296,	width: 14,	ID: 5.402098444, MT: 980.2155689},
{distance: 301,	width: 16,	ID: 5.233619677, MT: 916.4760479},
{distance: 179,	width: 18,	ID: 4.313890776, MT: 765.7694611},
{distance: 225,	width: 19,	ID: 4.565853678, MT: 838.3263473},
{distance: 67,	width: 20,	ID: 2.744161096, MT: 662.2125749},
{distance: 229,	width: 20,	ID: 4.517275693, MT: 815.1017964},
{distance: 259,	width: 25,	ID: 4.372952098, MT: 814.7335329},
{distance: 230,	width: 29,	ID: 3.987509056, MT: 717.8802395},
{distance: 249,	width: 29,	ID: 4.102020937, MT: 758.3443114},
{distance: 215,	width: 31,	ID: 3.793996539, MT: 694.3712575},
{distance: 40,	width: 32,	ID: 1.321928095, MT: 539.8143713},
{distance: 283,	width: 37,	ID: 3.935204877, MT: 733.0179641},
{distance: 184,	width: 38,	ID: 3.275634443, MT: 637.9401198},
{distance: 180,	width: 44,	ID: 3.032421478, MT: 633.0628743},
{distance: 96,	width: 50,	ID: 1.941106311, MT: 514.742515},
{distance: 191,	width: 50,	ID: 2.933572638, MT: 623.7904192},
{distance: 144,	width: 55,	ID: 2.388565288, MT: 537.9790419},
{distance: 194,	width: 66,	ID: 2.555518723, MT: 560.5479042},
{distance: 198,	width: 83,	ID: 2.254317189, MT: 534.0958084}];



/////////////////////////////////////////////////////////
////Page Ready///////////
////////////////////////////////////
$(document).ready(function () {
    // loadData1();
    // loadData2();
    startTrial();
    drawScatterPlot1(dataset2)
    drawScatterPlot2(dataset2)
    drawScatterPlot3(dataset2)
    // loadDataset("dataset2");

});


// function loadData1() {
//     d3.csv("data/HOData.csv", function (d) {
//         data = d;
//         data.forEach(function (item) {
//             item.n = parseInt(item.n);
//         });

//         drawScatterPlotMatrix(data);
//     });
// }

// function loadData2() {
//     d3.csv("data/HEData.csv", function (d) {
//         data = d;
//         data.forEach(function (item) {
//             item.n = parseInt(item.n);
//         });
//         drawScatterPlotMatrix(data);
//     });
// }



/////////////////////////////////////////////////////////
////Pointing Task///////////
////////////////////////////////////
var elems = document.getElementsByClassName("target");
var increase = (Math.PI * 2 )/ 9;
var x_c = 0; var y_c = 0;
var angle = 0; var radius = 200; var width = 25; var height = 25;
// var center_top = ($("#slider-1").height() - $("#target-1").height()) / 2;
var center_top = (450 - 70) / 2;
// var center_left = ($("#slider-1").width() - $("#target-1").width()) / 2;
var center_left = (450 - 70) / 2;
var count_Click; var curr_time; var next_time; var mt; var dist_Click; var choice_width; var choice_dist;
var trialData = []; 

function startTrial() {

  choice_width = $('input[name=width]:checked').val();
  choice_dist = $('input[name=distance]:checked').val();

  $('.target').css({
    'top': center_top + 'px',
    'left': center_left + 'px'
  });

  $(elems).css('opacity', '0').each(function (i) {
    elem = elems[i];

    x_c = choice_dist * Math.cos(angle) + center_left; 
    y_c = choice_dist * Math.sin(angle) + center_top; 
    // console.log(y_c);

    $(elem).css("background-color", "#472f7d");
    $(elem).off("click");

    $(elem).animate({
      'position': 'absolute',
      'width': choice_width + 'px', 
      'height': choice_width + 'px', 
      'left': x_c + 'px',
      'top': y_c + 'px',
      'opacity': '1'
    });

    angle += increase;
  });

  $('.start_note').css('visibility', 'hidden');
  $('.trial_note').css('visibility', 'visible');
  count_Click = 0;
  mt = [];
  dist_Click = [];
  beginClick();
}

function beginClick(prev_circle) {
  curr_time = Date.now();

  if (count_Click === 16) {
    alert('A round of trial has ended. Select different widths and distances to make sense of the impact on task difficulty and the time to point at a target.');
    $('.trial_note').css('visibility', 'hidden');
    $('.start_note').css('visibility', 'visible');
  } else {
    var filteredElems = _.without(elems, prev_circle);
    var x_c = Math.floor(Math.random() * filteredElems.length);
    var rand_ele = filteredElems[x_c];

    if (prev_circle) {
      dist_Click.push(dist_circle(prev_circle, rand_ele));
    }

    $(rand_ele).css("background-color", "#32b67a");
    $(rand_ele).click(function () {
      count_Click++;
      $(rand_ele).off("click");
      $(rand_ele).css("background-color", "#472f7d");
      next_time = Date.now();
      mt.push(next_time - curr_time);
    //   trialData.push(mt)
      printMT(mt);
      beginClick(rand_ele);
    });
  }
}

function dist_circle(past, current) {
  var element1 = past.getBoundingClientRect();
  var element2 = current.getBoundingClientRect();
  var dx = (element1.left + (element1.right - element1.left) / 2) - (element2.left + (element2.right - element2.left) / 2);
  var dy = (element1.top + (element1.bottom - element1.top) / 2) - (element2.top + (element2.bottom - element2.top) / 2);
  var dist = Math.sqrt(dx * dx + dy * dy);

  return dist;
}

function printMT(mt){
    var info = d3.select("#MTime")
    .append("div")
    .attr("class", "mtInfo");
    
    info.html("<div>" +"Click  #" + (count_Click - 1) + ":  "+ "<b>" + mt[count_Click-1]) + "</b>";
}


function emptyMT(mt){
    var info = d3.selectAll(".mtInfo").remove();
}










/////////////////////////////////////////////////////
/////Small Scatter Plot///////
/////////////////////////////////////////////////////

// function loadDataset(ds) {
//     var dataset = null;
//     switch (ds) {
//         case "dataset1":
//             dataset = dataset1;
//             break;
//         case "dataset2":
//             dataset = dataset2;
//             break;
//     }
//     drawScatterPlot1(dataset);
//     drawScatterPlot2(dataset);
//     drawScatterPlot3(dataset);;
// }


////////////////////////////////////
/////Scatter Plot1///////
function drawScatterPlot1(data) {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = $("#scatterTransition1").width()  - margin.left - margin.right,
    height = $("#scatterTransition1").height()  - margin.top - margin.bottom;

    // set the ranges
    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    // append the svg obgect to the body of the page
    // appends a 'group' element to 'svg'
    // moves the 'group' element to the top left margin
    var svg = d3.select("#scatterTransition1")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


    // Scale the range of the data
    x.domain([0, d3.max(data, function(d) { return d.distance; })]);
    y.domain([0, d3.max(data, function(d) { return d.ID; })]);

    var tooltip = d3.select("#divScatter1").append("div").attr("class", "toolTip");

    // Add the scatterplot
    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", "#512da8")
        .attr("cx", function(d) { return x(d.distance); })
        .attr("cy", function(d) { return y(d.ID); })
        .attr("opacity", "1")
        .on("mousemove", function (d) {
                d3.select(this).attr("opacity", "0.7");
                tooltip.style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 100 + "px")
                    .style("display", "inline-block")
                    .html("<div><b>" +"Distance" + "</b> : " + (d.distance) + "</div> " + "<b>" +"ID" + "</b> : " + f(d.ID));
        })
        .on("mouseout", function (d) {
                d3.select(this).attr("opacity", "1");
                tooltip.style("display", "none");
        });

    // Add the X Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

       // text label for the x axis
       svg.append("text")             
       .attr("transform",
       "translate(" + (width/2) + " ," + 
                      (height + margin.top/2 + 20) + ")")
       .style("text-anchor", "middle")
       .text("Distance");
  
      // Add the y Axis
      svg.append("g")
          .call(d3.axisLeft(y));
      
      // text label for the y axis
      svg.append("text")
          .attr("transform", "rotate(-90)")
          .attr("y", 0 - margin.left)
          .attr("x",0 - (height / 2))
          .attr("dy", "1em")
          .style("text-anchor", "middle")
          .text("Index of Difficulty (ID)"); 
  

}


////////////////////////////////////
/////Scatter Plot2///////
function drawScatterPlot2(data) {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = $("#scatterTransition2").width() - margin.left - margin.right,
    height = $("#scatterTransition2").height() - margin.top - margin.bottom;

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3.select("#scatterTransition2")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    x.domain([0, d3.max(data, function(d) { return d.width; })]);
    y.domain([0, d3.max(data, function(d) { return d.ID; })]);

    var tooltip = d3.select("#divScatter2").append("div").attr("class", "toolTip");

    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", 5)
        .attr("fill", "#00bfa5")
        .attr("cx", function(d) { return x(d.width); })
        .attr("cy", function(d) { return y(d.ID); })
        .attr("opacity", "1")
        .on("mousemove", function (d) {
                d3.select(this).attr("opacity", "0.7");
                tooltip.style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 100 + "px")
                    .style("display", "inline-block")
                    .html("<div><b>" +"Width" + "</b> : " + (d.width) + "</div> " + "<b>" +"ID" + "</b> : " + f(d.ID));
        })
        .on("mouseout", function (d) {
                d3.select(this).attr("opacity", "1");
                tooltip.style("display", "none");
        });

    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    
     // text label for the x axis
     svg.append("text")             
     .attr("transform",
     "translate(" + (width/2) + " ," + 
                    (height + margin.top/2 + 20) + ")")
     .style("text-anchor", "middle")
     .text("Width");

    // Add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Index of Difficulty (ID)"); 

}


/////////////////////////////////////////////////////////
////MT & ID Regression///////////
////////////////////////////////////
function drawScatterPlot3(data) {

    var margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = $("#scatterTransition3").width() - margin.left - margin.right,
    height = $("#scatterTransition3").height() - margin.top - margin.bottom;


    function linearRegression(y,x){

        var lr = {};
        var n = y.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < y.length; i++) {

            sum_x += x[i];
            sum_y += y[i];
            sum_xy += (x[i]*y[i]);
            sum_xx += (x[i]*x[i]);
            sum_yy += (y[i]*y[i]);
        } 

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);

        return lr;
    };

    var x = d3.scaleLinear().range([0, width]);
    var y = d3.scaleLinear().range([height, 0]);

    var svg = d3.select("#scatterTransition3")
        // .attr("width", width + margin.left + margin.right)
        // .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

    x.domain([0, d3.max(data, function(d) { return d.ID; })]);
    y.domain([0, d3.max(data, function(d) { return d.MT; })]);

    ///gradient color -> distance 
    var color = d3.scaleSequential(d3.interpolateViridis).domain([0,d3.max(data, function(d) { return d.distance; })]);
    
    ///tooltip
    var tooltip = d3.select("#divScatter3").append("div").attr("class", "toolTip");

    svg.selectAll("dot")
        .data(data)
        .enter().append("circle")
        .attr("r", function(d){return Math.sqrt(d.width)})
        .attr("fill", function(d,i) { return color(d.distance)})
        .attr("cx", function(d) { return x(d.ID); })
        .attr("cy", function(d) { return y(d.MT); })
        .attr("opacity", "1")
        .on("mousemove", function (d) {
                d3.select(this).attr("opacity", "0.7");
                tooltip.style("left", d3.event.pageX - 50 + "px")
                    .style("top", d3.event.pageY - 100 + "px")
                    .style("display", "inline-block")
                    .html("<div><b>" +"Distance" + "</b> : " + (d.distance) + "</div> " + "<b>" +"Width" + "</b> : " + (d.width));
        })
        .on("mouseout", function (d) {
                d3.select(this).attr("opacity", "1");
                tooltip.style("display", "none");
        });

    //Add the x Axis
    svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));

    // text label for the x axis
    svg.append("text")             
        .attr("transform",
        "translate(" + (width/2) + " ," + 
                       (height + margin.top/2 + 15) + ")")
        .style("text-anchor", "middle")
        .text("Index of Difficulty (bits)");

    // Add the y Axis
    svg.append("g")
        .call(d3.axisLeft(y));
    
    // text label for the y axis
    svg.append("text")
        .attr("transform", "rotate(-90)")
        .attr("y", 0 - margin.left)
        .attr("x",0 - (height / 2))
        .attr("dy", "1em")
        .style("text-anchor", "middle")
        .text("Movement Time (ms)"); 

    ///map x, y of regression line
    var yval = data.map(function (d) { return parseFloat(d.MT); });
    var xval = data.map(function (d) { return parseFloat(d.ID); });

    ///draw the line
    var lr = linearRegression(yval,xval);
    // console.log(lr);

    var max = d3.max(data, function (d) { return d.MT; });
    var myLine = svg.append("svg:line")
                .attr("x1", x(0))
                .attr("y1", y(lr.intercept))
                .attr("x2", x(max))
                .attr("y2", y( (max * lr.slope) + lr.intercept ))
                .style("stroke", "lightgray");
    // console.log(x(0));
    // console.log(y(lr.intercept));
}


