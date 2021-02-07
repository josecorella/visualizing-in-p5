let data;
let sales_console;

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

  sales_console = createStringDict({});
  var consoles = data.getColumn("Release.Console"); //data for the y axis

  consoles.forEach(element => {
    sales_console.create(element, "0");
  });

  for (let i = 0; i < data.getRowCount(); i++) {
    var console_type = data.getRow(i).getString("Release.Console");
    var sale = data.getRow(i).getString("Metrics.Sales");
    
    sales_console.set(
      console_type,
      str(parseFloat(sales_console.get(console_type)) + parseFloat(sale))
    );
  }

  //draw xaxis
  line(250, 400, 700, 400);

  //draw yaxis
  line(250, 400, 250, 50);


}