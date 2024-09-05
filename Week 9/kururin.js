var interval = 30;
var Timer = null;

function kuruInterval() {
    if (Timer !== null) {
        window.clearInterval(TTimer); // Clear the previous interval
    }
    Timer = window.setInterval(startspin, interval);
}

function startspin() {
    var pos = $('#Kurukuru').css('left');
    var posnum = parseInt(pos);
    var windowWidth = $(window).width(); // Get the window width
    // If image position exceeds the window width, reset to starting point
    if (posnum > windowWidth - $('#Kurukuru').width()) {
        posnum = 0; // Reset position to the starting point
    }
    var newpos = posnum + 10 + "px";
    $('#Kurukuru').css('left', newpos);
}

function Speed() {
    if (interval > 10) { // Ensure interval doesn't go below a minimum value
        interval -= 6;
        window.clearInterval(Timer); // Clear the existing interval
        Timer = window.setInterval(startspin, interval);
    }
}

function Stop() {
    window.clearInterval(Timer);
    Timer = null; // Reset the Timer to null to indicate it's stopped
}
