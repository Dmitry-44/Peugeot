$(document).ready(function(){
    $('.call-me').click(function(){
        var classBox = $(this).attr('href');
        $(classBox).fadeIn();
        $('#pop-up-wrapper').fadeIn();
        return false;
    });
    $('.pop-up .x').click(function(){
        $('#pop-up-wrapper').fadeOut();
        $('.pop-up').fadeOut();
    });
    $('#dimension_tab1').click(function() {
        $('#dimension_content1').addClass('active');
        $('#dimension_content2').removeClass('active');
        $('#dimension_content3').removeClass('active');

        $('#dimension_tab1').addClass('active');
        $('#dimension_tab2').removeClass('active');
        $('#dimension_tab3').removeClass('active');
    });
    $('#dimension_tab2').click(function() {
        $('#dimension_content1').removeClass('active');
        $('#dimension_content2').addClass('active');
        $('#dimension_content3').removeClass('active');

        $('#dimension_tab1').removeClass('active');
        $('#dimension_tab2').addClass('active');
        $('#dimension_tab3').removeClass('active');
    });
    $('#dimension_tab3').click(function() {
        $('#dimension_content1').removeClass('active');
        $('#dimension_content2').removeClass('active');
        $('#dimension_content3').addClass('active');

        $('#dimension_tab1').removeClass('active');
        $('#dimension_tab2').removeClass('active');
        $('#dimension_tab3').addClass('active');
    });
           /*  NEW PEUGEUT 5008 */
    $('.material-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText:false,
        dots: false,
        items:1
    });

    $('.comfort_slider-1').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        items:1,
        navText:false,
    });
    $('.comfort_slider-2').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        items:1,
        navText:false,
    });
});
