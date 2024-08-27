function extractText() {
    var item = $('#items li');
    console.log(item[0]);
    $('#result').append(item[0].innerHTML + ', ' + item[1].innerHTML + ', ' + item[2].innerHTML + ' ');
}