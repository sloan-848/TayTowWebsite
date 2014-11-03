function parseUpdate(url){
    Papa.parse(url, { 
        download: true,
        complete: function(results, file) {
            updateElement(results.data);
            //buildDatabase(results.data);
        },
        error: function(error, file) {
            console.log(error, " in file ", file);
        }
    })
};

function updateElement(movieList){
    
    globalMovieList = movieList;
    var fO = "";
    
    var movieTable = document.createElement("TABLE");
    movieTable.className = "table table-striped table-hover";

    //Add header
    var headRow = movieTable.insertRow(-1);
    var cell1 = headRow.insertCell(0);
    var cell2 = headRow.insertCell(1);
    cell1.innerHTML = "Movie";
    cell2.innerHTML = "Status";

    for(i = 1; i < movieList.length; i++){
        if(movieList[i][1] != ""){
            var newRow = movieTable.insertRow(-1);
            var movieN = newRow.insertCell(0);
            var movieS = newRow.insertCell(1);

            tempMovieName = movieList[i][1];
            movieN.innerHTML = movieList[i][1]; 
            movieS.innerHTML = movieList[i][2];

            var createClickHandler = function(arg) {
              return function() { movieLookup(arg); };
            };
            newRow.onclick = createClickHandler(movieList[i][1]);
        }
    }
    $( "#fileOutput" ).replaceWith(movieTable);
};

function showPopup(movieData){
  if(movieData.Plot == "N/A"){
    console.log('Movie not Found.');
    return;
  }
  var sweetText = movieData.Plot + '\n Rating: ' + movieData.imdbRating + '/10';
  swal({
    title: movieData.Title,
    text: sweetText,
    imageUrl: movieData.Poster,
    allowOutsideClick: true
  });

}

function movieLookup(title){
  $.getJSON("http://www.omdbapi.com/",
    {
      t: title
    },
    function(data, status, xhr){
      showPopup(data);
    });
}

    
//main code
parseUpdate("data/DVD_Log.csv");
