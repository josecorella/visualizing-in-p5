let rectX2 = 100;
let rectSpeed1 = 5, rectSpeed2 = 1;
let max_year = 23;
let curr_year = 0;
let hrs = 0;
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
    // frameRate(10);

    function Stats (player, homeruns) {
        this.year = player;
        this.homeruns = homeruns;
    }

    for (let i = 0; i < data.getRowCount(); i++) {
        var player = data.getRow(i).getString("name");
        players[player] = [];
    }

    for (let i = 0; i < data.getRowCount(); i++) {
        var year = data.getRow(i).getString("year"); 
        var player = data.getRow(i).getString("name");
        var homerun = data.getRow(i).getString("hr");

        var entry = players[player];
        entry.push(new Stats(year, homerun));
    }

    

    

    console.log(players["Albert Pujols"].length);
}

function draw() {
    background(255);
    hrs = 0
    diff = 30;

    line(200, 890, 1000, 890); //draw xaxis
    textAlign(CENTER); //draw the axis label
    text('Homeruns', 610, 950);

    line(200, 600, 200, 100); //draw yaxis
    textAlign(CENTER);
    text('Homeruns by Player', 600, 90);

    //draw the next tiks in between
    var num_ticks = 9;

    var x = 200;
    for (let i = 0; i < num_ticks; i++) {
        line(x + (100 * i), 885, x + (100 * i), 900); //super secrety formulas that took me wayyyy too long
        text(0 + i * 100, x + (100 * i), 915);
    }

    

    for (const player in players) {
        //player has played longer than the year we are in
        if (players[player].length > curr_year ) {
            hrs = players[player][curr_year].homeruns;    
        } else { //player retired so grab last known amount
            hrs = players[player][players[player].length - 1].homeruns;
        }
        draw_rect(player, 200, 70 + diff, hrs, 30, hrs);
        diff += 40 
    }

    if (curr_year <= max_year) {
        curr_year++;
    } else {
        year = 0;
    }
}

function draw_rect(name, x, y, width, height, hrs) {
    fill('#000000');
    text(name, x - 50, y + 20);
    fill('#2056fd');
    rect(x, y, width, height);
    fill('#000000');
    text(hrs, parseFloat(width) + x + 15, y + 20);
}

