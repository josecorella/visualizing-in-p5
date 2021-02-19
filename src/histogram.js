let data;
let keys;

// preload table data
function preload() {
    data = loadTable(
        '../data/classics.csv',
        'csv',
        'header');
}

function setup() {
    createCanvas(1050, 600);
    background(255);

    year_bins = {
        "-800":0,
        "-600":0,
        "-400":0,
        "-200":0,
        "0":0,
        "200":0,
        "400":0,
        "600":0,
        "800":0,
        "1000":0,
        "1200":0,
        "1400":0,
        "1600":0,
        "1800":0,
        "2000":0 
    };

    for (let i = 0; i < data.getRowCount(); i++) {
        var year = parseInt(data.getRow(i).getString("bibliography.author.birth"));
        
        if (year < -600) {
            year_bins["-800"] += 1;
        } else if (year < -400) {
            year_bins["-600"] += 1;
        } else if (year < -200) {
            year_bins["-400"] += 1;
        } else if (year < 0) {
            year_bins["-200"] += 1;
        } else if (year < 200) {
            year_bins["0"] += 1;
        } else if (year < 400) {
            year_bins["200"] += 1;
        } else if (year < 600) {
            year_bins["400"] += 1;
        } else if (year < 800) {
            year_bins["600"] += 1;
        } else if (year < 1000) {
            year_bins["800"] += 1;
        } else if (year < 1200) {
            year_bins["1000"] += 1;
        } else if (year < 1400) {
            year_bins["1200"] += 1;
        } else if (year < 1600) {
            year_bins["1400"] += 1;
        } else if (year < 1800) {
            year_bins["1600"] += 1;
        } else if (year < 2000) {
            year_bins["1800"] += 1;
        }
    }
    line(150, 450, 778, 450); //draw xaxis
    textAlign(CENTER); //draw the axis label
    textSize(15);
    text('Year', 500, 520);
    text('Frequency of Author\'s Birth Year', 500, 80);

    line(150, 450, 150, 100); //draw yaxis
    angleMode(DEGREES);
    textSize(15);
    translate(150, 325);
    rotate(-90);
    text("Number of Authors", 50, -75);
    angleMode();
    rotate(90);
    translate(0, 0);
    
    // draw the y axis ticks
    var x = -10;
    var y = 125;
    var dy = 0;
    text(0, x, y);
    dy -= 50;

    for (let i = 1; i < 8; i++) {
        line(-5, y+dy, 5, y+dy);
        text(i * 100, x - 15, y + dy);
        dy -= 50;
    }

    x = 50;
    var dx = 0;
    y = 125;
    var start_year = -800;
    var diff_year = 0;
    
    for (var key in year_bins) {
        text("|", x + dx, y);
        text(start_year + diff_year, x + dx, 150);
        if (start_year + diff_year != 2000) {
            fill('#009900');
            rect(x + dx, 125, 52, -year_bins[start_year + diff_year] / 2);
            fill('#000000');
        }

        dx += 52;
        diff_year += 200;
    }
}