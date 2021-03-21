var cinemaList = getCinemas();

var cinemaToVisit = document.getElementById("cinemaToVisit");
for (var i = 0; i < cinemaList.length; i++){
    var cinemaName = cinemaList[i]["branchName"];
    var cinemaOption = document.createElement("option");
    cinemaOption.value = cinemaName;
    cinemaOption.innerText = cinemaName;
    cinemaToVisit.appendChild(cinemaOption);
}