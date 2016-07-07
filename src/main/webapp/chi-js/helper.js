//stores dygraphs
var userQueryDygraphs = {};
var representativeDygraphs = {};
var outlierDygraphs = {};

//displays user results
function displayUserQueryResultsHelper( userQueryResults )
{
  $("#results-table").empty();
  var resultsDiv = $("#results-table");
  var current = 0;
  for (var count = 0; count < userQueryResults.length; count++)
  {
    if (count%2 == 0)
    {
      var newRow = $("#results-table").append("<tr id=\"row-" + count.toString() + "\"></tr>")
      current = count;
    }
    $("#row-" + current.toString()).append("<td><div class=\"user-query-results draggable-graph\" data-graph-type=\"userQuery\" id=\"result-" + count.toString() + "\"></div></td>");
  }
  for (var count = 0; count < userQueryResults.length; count++)
  {
    var xData = userQueryResults[count]["xData"];
    var yData = userQueryResults[count]["yData"];

    var xlabel = userQueryResults[count]["xType"];
    var ylabel = userQueryResults[count]["yType"];

    var xmin = Math.min.apply(Math, xData);
    var xmax = Math.max.apply(Math, xData);
    var ymin = Math.min.apply(Math, yData);
    var ymax = Math.max.apply(Math, yData);

    var data = [];
    var arrayLength = xData.length;
    for (var i = 0; i < arrayLength; i++ ) {
      data.push( [ Number(xData[i]), Number(yData[i]), Number(sketchpad.rawData_[i][1]) ]);
    }
    var valueRange = [ymin, ymax];
    userQueryDygraphs["result-" + count.toString()] = new Dygraph(document.getElementById("result-" + count.toString()), data,
      {
        valueRange: valueRange,
        xlabel: xlabel,
        xLabelHeight: 11,
        axisLabelWidth: (0,0),
        axisLabelFontSize: 0,
        ylabel: null,
        showLabelsOnHighlight: false,
        highlightCircleSize: 0,
        interactionModel: {},
        drawGrid: false,
        colors: [ "0E3340", "#90C3D4" ],
      });
  }

  $(".draggable-graph").draggable({
    opacity: 0.5,
    helper: function() {
      return $(this).clone().css({
        width: $(event.target).width(),
        'border-style': "solid",
        'border-width': 1
      });
    }
  });

}

function displayRepresentativeResultsHelper( representativePatternResults )
{
  $("#representative-table").find('tr').not('.middle-right-headers').remove();
  var resultsDiv = $("#representative-table");
  var varFinalArray = []
  for(var count = 0; count < 4; count++) //need to fix count
  {
    var newRow = resultsDiv.append("<tr id=\"representative-row-" + count.toString() + "\"></tr>")
    $("#representative-row-" + count.toString()).append("<td><div class=\"representative-results draggable-graph\" data-graph-type=\"representativeQuery\" id=\"representative-result-" + count.toString() + "\"></div></td>");
    varFinalArray.push(representativePatternResults[count]);
  }

  for (var count = 0; count < varFinalArray.length; count++)
  {
    var xData = varFinalArray[count]["xData"];
    var yData = varFinalArray[count]["yData"];

    var xlabel = varFinalArray[count]["xType"];
    var ylabel = varFinalArray[count]["yType"];

    var xmin = Math.min.apply(Math, xData);
    var xmax = Math.max.apply(Math, xData);
    var ymin = Math.min.apply(Math, yData);
    var ymax = Math.max.apply(Math, yData);

    var data = [];
    var arrayLength = xData.length;
    for (var i = 0; i < arrayLength; i++ ) {
      data.push( [ Number(xData[i]), Number(yData[i]) ] );
    }
    var valueRange = [ymin, ymax];
    representativeDygraphs["representative-result-" + count.toString()] = new Dygraph(document.getElementById("representative-result-" + count.toString()), data,
      {
        valueRange: valueRange,
        xlabel: xlabel,
        xLabelHeight: 11,
        axisLabelWidth: (0,0),
        axisLabelFontSize: 0,
        ylabel: null,
        showLabelsOnHighlight: false,
        highlightCircleSize: 0,
        interactionModel: {},
        drawGrid: false,
        colors: [ "0E3340" ],
      });
  }

  $(".draggable-graph").draggable({
    opacity: 0.5,
    helper: function() {
      return $(this).clone().css({
        width: $(event.target).width(),
        'border-style': "solid",
        'border-width': 1
      });
    }
  });
}

function displayOutlierResultsHelper( outlierResults )
{
  $("#outlier-table").find('tr').not('.middle-right-headers').remove();
  var resultsDiv = $("#outlier-table");
  var varFinalArray = [];
  for(var count = 0; count < 4; count++) //need to fix count
  {
    var newRow = resultsDiv.append("<tr id=\"outlier-row-" + count.toString() + "\"></tr>")
    $("#outlier-row-" + count.toString()).append("<td><div class=\"outlier-results draggable-graph\" data-graph-type=\"outlierQuery\" id=\"outlier-result-" + count.toString() + "\"></div></td>");
    varFinalArray.push(outlierResults[count]);
  }

  for (var count = 0; count < varFinalArray.length; count++)
  {
    var xData = varFinalArray[count]["xData"];
    var yData = varFinalArray[count]["yData"];

    var xlabel = varFinalArray[count]["xType"];
    var ylabel = varFinalArray[count]["yType"];

    var xmin = Math.min.apply(Math, xData);
    var xmax = Math.max.apply(Math, xData);
    var ymin = Math.min.apply(Math, yData);
    var ymax = Math.max.apply(Math, yData);

    var data = [];
    var arrayLength = xData.length;
    for (var i = 0; i < arrayLength; i++ ) {
      data.push( [ Number(xData[i]), Number(yData[i]) ] );
    }
    var valueRange = [ymin, ymax];
    outlierDygraphs["outlier-result-" + count.toString()] = new Dygraph(document.getElementById("outlier-result-" + count.toString()), data,
      {
        valueRange: valueRange,
        xlabel: xlabel,
        xLabelHeight: 11,
        axisLabelWidth: (0,0),
        axisLabelFontSize: 0,
        ylabel: null,
        showLabelsOnHighlight: false,
        highlightCircleSize: 0,
        interactionModel: {},
        drawGrid: false,
        colors: [ "0E3340" ],
      });
  }

  $(".draggable-graph").draggable({
    opacity: 0.5,
    helper: function() {
      return $(this).clone().css({
        width: $(event.target).width(),
        'border-style': "solid",
        'border-width': 1
      });
    }
  });
}

var userQueryDygraphs = {};
var representativeDygraphs = {};
var outlierDygraphs = {};

function uploadToSketchpad( draggableId, graphType )
{
  var draggedGraph;
  switch( graphType ) {
    case "representativeQuery":
      draggedGraph = representativeDygraphs[draggableId];
      break;
    case "outlierQuery":
      draggedGraph = outlierDygraphs[draggableId];
      break;
    default: //userQuery
      draggedGraph = userQueryDygraphs[draggableId];
  }
  plotSketchpad(draggedGraph);
}

/*
$( "#list" ).on( "click", "a", function( event ) {
    event.preventDefault();
    console.log( $( this ).text() );
});
*/

$(document).ready(function(){
  $("#draw-div").droppable({
    accept: ".draggable-graph",
    drop: function( event, ui )
    {
      uploadToSketchpad($(ui.draggable).attr('id'), $(ui.draggable).data('graph-type'));
    }
  });
});


