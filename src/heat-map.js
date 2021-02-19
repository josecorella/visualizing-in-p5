let data;
let consoles;

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


    consoles = {};
    year_sale = {
        "2004":0.0,
        "2005":0.0,
        "2006":0.0,
        "2007":0.0,
        "2008":0.0
    };

    var console_name = data.getColumn("Release.Console"); //data for the y axis

    console_name.forEach(element => {
        consoles[element] = Object.create(year_sale);
    });

    for (let i = 0; i < data.getRowCount(); i++) {
        console_type = data.getRow(i).getString("Release.Console");
        sale = data.getRow(i).getString("Metrics.Sales");
        year = data.getRow(i).getString("Release.Year");
        consoles[console_type][year] = consoles[console_type][year] + parseFloat(sale);
    }
    console.log(consoles);

    //go through all the entries and draw boxes
    let x = 350;
    let y = 100;
    let mx = 0;
    let my = 0;

    textSize(15);
    textAlign(CENTER);
    text("Yearly Video Game Sales by Console", 430, 320);
    for (var console_type in consoles) {
        fill('#000000');
        textSize(15);
        textAlign(RIGHT);
        text(console_type, 340, y + my + 20);
        for (var year in year_sale) {
            var money = consoles[console_type][year];
            if (money == 0) {
                fill('#ffffff');
            }
            if (money > 1 && money < 10) {
                fill('#daf7a6');
            } else if (money > 10 && money < 20) {
                fill('#fffb7b');
            } else if (money > 20 && money < 30) {
                fill('#fff700');
            } else if (money > 30 && money < 40) {
                fill('#ff5a00');
            } else if (money > 40) {
                fill('#ff0000');
            }
            square(x+mx,y+my,30);
            mx += 35;
        }
        my += 35;
        mx = 0;
    }

    // add years
    let dx = 0;
    for (var year in year_sale) {
        fill('#000000');
        textSize(12);
        textAlign(CENTER);
        text(year, x+dx+15, y+my+12);
        dx += 35;
    }
}
