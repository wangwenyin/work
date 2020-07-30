$(function() {
    // 返回顶部显示条件
    $(document).scroll(function () {  
        var scrollH = $(this).scrollTop();
        var topBtn = $('.return-top');
        if (scrollH > 500) {
            topBtn.show().fadeIn(300);
        } else {
            topBtn.hide().fadeOut(300);
        }
    });

    // 案例展示信息切换
    (function() {
        var count = 0;
        $('.card .intro-icon').click(function() {
            count ++;
            // jquery对象不让附加属性
            this.count = count;
            var introDiv = $(this).siblings('.prj-img').children('.intro');
            this.count % 2 ? introDiv.css('left', 0) : introDiv.css('left', '-100%');
        })
    })();
})