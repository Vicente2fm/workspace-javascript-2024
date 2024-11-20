

var today = new Date();
var hoursNow = today.getHours();


var greetings = "";
if (hoursNow < 12){
  greetings = "Good Morning";
}else{
  greetings = "Good Afternoon";
}


document.write(greetings);