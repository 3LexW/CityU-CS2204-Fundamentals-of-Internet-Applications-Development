var curloopID = 0;


function loopVideo(loopID = 0){
    var loopOrder = getMoviePlayOrder();
    if (loopID == loopOrder.length){
        loopID = 0;
    }
    var moviePlayer = document.getElementsByTagName('video')[0];
    moviePlayer.pause();
    var baseURL = 'http://courses.cs.cityu.edu.hk/cs2204/video/'
    var videoNameMp4 = loopOrder[loopID][0];
    var videoNameOgg = loopOrder[loopID][1];

    moviePlayer.innerHTML =
    '<source src="' + baseURL + videoNameMp4 + '" type="video/mp4">'+
    '<source src="' + baseURL + videoNameOgg + '" type="video/ogg">'+
    videoNameMp4
    ;

    curloopID = loopID;
    moviePlayer.load();
    moviePlayer.play();
}

function getMoviePlayOrder(){
    movieList = getMovies();
    order = [];
    for (var i = 0; i < movieList.length; i++){
        var movie = movieList[i];
        if (movie["type"] === "now"){
            order.push(movie["src"]);
        }
    }
    for (var i = 0; i < movieList.length; i++){
        var movie = movieList[i];
        if (movie["type"] === "upcoming"){
            order.push(movie["src"]);
        }
    }
    return order;
}