$(document).ready(function(){
    //page up:

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1600) {
            $('.pageup').fadeIn();
        } else {
            $('.pageup').fadeOut();
        }
    });

    //плавный скролл:

    $("a[href='#up']").click(function(){
        var _href = $(this).attr("href");
        $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
        return false;
    });
});

const hamburger = document.querySelector('.promo__burger'),
      menu = document.querySelector('.promo__menu');
      
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('promo__burger-active');
    menu.classList.toggle('promo__menu-active');
});