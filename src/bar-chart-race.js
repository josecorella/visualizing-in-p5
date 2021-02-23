let rectX2 = 100;
let rectSpeed1 = 5, rectSpeed2 = 1;
let barWidth = 30;
let max_year = 23;
let curr_year = 0;
let diff = 0;
let y = 100;

let data;

let players = {};

// preload table data
function preload() {
    data = loadTable(
        '../data/baseball.csv',
        'csv',
        'header');
}

function setup() {
    createCanvas(2000, 1000);
    background(255);

    function Stats (player, homeruns) {
        this.player = player;
        this.homeruns = homeruns;
    }
    
    var dict = []; // create an empty array

    for (let i = 0; i < data.getRowCount(); i++) {
        var year = data.getRow(i).getString("year");
        years[year] = [];
    }

    for (let i = 0; i < data.getRowCount(); i++) {
        var year = data.getRow(i).getString("year"); 
        var player = data.getRow(i).getString("name");
        var homerun = data.getRow(i).getString("hr");

        var entry = years[year];
        entry.push(new Stats(player, homerun));
        // entry.sort(function (a, b) {
        //     return b.homeruns - a.homeruns;
        // });
    }

    line(200, 600, 1000, 600); //draw xaxis
    textAlign(CENTER); //draw the axis label
    text('Homeruns', 610, 650);

    line(200, 600, 200, 100); //draw yaxis
    textAlign(CENTER);
    text('Homeruns by Player', 600, 90);

    //draw the next tiks in between
    var num_ticks = 9;

    var x = 200;
    for (let i = 0; i < num_ticks; i++) {
        line(x + (100 * i), 595, x + (100 * i), 605); //super secrety formulas that took me wayyyy too long
        text(0 + i * 100, x + (100 * i), 625);
    }

    console.log(years);
}

function draw() {


    var year_entry = years[curr_year];
    console.log(year_entry);

    for (const player in year_entry) {
        
    }

    if (curr_year < max_year) {
        curr_year++;
    } else {
        curr_year = 0;
    }

    // if (curr_year <= max_year) {
    //     var year = curr_year.toString();
    //     var items = years[year].slice(0, 10);
        
    //     items.forEach(element => {
    //         draw_rect(200, y + diff, barWidth, 25);
    //         console.log(y + diff);
    //         diff += 35;
    //     });
    //     barWidth = 30;
    // }

    // for (const key in years) {
        

    //     for (let index = 0; index < 10; index++) {
    //         //    x,   y,    w,      h 
    //         rect(200, 100, barWidth, 25);
    //         rect(200, 135, barWidth, 25);
    //         rect(200, 170, barWidth, 25);
    //         rect(200, 205, barWidth, 25);
    //         rect(200, 240, barWidth, 25);
    //         rect(200, 275, barWidth, 25);
    //         rect(200, 310, barWidth, 25);
    //         rect(200, 345, barWidth, 25);
    //         rect(200, 380, barWidth, 25);
    //         rect(200, 415, barWidth, 25);
    //         if (barWidth < 500) {
    //             barWidth = barWidth + 2.5 // Growing bar length 
    //             // barWidth = 0;
    //         }
    //     }
    //     barWidth = 30;
    // }
}

function draw_rect(x, y, width, height) {
    fill('#2056fd');
    rect(200, 100, barWidth, 25);
    if (barWidth < 500) {
        barWidth = barWidth + 2.5 // Growing bar length
        // barWidth = 0;
    }
}

