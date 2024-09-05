var interval = null;
var Timer = null;

function kuruInterval() {
    Timer = window.setInterval(startspin, 30);
}
function startspin() {
    var pos = $('#Kurukuru').css('left');
    var posnum = parseInt(pos);
    if (posnum > 1000) {
        posnum = 50;
    }
    var newpos = posnum + 10 + "px";
    $('#Kurukuru').css('left', newpos);
}
function Speed() {
    window.clearInterval(Timer);
    interval -= 10;
    Timer = window.setInterval(startspin, interval);
}
function Stop() {
    window.clearInterval(Timer);
}