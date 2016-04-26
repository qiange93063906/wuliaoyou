;
(function (w, d) {
    var myScroll;

    function loaded() {
        myScroll = new IScroll("#content", {
            preventDefault: false,
            scrollbars: true, //出现滚动条
            shrinkScrollbars: "scale", //缩放
            fadeScrollbars: true //隐藏滚动条
        })
    }
    window.addEventListener("load", loaded, false)
})(window, document);

$(".footer").on('click', 'a', function () {
    $(this).addClass("on").siblings().removeClass("on");
});

(function ($) {
    var len = $(".pics li").length,
        index = 0;
    //alert(len);
    //左滑
    $(".pics").on("swipeLeft", function () {
            //alert(1111)
            //clearInterval(timer);
            if (index == len - 1) {
                index = len - 1;
            } else {
                index++;
            }
            auto();
        })
        //右滑
    $(".pics").on("swipeRight", function () {

        //clearInterval(timer);

        if (index == 0) {
            index = 0;
        } else {
            index--;
        };
        auto()

    })

    //定义移动距离函数
    function auto() {
        var Width = $(window).width();
        $(".pics").css({
            "-webkit-transform": "translateX(" + -Width * index + "px)"
        })

        //切换图片数字对应
        $(".num li").eq(index).addClass("high").siblings().removeClass("high");

    };
    //var timer = null;
    function autoplay() {
        index++;
        if (index >= len) {
            index = 0;
        }
        auto();
    }
    var timer = setInterval(autoplay, 1000);

})(Zepto);