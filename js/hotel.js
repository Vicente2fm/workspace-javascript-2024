var guestgroup = [];

$('#submit').click(reservation);

function reservation() {
    var guest = {
        name: $('#name').val(),
        checkin: $('#checkin').val(),
        checkout: $('#checkout').val(),
        number: $('#num').val(),
        room: $('#room').val(),
    };

    if (!guest.name || !guest.checkin || !guest.checkout || !guest.number || !guest.room) {
        alert("Please fill in all fields.");
        return;
    }

    alert(guest.name + " has reserved a room!");

    guestgroup.push(guest);

    console.log(guestgroup);
}

$('#lists').click(listReservations);

function listReservations() {
    var reservationList = $("#reservationList");
    reservationList.empty();

    if (guestgroup.length === 0) {
        reservationList.append("<p>No reservations found.</p>");
        return;
    }

    var listHTML = "<ul>";
    guestgroup.forEach(function(guest) {
        listHTML += "<li>" + guest.name + " - " + guest.room + " - " + guest.checkin + " to " + guest.checkout + " - " + guest.number + " guest(s)</li>";
    });
    listHTML += "</ul>";

    reservationList.append(listHTML);
}
