//test object 
var test = {
    fname: "Vincent",
    lname: "Esparza",
    age: 26,
    display: function(){
        console.log("in function");
        return fname + "" + this.lname;
    }
};
console.log(test.display());

// hotel resevation
$('#submit').click(reservation);
function  reservation(){
    var guest ={
        name: $('#guestname').val(),
        checkin: $('#checkin').val(),
        number: $('#number').val(),
        room: $('#room').val(),
        //complete this
    };
    alert(guest.name + "Reserve a Room");
    guestgroup.push(guest);
    console.log(guestgroup);
}