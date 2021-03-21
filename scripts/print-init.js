function printInit(){
    var branchName = sessionStorage.getItem("branchName");
    var movieName = sessionStorage.getItem("movieName");
    var dateAndTime = sessionStorage.getItem("dateAndTime");
    var house = sessionStorage.getItem("house");

    var seatsBooked = JSON.parse(sessionStorage.getItem("seatsBooked"));
    var divTicketsInformation = document.getElementById("ticketsInformation");

    for (var i = 0; i < seatsBooked.length; i++){
        var newTicket = document.createElement("div");
        newTicket.className = "ticket";
        newTicket.id = "ticket" + (i+1);
        newTicket.innerHTML =
            '<p>Cinema:</p>' +
            '<input type="text" value="' + branchName +'" readonly />' +
            '<p>Movie:</p>' +
            '<input type="text" value="' + movieName +'" readonly />' +
            '<p>Date and Time:</p>' +
            '<input type="text" value="' + dateAndTime +'" readonly />' +
            '<p>House Number:</p>' +
            '<input type="text" value="' + house +'" readonly />' +
            '<p>Seat:</p>' +
            '<input type="text" value="' + seatsBooked[i] +'" readonly />'
        divTicketsInformation.appendChild(newTicket);
    }
}