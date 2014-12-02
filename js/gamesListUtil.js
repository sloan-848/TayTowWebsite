function parseUpdate(url){
    Papa.parse(url, {
        download: true,
        complete: function(results, file) {
            updateElement(results.data);
        },
        error: function(error, file) {
            console.log(error, " in file ", file);
        }
    })
};

function updateElement(gameList){
    var gameTable = document.createElement("TABLE");
    gameTable.className = "table table-striped table-hover";

    for(i = 0; i < gameList.length; i++){
        if(gameList[i][1] != ""){
            var newRow = gameTable.insertRow(-1);
            var gameN = newRow.insertCell(0);
            gameN.innerHTML = gameList[i][1];
            console.log(gameN.innerHTML);
        }
    }
    console.log(gameTable);
    $( "#fileOutput" ).replaceWith(gameTable);
};

//main code
parseUpdate("data/Game_Log.csv");
