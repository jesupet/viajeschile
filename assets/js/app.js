$(window).scroll(function(){
    if($(this).scrollTop()>900){
        $('#menu').addClass('active');
    }
    else{
        $('#menu').removeClass('active');
    }
});



$(function(){

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate({
                scrollTop: $(hash).offset().top
            }, 800, function (){
                window.location.hash = hash;
            });
        }
    });
    $('[data-toggle="popover"]').popover()
});


