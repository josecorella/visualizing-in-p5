let data;

// preload table data
function preload() {
  data = loadTable(
    'video_games.csv',
    'csv',
    'header');
}

let detailY;
function setup() {
  createCanvas(500, 500, WEBGL);
  
  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);
}