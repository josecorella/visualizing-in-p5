let data;
let sales_console;
let keys;

// preload table data
function preload() {
  data = loadTable(
    '../data/video_games.csv',
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
  text('Sales (millions)', 475, 460);

  line(250, 400, 250, 180); //draw yaxis
  textAlign(CENTER);
  text('Video Game Sales by Console', 475, 150);

  // draw the ticks
  var max_sales = 0;
  for (var key in sales_console) {
    if (max_sales < int(sales_console[key])) {
      max_sales = int(sales_console[key]);
    }
  }
  max_sales = Math.ceil(max_sales/10) * 10 + 10;

  //label start and ending tiks
  text(0, 250, 425);
  line(250, 395, 250, 405); // + 55
  text(max_sales, 689, 425);
  line(689, 395, 689, 405);

  //draw the next tiks in between
  var num_ticks = 8;
  
  var x = 305;
  for (let i = 0; i < num_ticks; i++) {
    line(x + (48 * i), 395, x + (48 * i), 405); //super secrety formulas that took me wayyyy too long
    text(0 + (i + 1) * 20, x + (48 * i), 425);
    console.log(x + (48 * i));
  }

  
  fill('#009900');
  var length = sales_console['Sony PSP'];
  rect(250, 325, length * 2.5, 35); //(where x?, where y?, x val, width)
  fill(0);
  text('Sony PSP', 210, 345);

  fill('#009900');
  var length = sales_console['PlayStation 3'];
  rect(250, 285, length * 2.5, 35); //(where x?, where y?, x val, width)
  fill(0);
  text('Playstation 3', 210, 305);

  fill('#009900');
  var length = sales_console['Nintendo Wii'];
  rect(250, 245, length * 2.5, 35); //(where x?, where y?, x val, width)
  fill(0);
  text('Nintendo Wii', 210, 265);

  fill('#009900');
  var length = sales_console['Nintendo DS'];
  rect(250, 205, length * 2.5, 35); //(where x?, where y?, x val, width)
  fill(0);
  text('Nintendo DS', 210, 225);

  fill('#009900');
  var length = sales_console['X360'];
  rect(250, 165, length * 2.5, 35); //(where x?, where y?, x val, width)
  fill(0);
  text('Xbox 360', 210, 180);

}