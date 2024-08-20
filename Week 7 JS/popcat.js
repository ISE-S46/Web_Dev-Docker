function pop() {
    document.getElementById("car").src = "popcat2.jpg";
}
var clicks = 0;
function popback() {
    document.getElementById("car").src = "popcat1.jpg";
    clicks++;
    document.getElementById("clicks").innerHTML = clicks;
    if (clicks >= 50) {
        document.getElementById("clicks").style.color = "red";
    }
}
function reset(){
    clicks = 0;
    document.getElementById("clicks").innerHTML = 0;
    document.getElementById("clicks").style.color = "black";
}