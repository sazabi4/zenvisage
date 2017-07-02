function constructDatasetChangeQuery( datasetName )
{
  return new formQuery( datasetName );
}
function formQuery( databasename ){
  this.databasename = databasename;
}

function constructUserQuery()
{
  return new Query( "SimilaritySearch" );
}

function constructRepresentativeTrendQuery()
{
  return new Query( "RepresentativeTrends" );
}

function constructOutlierTrendQuery()
{
  return new Query( "Outlier" );
}

function Query( searchMethod ) {
  this.method = searchMethod; // fix to dynamically fetch
  this.xAxis = getSelectedXAxis();
  this.yAxis = getSelectedYAxis();
  this.groupBy = getSelectedCategory();
  this.aggrFunc = getAggregationMethod();
  this.aggrVar = getSelectedYAxis();
  this.outlierCount = getNumResults();
  this.dataX = []; // fix to dynamically fetch
  this.dataY = []; // fix to dynamically fetch
  this.yMax = null; // fix to dynamically fetch. is this field necessary?
  this.yMin = null; // fix to dynamically fetch. is this field necessary?
  var points = []

  for(var i = 0; i < sketchpadData.length; i++){
    var xp = sketchpadData[i]["xval"];
    var yp = sketchpadData[i]["yval"];
    points.push(new Point( xp, yp ));
    this.dataX.push( xp );
    this.dataY.push( yp );
  }

  this.sketchPoints = [new SketchPoints(this.xAxis, this.yAxis, points)];
  this.distanceNormalized = false; // fix to dynamically fetch
  this.outputNormalized = false; // fix to dynamically fetch
  this.clustering = "KMeans"; // fix to dynamically fetch
  this.kMeansClusterSize = getClusterSize();
  this.distance_metric = getDistanceMethod(); // fix to dynamically fetch
  this.predicateOperator = "";
  this.predicateColumn = "";
  this.predicateValue = "";
  this.filter = getFilter();
  this.xRange = getXRange();
  //this.segmentCount = getNumSegments();
  this.considerRange = getConsiderRange();
  this.smoothingType = getSmoothingType();
  this.smoothingcoefficient = getSmoothingCoefficient();
  this.includeQuery=";"
  this.yOnly="";
}
function getFilter(){
  return $("#filter.form-control").val();
}
// function getParsePredicate(){
//   var constraint = $("#filter.form-control").val();
//   var predicateOperator = "=";
//   var predicateColumn = getSelectedCategory();
//   var predicateValue = ""
//   if (constraint.includes(">")){
//     predicateOperator=">";
//   }
//   else if (constraint.includes("<")){
//     predicateOperator="<";
//   }
//   else if (constraint.includes("=")){
//     predicateOperator="=";
//   }
//   else{
//     //not a constraint statement 
//     return [predicateOperator,predicateColumn,predicateValue]
//   }
//   predicateColumn= constraint.split(">")[0]
//   predicateValue= constraint.split(">")[1]
//   return [predicateOperator,predicateColumn,predicateValue]
// }
function SketchPoints(xAxisName, yAxisName, points){
  var xAxisData = globalDatasetInfo.xAxisColumns;
  var yAxisData = globalDatasetInfo.yAxisColumns;
  this.points = points;
  this.minX = xAxisData[xAxisName]["min"];
  this.maxX = xAxisData[xAxisName]["max"];
  this.minY = yAxisData[yAxisName]["min"];
  this.maxY = yAxisData[yAxisName]["max"];
  this.yAxis = getSelectedYAxis();
  this.xAxis = getSelectedXAxis();
  this.groupBy = getSelectedCategory();
  this.aggrFunc = getAggregationMethod();
  this.aggrVar = getSelectedYAxis();
}

function getSelectedXAxis()
{
  return angular.element($("#sidebar")).scope().selectedXAxis;
}

function getSelectedYAxis()
{
  return angular.element($("#sidebar")).scope().selectedYAxis;
}

function getSelectedCategory()
{
  return angular.element($("#sidebar")).scope().selectedCategory;
}

function getSmoothingCoefficient()
{
  return $( "#slider-range-max" ).slider( "value" );
}

function getSmoothingType()
{
  return angular.element($("#smoothing-form-control option:selected")).val()
}

function getXRange() //when zoomed in
{
  return xrangeNew;
}

function getAggregationMethod()
{
  return angular.element($("#table-div")).scope().aggregation;
}

function getDistanceMethod()
{
  return angular.element($("#table-div")).scope().similarity;
}

function getNumResults()
{
  return angular.element($("#table-div")).scope().numResults;
}

function getClusterSize()
{
  return angular.element($("#table-div")).scope().clusterSize;
}

function getConsiderRange()
{
  return angular.element($("#table-div")).scope().considerRange;
}

function getScatterplotOption()
{
  return angular.element($("#table-div")).scope().showScatterplot;
}

function getflipY()
{
  return angular.element($("#table-div")).scope().flipY;
}

function usingPattern()
{
  return angular.element($("#table-div")).scope().flipY;
}

function getShowOriginalSketch()
{
  return angular.element($("#table-div")).scope().showOriginalSketch;
}

function getNumSegments()
{
  return $('#num-segments input').val()
}

function getSelectedDataset()
{
  return $("#dataset-form-control option:selected").val();
}
