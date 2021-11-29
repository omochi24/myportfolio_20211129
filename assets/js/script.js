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
            $concept = $('.concept'); // conceptオブジェクト
            // headerOffsetTop = $header.offset().top; //ヘッダーの位置
        
        $win.on('scroll', function() {
            console.log($concept.offset().top);
            console.log($win.scrollTop());
            if($win.scrollTop() > $concept.offset().top) {
                $header.addClass('sticky');
            }
            else {
                $header.removeClass('sticky');
            }


        });
    });
});