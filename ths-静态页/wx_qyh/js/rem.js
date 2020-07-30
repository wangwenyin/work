// rem适配：设置根节点字体大小
var timer = null;
var deviceScale = 3.75;
setRootFontSize();
function setRootFontSize(){
    var width = document.documentElement.clientWidth;
    var styleN = document.createElement('style');
    styleN.innerHTML = 'html{font-size:'+ width/deviceScale +'px}';
    document.head.appendChild(styleN);
};

window.addEventListener('resize', function() {
    clearTimeout(timer);
    timer = setTimeout(function() {
    setRootFontSize()
    }, 300)
})