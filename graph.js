var labels  = ["January", "February", "March", "April", "May", "June", "July"];
var numbers = [[28, 48, 40, 19, 86, 27, 90], [65, 59, 80, 81, 56, 55, 40]];
var colors  = [[220,220,220], [151,187,205]];


function rgba(r, g, b, a) {
    return "rgba(" + r + "," + g + "," + b + "," + a + ")";
}

function getData(labels, numbers, colors) { // numbers being a 2D array of numbers ( row of rows )

    var dataRow = [];

    for (var x = 0 ; x < numbers.length ; x++) {
        dataRow[x] = {
            label : "number row : " + x,
            fillColor: rgba(colors[x][0], colors[x][1], colors[x][2], 0.2),
            strokeColor: rgba(colors[x][0], colors[x][1], colors[x][2], 1),
            pointColor: rgba(colors[x][0], colors[x][1], colors[x][2], 1),
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: rgba(colors[x][0], colors[x][1], colors[x][2], 1),
            data: numbers[x]
        }
    }

    data = {
        labels: labels,
        datasets: dataRow
    }; // basic dat structure.

    return data;
}

var data = getData(labels, numbers, colors);


var ctx = document.getElementById("myChart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data);
