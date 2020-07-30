// rem适配：设置根节点字体大小
// 设计图尺寸1920*1080,故deviceScale设置为19.2得到htmlfont-size: 100px,即为1rem,便于换算
(function () {
    var timer = null;
    var deviceScale = 19.2;
    setRootFontSize();

    function setRootFontSize() {
        var width = document.documentElement.clientWidth;
        var styleN = document.createElement('style');
        if (width < 1024) width = 1024;
        styleN.innerHTML = 'html{font-size:' + width / deviceScale + 'px}';
        document.head.appendChild(styleN);
    };

    window.addEventListener('resize', function () {
        clearTimeout(timer);
        timer = setTimeout(function () {
            setRootFontSize()
        }, 300)
    })
})();