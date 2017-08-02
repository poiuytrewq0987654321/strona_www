$(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll >= 50) {
        $("#main-nav").css('background-color','#0ed8d6').css('opacity','1')
    }else{
        $("#main-nav").css('background-color','transparent').css('opacity','1')
    }
});

$("a[href*='#']").click(function(){
    $('body').animate({
        scrollTop: $(this.hash).offset().top - 10
    },500);
})