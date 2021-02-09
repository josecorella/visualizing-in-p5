let data;
let consoles;

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
    

    consoles = {};
    year_sale = {"2004": 0, "2005": 0, "2006": 0, "2007": 0, "2008": 0 };
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

    //go through all the entrys and draw boxes
    console.log(consoles);
}