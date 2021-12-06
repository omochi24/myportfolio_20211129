$(function () {
    // ファーストビューのスライダー
    $('.slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 2000,
        infinite: true,
        slideToShow: 1,
        slideToScroll: 1,
        pauseOnFocus: false,
        pauseOnHover: false,
    });

    // スティッキーヘッダー
    $('.header').each(function() {
        var $win = $(window), //ウィンドウオブジェクト
            $header = $(this), // ヘッダーオブジェクト
            fvHeight = $('.fv').outerHeight(); // ヘッダーのbottom位置
        
        $win.on('scroll', function() {
            if($win.scrollTop() > fvHeight) {
                $header.addClass('sticky');
            }
            else {
                $header.removeClass('sticky');
            }
        });
    });

    // ハンバーガーメニュー
    $('.js-hum-btn').on('click', function() {
        $('.nav-list, .hum-btn-line').toggleClass('open');
    });
});