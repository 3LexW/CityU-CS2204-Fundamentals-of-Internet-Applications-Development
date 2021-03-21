function createMovieList(){
    //Obtain All the data required
    var branchName = document.getElementById("cinemaToVisit").value;
    var divMovieList = document.getElementById("movieSelect");
    var movieList = getMovies();
    var cinemaList = getCinemas();
    var movieOrder = 1;

    //Find the correct cinemaData tobe inputed
    var moviesToSelect = [];
    for (var i = 0; i < cinemaList.length; i++){
        var cinemaInfo = cinemaList[i];
        if (cinemaInfo['branchName'] === branchName){
            moviesToSelect = cinemaInfo["movies"];
        }
    }
    
    divMovieList.innerHTML = ''; //Clear all information for new input
    var header = document.createElement("h2");
    header.innerText = "Select Movie"
    divMovieList.appendChild(header);
    
    //For each movie, create a input form
    for (var i = 0; i < moviesToSelect.length; i++){
        //Find the movie in the movie list
        var movieId = moviesToSelect[i].id;
        var movieDetail = {};
        for (var j = 0; j < movieList.length; j++){
            if (movieList[j].id === movieId){
                movieDetail = movieList[j];
            }
        }

        //Create the div for the movie
        var divMovie = document.createElement("div");
        divMovie.className = "movie";
        divMovie.id = "movie" + movieOrder++;

        var imgthumbnail = document.createElement("img");
        imgthumbnail.src = "../images/" + movieDetail["thumbnail"];
        imgthumbnail.alt = movieDetail["name"] + ' - thumbnail';
        divMovie.appendChild(imgthumbnail);

        var divMovieName = document.createElement("div");
        divMovieName.className = "movieName";
        divMovieName.innerText = movieDetail["name"];
        divMovie.appendChild(divMovieName);

        var frmTimeSelect = document.createElement("form");
        frmTimeSelect.action = "./ticket.html"

        var hidMovie = document.createElement("input");
        hidMovie.type = "hidden";
        hidMovie.name = "movieName";
        hidMovie.value = movieDetail["name"];
        frmTimeSelect.appendChild(hidMovie);

        var selectShowID = document.createElement("select");
        selectShowID.name = "showID";
        selectShowID.id = "time_and_house";
        for (var j = 0; j < moviesToSelect[i]["shows"].length; j++){
            //Create a new option, which sends the index
            var show = moviesToSelect[i]["shows"][j];
            optIndex = document.createElement("option");
            optIndex.value = show["index"];
            optIndex.innerText = show.datetime + ", House: " + show.house;
            selectShowID.appendChild(optIndex);
        }
        frmTimeSelect.appendChild(selectShowID);

        var btnSubmit = document.createElement("input");
        btnSubmit.type = "submit";
        btnSubmit.value = "Buy ticket";
        frmTimeSelect.appendChild(btnSubmit);

        divMovie.appendChild(frmTimeSelect);
        divMovieList.appendChild(divMovie);
    }
}