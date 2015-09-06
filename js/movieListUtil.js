function parseUpdate(url){
    Papa.parse(url, {
        download: true,
        complete: function(results, file) {
            updateElement(results.data);
        },
        error: function(error, file) {
            console.log(error, " in file ", file);
        }
    });
}

function updateElement(movieList){

    var movieTable = document.createElement("TABLE");
    movieTable.className = "table table-striped table-hover";

    //Add header
    var headRow = movieTable.insertRow(-1);
    var cell1 = headRow.insertCell(0);
    var cell2 = headRow.insertCell(1);
    cell1.innerHTML = "Movie";
    cell2.innerHTML = "Status";

    /* Initialize click handler */
    var createClickHandler = function(arg) {
      return function() { movieLookup(arg); };
    };

    /* Generate each entry in the movie table */
    for(i = 1; i < movieList.length; i++){
        if(movieList[i][1] !== ""){
            var newRow = movieTable.insertRow(-1);
            var movieN = newRow.insertCell(0);
            var movieS = newRow.insertCell(1);

            tempMovieName = movieList[i][1];
            movieN.innerHTML = movieList[i][1];
            movieS.innerHTML = movieList[i][2];

            newRow.onclick = createClickHandler(movieList[i][1]);
        }
    }

    /* Fill fileOutuput field with the generated table */
    $( "#movie_table_output" ).replaceWith(movieTable);
}

function movieLookup(title){
  /* Callback goes
   * lookupInfo -> lookupTorrent -> displayPopup
   */
  var lookupTorrent = function(movie_title, movie_info){
    var lookupUrl = "amazon.com";
    $.getJSON(
        lookupUrl,
        function(data, status, xhr){
          //console.log(movie_info);
          //console.log(data);
          showPopup(movie_info, data);
        }
    );
  };
  var lookupInfo = function(movie_title){
    $.getJSON("http://www.omdbapi.com/",
      {
        t: title
      },
      function(data, status, xhr){
        if (data.Plot == "N/A") {
          console.log("Movie not found.");
          return 0;
        }
        lookupTorrent(title, data);
      }
    );
  };
  lookupInfo(title);
}

function showPopup(movie_info, torrent_info){
  var string_movie_info = movie_info.Plot + '\n Rating: ' + movie_info.imdbRating + '/10';
  if (torrent_info.data.movie_count === 0){
    swal({
      title: movie_info.Title,
      text: string_movie_info,
      imageUrl: movie_info.Poster,
      allowOutsideClick: true
    });
  } else {
    var torrentUrl = torrent_info.data.movies[0].torrents[0].url;
    swal({
      title: movie_info.Title,
      text: string_movie_info,
      imageUrl: movie_info.Poster,
      allowOutsideClick: true,
      showCancelButton: true,
      cancelButtonText: "OK",
      //cancelButtonColor:
      confirmButtonText: "Download"
    }, function(){
      window.location.replace(torrentUrl);
      //console.log(torrentUrl);
    });
  }
}

//main code
parseUpdate("data/DVD_Log.csv");
