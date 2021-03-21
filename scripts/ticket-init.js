function ticketInit(){
    fillInfo();
    setTableEvent();
}

function searchShow(index){
    var cinemaList = getCinemas();
    for (var branch = 0; branch < cinemaList.length; branch++){
        var movieList = cinemaList[branch]["movies"];
        for (var movie = 0; movie < movieList.length; movie++){
            var showList = movieList[movie]["shows"];
            for (var i = 0; i < showList.length; i++){
                var show = showList[i];
                if (show.index == index){
                    return [show.datetime, show.house, cinemaList[branch]['branchName']];
                }
            }
        }
    }
}

function fillInfo(){
    var stringURL = window.location.search.substring(1);
    var params = stringURL.split("&");
    for (var i = 0; i < params.length; i++){
        param = params[i]
        var key = param.split("=")[0];
        var val = param.split("=")[1];
        switch (key){
            case "movieName":
                document.getElementById('movieName').value = val.replaceAll("+", " ");
                break;
            case "showID":
                var show = searchShow(val);
                document.getElementById('dateAndTime').value = show[0];
                document.getElementById('house').value = show[1];
                document.getElementById('branchName').value = show[2];
                break;
        }
    }
}

function setTableEvent(){
    var seatPlan = document.getElementsByTagName('table')[0];
    seatPlan.addEventListener('click', function(e){
        var td = e.target;

        if (typeof(td.innerText) == "string"){
            if (!isNaN(td.innerText)){ //is Numeric
                td.className = 'selected';
                updateBookedList();
            }
        }
    })
}

function updateBookedList(){
    var seatsBooked = [];
    var rows = document.getElementsByTagName('tr');
    for (var i = 1; i < rows.length; i++){
        var rowAlphabet = rows[i].getElementsByTagName('td')[0].innerText;
        var selectedCells = rows[i].getElementsByClassName('selected');
        for (j = 0; j < selectedCells.length; j++){
            seatsBooked.push(rowAlphabet.concat(selectedCells[j].innerText));
        }
    }

    var divSeatsBooked = document.getElementById("seatBooked");
    divSeatsBooked.innerHTML =
    '<h3>Seat(s) booked:</h3>'+
    '<p>' + seatsBooked.join(", ") + '</p>' +
    '<form action="./print.html" target="_blank">'+
    '<input type="submit" value="Confirm" onclick="buildSessionStorage()"/>'+    '<script type="text/javascript" src= "../scripts/ticket-buildStorage.js"></script>' +
    '</form>';
}