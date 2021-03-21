var movieList = getMovies();
movieID = 1;

nowList = [];
upcomingList = [];

//Split the movie into two lists
for (var i = 0; i < movieList.length; i++){
    var movie = movieList[i];
   
    if (movie["type"] === "now"){
        nowList.push(movie);
    }
    else if (movie["type"] === "upcoming"){
        upcomingList.push(movie);
    }
}
var webpage = document.getElementById("webpage");
var movieList = document.getElementById("movieList");

//Create nowShowing Division
var nowShowing = document.createElement("div");
nowShowing.id = "nowShowing";
var header = document.createElement("h2");
header.textContent = "Showing Movies";
nowShowing.appendChild(header)

for (var i = 0; i < nowList.length; i++){
    var movie = nowList[i];
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    movieDiv.id = "movie" + movieID;

    var thumbnail = document.createElement("img");
    thumbnail.src = '../images/' + movie["thumbnail"];
    thumbnail.alt = movie["name"] + ' - thumbnail';
    thumbnail.setAttribute('onclick', 'loopVideo(' + (movieID - 1) + ');');
    movieDiv.appendChild(thumbnail);

    var movieDetail = document.createElement("div");
    movieDetail.className = "movieDetail";
    movieDiv.appendChild(movieDetail);

    var movieName = document.createElement("div");
    movieName.className = "movieName";
    movieName.innerText = 'Movie Name: ' + movie["name"];
    movieDetail.appendChild(movieName);

    var cast = document.createElement("div");
    cast.className = "cast";
    cast.innerText = 'Cast: ' + movie["cast"];
    movieDetail.appendChild(cast);

    var director = document.createElement("div");
    director.className = "director";
    director.innerText = 'Director: ' + movie["director"];
    movieDetail.appendChild(director);

    var duration = document.createElement("div");
    duration.className = "duration";
    duration.innerText = 'Duration: ' + movie["duration"];
    movieDetail.append(duration);

    movieID++;
    nowShowing.append(movieDiv);
}

//Create upcoming division
var upComing = document.createElement("div");
nowShowing.id = "upComing";
var header = document.createElement("h2");
header.textContent = "Up Coming Movies";
upComing.appendChild(header)

for (var i = 0; i < upcomingList.length; i++){
    var movie = upcomingList[i];
    var movieDiv = document.createElement("div");
    movieDiv.className = "movie";
    movieDiv.id = "movie" + movieID;

    var thumbnail = document.createElement("img");
    thumbnail.src = '../images/' + movie["thumbnail"];
    thumbnail.alt = movie["name"] + ' - thumbnail';
    thumbnail.setAttribute('onclick', 'loopVideo(' + (movieID - 1) + ');');
    movieDiv.appendChild(thumbnail);

    var movieDetail = document.createElement("div");
    movieDetail.className = "movieDetail";
    movieDiv.appendChild(movieDetail);

    var movieName = document.createElement("div");
    movieName.className = "movieName";
    movieName.innerText = 'Movie Name: ' + movie["name"];
    movieDetail.appendChild(movieName);

    var cast = document.createElement("div");
    cast.className = "cast";
    cast.innerText = 'Cast: ' + movie["cast"];
    movieDetail.appendChild(cast);

    var director = document.createElement("div");
    director.className = "director";
    director.innerText = 'Director: ' + movie["director"];
    movieDetail.appendChild(director);

    var duration = document.createElement("div");
    duration.className = "duration";
    duration.innerText = 'Duration: ' + movie["duration"];
    movieDetail.append(duration);

    movieID++;
    upComing.append(movieDiv);
}

movieList.appendChild(nowShowing);
movieList.appendChild(upComing);
webpage.appendChild(movieList);