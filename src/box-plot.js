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

    var william_shakespeare = {};
    var downloads = [];
    
    var smallest = 0;
    var q1 = 0;
    var median = 0;
    var q3 = 0;
    var largest = 0;

    line(250, 400, 778, 400); //draw xaxis
    textAlign(CENTER); //draw the axis label
    textSize(15);
    text('Downloads', 525, 450);
    text('Breakdown of Shakespeare\'s Downloaded Works', 525, 200);
    
    for (let i = 0; i < data.getRowCount(); i++) {
        var author = data.getRow(i).getString("bibliography.author.name");

        if (author == "Shakespeare, William") {
            william_shakespeare[
                data.getRow(i).getString("bibliography.title")
            ] = parseInt(data.getRow(i).getString("metadata.downloads"));
            downloads.push(parseInt(data.getRow(i).getString("metadata.downloads")));
        }
    }

    downloads.sort(function (a, b) { return a - b });
    const fnMedian = (arr, len) => {
        var mid = len / 2;
        return mid % 2 !== 0 ? arr[mid] : (arr[mid - 1] + arr[mid]) / 2;
    }
    
    //get data for the box plot
    smallest = downloads[0];
    q1 = fnMedian(downloads.slice(0, Math.ceil(downloads.length / 2)), Math.ceil(downloads.length / 2));
    median = fnMedian(downloads, Math.ceil(downloads.length) - 1);
    q3 = fnMedian(downloads.slice(Math.ceil(downloads.length / 2), Math.ceil(downloads.length) - 1),
        downloads.slice(Math.ceil(downloads.length / 2), Math.ceil(downloads.length) - 1).length);
    largest = downloads[downloads.length - 1];

    textAlign(LEFT);
    text('Min: ' + smallest + 'k', 125, 250);
    text('Q1: ' + q1 + 'k', 125, 275);
    text('Median: ' + median + 'k', 125, 300);
    text('Q3: ' + q3 + 'k', 125, 325);
    text('Max: ' + largest + 'k', 125, 350);
    textAlign(CENTER);

    var x = 275;
    var y = 405;
    var dx = 0;
    for (let i = 0; i < 9; i++) {
        text("|", x + dx, y);
        text((i * 500) + "k", x + dx, y + 15);
        dx += 60
    }

    x = 260;

    circle(smallest - 100, smallest - 83, 10);
    rect(smallest - 90, 350, 0, -50);
    line(smallest - 90, 325, q1 - x, 325);
    rect(q1 - x, 350, (median - q1) - 75, -50);
    rect(((q1 - x) + (median - q1) - 75), 350, (q3 - median) - 430, -50);
    line((q3 - median - 430) + ((q1 - x) + (median - q1) - 75), 325, largest - 3580, 325);
    rect(largest - 3580, 350, 0, -50);
    circle(largest - 3400, smallest - 83, 10);
}