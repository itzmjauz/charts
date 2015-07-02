var labels =  ["January", "February", "March", "April", "May", "June", "July"];
var numbers = [[28, 48, 40, 19, 86, 27, 90], [65, 59, 80, 81, 56, 55, 40]];

function getData(labels, numbers) { // numbers being a 2D array of numbers ( row of rows )

    var dataRow = [];

    for (var x = 0 ; x < numbers.length ; x++) {
        dataRow[x] = {
            label : "number row : " + x,
            fillColor: "rgba(220,220,220,0.2)",
            strokeColor: "rgba(220,220,220,1)",
            pointColor: "rgba(220,220,220,1)",
            pointStrokeColor: "#fff",
            pointHighlightFill: "#fff",
            pointHighlightStroke: "rgba(220,220,220,1)",
            data: numbers[x]
        }
    }

    data = {
        labels: labels,
        datasets: dataRow
    }; // basic dat structure.

    return data;
}

var data = getData(labels, numbers);


var ctx = document.getElementById("myChart").getContext("2d");
var myLineChart = new Chart(ctx).Line(data);
