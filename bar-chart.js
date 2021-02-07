let data;
let sales_console;
let keys;

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

  sales_console = {};
  var consoles = data.getColumn("Release.Console"); //data for the y axis

  consoles.forEach(element => {
    sales_console[element] = "0";
  });

  for (let i = 0; i < data.getRowCount(); i++) {
    var console_type = data.getRow(i).getString("Release.Console");
    var sale = data.getRow(i).getString("Metrics.Sales");
    
    sales_console[console_type] = 
      str(parseFloat(sales_console[console_type]) + parseFloat(sale));
  
  }

  line(250, 400, 700, 400); //draw xaxis
  textAlign(CENTER); //draw the axis label
  text('Sales (millions)', 475, 475);

  line(250, 400, 250, 50); //draw yaxis
  textAlign(CENTER);
  text('Console', 200, 25);

  // draw the ticks
  var max_sales = 0;
  for (var key in sales_console) {
    if (max_sales < int(sales_console[key])) {
      max_sales = int(sales_console[key]);
    }
  }
  max_sales = Math.ceil(max_sales/10) * 10 + 10;

  text(max_sales, 690, 425);
  line(690, 390, 690, 410);


  var num_ticks = 9;





}