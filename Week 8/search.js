function search() {
    var input = $('#searchText').val();
    console.log(input);
    var match = 0;
    $('#towns li').each((index, item) => {
        if(item.textContent.includes(input)){
            match++;
            $(item).css("font-weight", "bold");
        }
        else
        $(item).css("font-weight", "");
    });
    $('#result').append(match + " matches found.");
}