let data;
let sales_genre;

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
    
    textSize(20);
    textAlign(CENTER);
    text("Video Game Sales by Genre (Millions)", 600, 350);
    text("2004 - 2008", 580, 375);
    //yea i know it is inefficient 
    sales_genre = {"Action":0,"Adventure":0,"Educational":0,"Racing":0,"Role-Playing":0,"Simulation":0,"Sports":0,"Strategy":0};
    for (let i = 0; i < data.getRowCount(); i++) {
        if (data.getRow(i).getString("Metadata.Genres").startsWith("Action")) {
            sales_genre["Action"] = sales_genre["Action"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Adventure")) {
            sales_genre["Adventure"] = sales_genre["Adventure"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Educational")) {
            sales_genre["Educational"] = sales_genre["Educational"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Racing")) {
            sales_genre["Racing"] = sales_genre["Racing"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Role-Playing")) {
            sales_genre["Role-Playing"] = sales_genre["Role-Playing"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Simulation")) {
            sales_genre["Simulation"] = sales_genre["Simulation"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Sports")) {
            sales_genre["Sports"] = sales_genre["Sports"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        } else if (data.getRow(i).getString("Metadata.Genres").startsWith("Strategy")) {
            sales_genre["Strategy"] = sales_genre["Strategy"] + parseFloat(data.getRow(i).getString("Metrics.Sales"));
        }
    }

    let x = 0; 
    for (var key in sales_genre) {
        let pointX = 0;
        let pointY = 0;
        for (let j = 0; j < int(sales_genre[key]) / 5; j += 5) {
            fill('#1bc500')
            pointX = 350 + (j * 6);
            pointY = 100 + (x * 30);
            circle(pointX, pointY, 20);
            fill('black')
        }
        textSize(15);
        textAlign(LEFT);
        text(int(sales_genre[key]), pointX + 20, pointY + 5);
        textAlign(RIGHT);
        text(key, 325, 105 + (x * 30));
        x++;
    }
}