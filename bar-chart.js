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

  var all_titles = data.getColumn("Title"); //data for the y axis
  var sales = {}
  var titles = {}

  for (var i = 0; i < 10; i++) {
    titles[i] = all_titles[i];
    sales[i] = data.getRow(i).getString("Metrics.Sales");
  }

  console.log(titles);
  console.log(sales);

  // how many rows?
  console.log(data.getRowCount());
  // what are the columns?
  console.log(data.columns);

  //draw xaxis
  line(250, 400, 700, 400);

  //draw yaxis
  line(250, 400, 250, 50);


}