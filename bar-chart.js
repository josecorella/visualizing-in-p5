let data;

// preload table data
function preload() {
  data = loadTable(
    'video_games.csv',
    'csv',
    'header');
}

function setup() {
  createCanvas(1000, 500);
  background(255);

  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);

  var xLen = 700;
  //draw xaxis
  line(250, 400, 700, 400);

  //draw yaxis
  line(250, 400, 250, 50);


}