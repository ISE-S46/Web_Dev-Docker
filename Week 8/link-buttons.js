function attachEvents() {
    $('.button').on('click', buttonClick);
    function buttonClick(){
        $('.button').removeClass('selected');
        $(this).addClass('selected');
    }
}