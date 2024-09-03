var interval = null;
var catTimer = null;

function carInterval() {
    catTimer = window.setInterval(startwalk, 30);
}
function startwalk() {
    var pos = $('#car').css('left');
    var posnum = parseInt(pos);
    if (posnum > 1300) {
        posnum = 50;
    }
    var newpos = posnum + 10 + "px";
    $('#car').css('left', newpos);
}
function carSpeed() {
    window.clearInterval(catTimer);
    interval -= 10;
    catTimer = window.setInterval(startwalk, interval);
}
function carStop() {
    window.clearInterval(catTimer);
}