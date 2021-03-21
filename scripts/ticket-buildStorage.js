function buildSessionStorage(){
    //Basic information
    sessionStorage.setItem("branchName", document.getElementById('branchName').value)
    sessionStorage.setItem("movieName", document.getElementById('movieName').value)
    sessionStorage.setItem("dateAndTime", document.getElementById('dateAndTime').value)
    sessionStorage.setItem("house", document.getElementById('house').value)

    //Seatplans
    var seatsBooked = [];
    var rows = document.getElementsByTagName('tr');
    for (var i = 1; i < rows.length; i++){
        var rowAlphabet = rows[i].getElementsByTagName('td')[0].innerText;
        var selectedCells = rows[i].getElementsByClassName('selected');
        for (j = 0; j < selectedCells.length; j++){
            seatsBooked.push(rowAlphabet.concat(selectedCells[j].innerText));
        }
    }

    sessionStorage.setItem("seatsBooked", JSON.stringify(seatsBooked));
}