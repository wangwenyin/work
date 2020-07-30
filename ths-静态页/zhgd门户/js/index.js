$(function() {
    /** 
        首页
    */
    // 点击底部导航
    $('.site-map li').click(function () {  
        $('.site-map li').removeClass('active');
        $(this).addClass('active');
    });

    // banner轮播
    $('.banner-box .banner').bxSlider({
        mode: 'vertical', // 轮播方向
        auto: true, //是否自动播放
        infiniteLoop: true, // 是否循环
        pause: 4000, // 每帧图片停留时间
        speed: 500, // 过渡持续时间
        controls: false, // 左右分页箭头
        pager: true, // 下方分页小圆点
        pagerCustom: '.dot-box', // 分页圆点父selector
        autoHover: true, // 是否悬浮暂停
        touchEnabled: true // 开启触摸滑动
    });

    // 点击系统卡片按钮
    (function () {  
        var cardBtn = $('.common-title-box .card-btn .btn');
        var systemCard = $('.system-card');
        var len = $('.system-card li').length;  
        var HEIGHT = 168;
        var NUM = 4;
        var count = 0;

        cardBtn.click(function () {  
            var mark = +$(this).attr('data-mark');
            if (mark) {
                if (systemCard.position().top >= 0) return;
                count++;
                
            } else {
                if (len + count <= NUM) return;
                count--;
            }
            systemCard.css('top', count * HEIGHT + 'px');
        });
    })();

    /** 
        产品中心页
    */
    // 点击特色系统卡片按钮
    (function () {  
        var toggleBtn = $('.toggle-btns .btn');
        var systemList = $('ul.system-list');
        var lis = $('.system-list li');
        var len = $('.system-list li').length;  
        var WIDTH = 300;
        var NUM = 4;
        var count = 0;
        var currentIndex;

        toggleBtn.click(function () {  
            var index = +$(this).attr('data-index');
            
            if (index) {
                if (systemList.position().left >= 0) return;
                count++;
            } else {
                if (len + count <= NUM) return;
                count--;
            }
            systemList.css('left', count * WIDTH + 'px');
            currentIndex = -count;
            lis.removeClass('active').eq(currentIndex).addClass('active');
        });
    })();

    // tab切换
    (function() {
        var lis = $('.tab-header-inner li');
        var tabSection = $('.tab-section');

        lis.click(function() {
            lis.removeClass('active').eq($(this).index()).addClass('active');
            tabSection.removeClass('active').eq($(this).index()).addClass('active');
        });
    })();

    /** 
        应用案例页
    */
    // 点击项目信息切换按钮
    (function () {  
        var toggleBtn = $('.toggle-btn-box .btn');
        var descList = $('.pro-info ul.desc li');
        var barList = $('.bar-box li');
        var len = barList.length;

        toggleBtn.click(function () {  
            var currentIndex = $('.bar-box li.active').index();
            var index = +$(this).attr('data-index');
            var count;
            
            if (index) {
                if (currentIndex >= (len - 1)) return;
                count = 1;
            } else {
                if (currentIndex <= 0) return;
                count = -1;
            }
            descList.hide().eq(currentIndex + count).show();
            barList.removeClass('active').eq(currentIndex + count).addClass('active');
        });
    })();

    /** 
        新闻资讯页
    */
   // 分页功能（需根据后台数据来做）
    (function () {  
        var newsList = [
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'},
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'},
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'},
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'},
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'},
            { newsTitle: '智慧工地管理云平台的应用', newsContent: '近几个世纪以来，人们利用科技推动生产力的巨大发展', publisher: '卓东东', publishTime: '2019年12月08日'}
        ];
        var pageSize = 5;
        var pages = parseInt(newsList.length / pageSize) + 1;
        var pagerEle = $('.pagination-box .pager');
        for (var i=0; i < pages; i++) {
            pagerEle.append(i ? '<li>' + (i + 1) + '</li>' : '<li class="active">' + (i + 1) + '</li>');
        };
    })();

    /** 
        关于我们页
    */
   // tab切换
   (function() {
        var lis = $('.about-us .tab-header li');
        var tabSection = $('.about-us .tab-section');

        var href = window.location.href;
        var queryStr = href.indexOf('?') > -1 ? href.substr(href.indexOf('?') + 1) : '';
        var tabIndex;
        if (queryStr) {
            if (queryStr.indexOf('=') > -1) {
                var queryList = queryStr.split('=');
                tabIndex = +queryList[1];
                
                if (tabIndex) tabToggle($(lis[tabIndex]), tabIndex);
            } else {
                // 首页第三个banner需跳转到产品中心的特色系统栏
                var top = $('.feature-system').position().top;
                window.scrollTo({ left: 0, top: top, behavior: 'smooth' });
                window.addEventListener('beforeunload', function () {  
                    if (href.indexOf('?') > -1) {
                        var len = window.location.href.length;
                        window.location.href = window.location.href.slice(0, len - 3);
                    }
                }, false);
            }
        };

        lis.click(function() {
            tabToggle($(this), $(this).index());
        });

        function tabToggle(_this, index) {
            lis.removeClass('active');
            _this.addClass('active');
            tabSection.hide().eq(index).show();
        };
    })();

    // 返回顶部显示条件
    $(document).scroll(function () {  
        var scrollH = $(this).scrollTop();
        var topBtn = $('.return-top');
        if (scrollH > 500) {
            topBtn.css('display', 'block').show().fadeIn(300);
        } else {
            topBtn.hide().fadeOut(300);
        }
    });
})