var data = []; 
// the variable that holds the data from csv file
var category_colors = {
    "distance": "#5B7BE9",
}; // JSON object with colors assigned to each category.



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


$(document).ready(function () {
    // loadData1();
    loadData2();
    loadDataset("dataset1");
    
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

function loadData2() {    
    d3.csv("data/HEData.csv", function (d) {
        data = d;
        data.forEach(function (item) {
            item.n = parseInt(item.n);
        });  
        drawScatterPlotMatrix(data);
    });
}



/////////////////////////////////////////////////////////
////Circle Test///////////
////////////////////////////////////
var elems = document.getElementsByClassName("icon");
// console.log(elems);
var increase = (Math.PI * 2 )/ 9;
// console.log(elems.length); ///0
var x_c = 0; var y_c = 0;
var angle = 0; var radius = 200; var width = 25; var height = 25;
// var center_top = ($("#slider-1").height() - $("#icon-1").height()) / 2;
var center_top = (470 - 70) / 2;
// console.log(center_top); ///NaN, 190d
// var center_left = ($("#slider-1").width() - $("#icon-1").width()) / 2;
var center_left = (450 - 70) / 2;
// console.log(center_left);
var count_Click; var curr_time; var nextTimeStamp; var mt; var dist_Click; var choice_width; var choice_dist;
// var experimentData = []; var fileCSV = [["W", "D", "Actual Distance", "MT"]];


function start() { 

  choice_width = $('input[name=width]:checked').val();
  choice_dist = $('input[name=distance]:checked').val();

  $('.icon').css({
    'top': center_top + 'px',
    'left': center_left + 'px'
  });
  ///?????Nan


  $(elems).css('opacity', '0').each(function (i) {
    elem = elems[i];

    x_c = choice_dist * Math.cos(angle) + center_left; //choice_dist = radius
    // console.log(x);
    y_c = choice_dist * Math.sin(angle) + center_top; //choice_dist = radius
    // console.log(y);

    $(elem).css("background-color", "rgb(10,30,90)");
    $(elem).off("click");

    $(elem).animate({
      'position': 'absolute',
      'width': choice_width + 'px', //choice_width = width
      'height': choice_width + 'px', // choice_width == height
      'left': x_c + 'px',
      'top': y_c + 'px',
      'opacity': '1'
    });

    angle += increase;
  });

  $('.start_note').css('visibility', 'hidden');
  $('.experiment_note').css('visibility', 'visible');
  count_Click = 0;
  mt = [];
  dist_Click = [];
  beginExp();
  
}

function beginExp(prev_circle) {
  curr_time = Date.now();
  if (count_Click === 16) {
    alert('The trial has ended. Choose different widths and distances and continue trials');
    $('.experiment_note').css('visibility', 'hidden');
    $('.start_note').css('visibility', 'visible');
  } else {
    var filteredElems = _.without(elems, prev_circle);
    var x_c = Math.floor(Math.random() * filteredElems.length);
    var rand_ele = filteredElems[x_c];

    if (prev_circle) {
      dist_Click.push(dist_circle(prev_circle, rand_ele));
    }

    $(rand_ele).css("background-color", "rgb(10, 136, 66)");
    $(rand_ele).click(function () {
      count_Click++;
      $(rand_ele).off("click");
      $(rand_ele).css("background-color", "rgb(10,30,90)");
      nextTimeStamp = Date.now();
      mt.push(nextTimeStamp - curr_time);
      beginExp(rand_ele);
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




/////////////////////////////////////////////////////
/////Small Multiples///////
/////////////////////////////////////////////////////

function loadDataset(ds) {
    var dataset = null;
    switch (ds) {
        case "dataset1":
            dataset = dataset1;
            break;
        case "dataset2":
            dataset = dataset2;
            break;
    }
    drawScatterPlot1(dataset);
    drawScatterPlot2(dataset);
    drawScatterPlot3(dataset);
}


/////Scatter Plot1///////
function drawScatterPlot1(ds) {
    var x = d3.scaleBand()
            .domain(["80", "160", "240", "320", "400"])
            .range([0, $("#divScatter1").width()])
            .padding(1);

    var y = d3.scaleLinear()
            .domain([0, 60])
            .range([300, 0]);

    // var tooltip = d3.select("#divScatter1").append("div").attr("class", "toolTip");

    var svg = d3.select("#scatterTransition1");

    svg.selectAll(".dot")
        .data(ds)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r",5);

    svg.selectAll(".dot")
        .attr("fill", "blue")
        .attr("cx", function (d) { return x(d.distance); })
        .transition()
        .attr("cy", function (d) { return y(d.ID); });

}

/////Scatter Plot2///////
function drawScatterPlot2(ds) {
    var x = d3.scaleBand()
            .domain(["20", "40", "60", "80", "100"])
            .range([0, $("#divScatter2").width()])
            .padding(1);

    var y = d3.scaleLinear()
            .domain([0, 6])
            .range([300, 0]);

    var svg = d3.select("#scatterTransition2");

    svg.selectAll(".dot")
        .data(ds)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r",5);

    svg.selectAll(".dot")
        .attr("fill", "#green")
        .attr("cx", function (d) { return x(d.width); })
        .transition()
        .attr("cy", function (d) { return y(d.ID); });
}

/////Scatter Plot3///////
function drawScatterPlot3(ds) {
    var x = d3.scaleBand()
            .domain(["1", "2", "3", "4", "5"])
            .range([0, $("#divScatter3").width()])
            .padding(1);

    var y = d3.scaleLinear()
            .domain([0, 1050])
            .range([300, 0]);

    var svg = d3.select("#scatterTransition3");

    svg.selectAll(".dot")
        .data(ds)
        .enter().append("circle")
        .attr("class", "dot")
        .attr("r",5);

    svg.selectAll(".dot")
        .attr("fill", "red")
        .attr("cx", function (d) { return x(d.ID); })
        .transition()
        .attr("cy", function (d) { return y(d.MT); });
}




/////////////////////////////////////////////////////
/////Scatter Plot Matrix///////
/////////////////////////////////////////////////////
function drawScatterPlotMatrix(data) {
    
    var columns = data.columns;
    // console.log(columns.length); //4
    var width = 964;
    var padding = 20;
    var size = (width - (columns.length + 1) * padding) / columns.length + padding;
    // console.log(size); 
    ////new added
    const axis_x = d3.axisBottom();
    const axis_y = d3.axisLeft();


    var x = columns.map(c => d3.scaleLinear()
    .domain(d3.extent(data, d => d[c]))
    .rangeRound([padding / 2, size - padding / 2]));

    var y = x.map(x => x.copy().range([size - padding / 2, padding / 2]));

    var z = d3.scaleOrdinal()
    .domain(data.map(d => d.species))
    .range(d3.schemeCategory10);

    ////change
    function xAxis () { 
        axis_x
            .ticks(6)
            .tickSize(size * columns.length);
        return g => g.selectAll("g").data(x).enter().append("g")
            .attr("transform", (d, i) => `translate(${(columns.length - i - 1) * size},0)`)
            .each(function(d) { return d3.select(this).call(axis_x.scale(d)); })
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"))};

    function yAxis () { 
        axis_y
            .ticks(6)
            .tickSize(-size * columns.length);
        return g => g.selectAll("g").data(y).enter().append("g")
            .attr("transform", (d, i) => `translate(0,${i * size})`)
            .each(function(d) { return d3.select(this).call(axis_y.scale(d)); })
            .call(g => g.select(".domain").remove())
            .call(g => g.selectAll(".tick line").attr("stroke", "#ddd"))};


    const svg = d3.select("#PlotMatrix")
      .attr("viewBox", `${-padding} 0 ${width} ${width}`)
      .style("max-width", "100%")
      .style("height", "auto");

    svg.append("g")
      .call(xAxis()); ////change

    svg.append("g")
      .call(yAxis());

    const cell = svg.append("g")
        .selectAll("g")
        .data(d3.cross(d3.range(columns.length), d3.range(columns.length)))
        .enter().append("g")
        .attr("transform", ([i, j]) => `translate(${(columns.length - i - 1) * size},${j * size})`);

    cell.append("rect")
      .attr("fill", "none")
      .attr("stroke", "#aaa")
      .attr("x", padding / 2 + 0.5)
      .attr("y", padding / 2 + 0.5)
      .attr("width", size - padding)
      .attr("height", size - padding);

    cell.each(function([i, j]) {
    d3.select(this).selectAll("circle")
      .data(data)
      .enter().append("circle")
        .attr("cx", d => x[i](d[columns[i]]))
        .attr("cy", d => y[j](d[columns[j]]))
        .attr("r", 3.5)
        .attr("fill-opacity", 1)
        .attr("fill", d => z(d.species));
    });

    svg.append("g")
      .style("font", "bold 10px sans-serif")
        .selectAll("text")
        .data(columns)
        .enter().append("text")
      .attr("transform", (d, i) => `translate(${(columns.length - i - 1) * size},${i * size})`)
      .attr("x", padding)
      .attr("y", padding)
      .attr("dy", ".71em")
      .text(d => d);

//   return svg.node();
}