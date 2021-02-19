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

    line(150, 550, 365, 550); //draw xaxis
    textAlign(CENTER); //draw the axis label
    textSize(15);
    text('William Shakespeare\'s', 260, 575);
    text('Books',260,600)

    line(150, 550, 150, 50); //draw yaxis
    angleMode(DEGREES);
    textSize(15);
    translate(150, 325);
    rotate(-90);
    text("Gutenberg Book Rank", -25, -75);
    angleMode();
    rotate(90);
    translate(0, 0);

    // draw the y axis ticks
    var x = -10;
    var y = 225;
    var dy = 0;
    text(0, x, y);
    dy -= 50;

    for (let i = 1; i < 11; i++) {
        line(-5, y + dy, 5, y + dy);
        text(i * 100, x - 15, y + dy);
        dy -= 50;
    }

    var rank = [];

    for (let i = 0; i < data.getRowCount(); i++) {
        var author = data.getRow(i).getString("bibliography.author.name");
        
        if (author == "Shakespeare, William") {
            if (data.getRow(i).getString("bibliography.title") != "The Complete Works of William Shakespeare") {
                rank.push(parseInt(data.getRow(i).getString("metadata.rank")));
            }
            
        }
    }
    rank.sort(function (a, b) { return a - b });

    //draw the circles
    fill('#1bc500')
    pointX = 110;
    pointY = 225; //control how high the circle is
    dy = 0;
    for (const key in rank) {
        dy = rank[key];
        circle(pointX, pointY - (dy/2), 18);
    }
}