(function() {

function displayTime() {
    //create an object and assign it variables
    var currentTime = new Date(); 
    var hours = currentTime.getHours();     //declare variables to grab hours/m/s from currentTime using Methods (getHours, etc)
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridiem = "AM";

    //this gets us into the clock div
    var clockDiv = document.getElementById('clock-container');

    if (hours < 10) {
        hours = "0" + hours;
    }
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    if (hours > 12) {
        hours = hours - 12;
        meridiem = "PM";
    }
    if (hours < 12) {
        meridiem;
    }
    if (hours === 0) {
        hours = 12;
    }
    //this uses the above variables to input the current time and concatenate the h/m/s
    clockDiv.innerText = hours + ":" + minutes + ":" + seconds + " " + meridiem;
}
//this calls the function
displayTime();
setInterval(displayTime, 1000);
}());