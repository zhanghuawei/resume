$(function () {
    var $navLi=$(".nav-li"),$navHide=$(".nav-hide"),$navHideLi=$navHide.find("li"), $navLiImg=$(".nav-li img");
    $navLi.on("click",function () {
        if($navLiImg.attr("src")=="img/me-list1.png"){
            $navLiImg.attr("src","img/me-close.png").css("width","30%");
        }else{
            $navLiImg.attr("src","img/me-list1.png").css("width","40%");
        }
        $navHide.stop().slideToggle();
    });
    var $meListDiv=$(".me-list div"),$close=$(".me-list-hide h5");
    $meListDiv.on("click",function () {
        var _index=$(this).index();
        $(this).parent().nextAll().each(function (index,item) {
            _index==index?$(this).css("display","block"):null;
        })
    });
    $close.on("click",function () {
        $(this).parent().css("display","none");
        console.log($(this).parent())
    });

    var $navA = $(".nav li:not(:last-child)"), $meListDiv = $(".me-list-hide");
    $navA.on("click",function () {
        $(this).addClass("bg").siblings("").removeClass("bg");
    });
    function click($item,$iemB) {
        $item.on("click", function () {
            var _index = $(this).index();
            $iemB.each(function (index, item) {
                _index == index ? $(this).css("display", "block").siblings(".me-list-hide").css("display", "none") : null;
            });
        })
    }
    click($navHideLi,$meListDiv);
    click($navA,$meListDiv);
});