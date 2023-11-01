$(function(){
    $(window).scroll(function(){
        var scrollVal = $(this).scrollTop();
        if(scrollVal <= 60){
            $(".menubar").removeClass("Sticky");
        }else{
            $(".menubar").addClass("Sticky");
        }
    })
})



gsap.registerPlugin(ScrollTrigger);


ScrollTrigger.create({
    trigger: ".banner", // 触发器的元素
    start: "0.06% top",
    end: "bottom top",
    onEnter: function () {
        // 当进入触发点时，使用GSAP添加类
        $(".banner .bannerTitle").addClass("active");
        $(".banner .dot").addClass("active");
        $(".banner .contentOne").addClass("active");
        $(".banner .contentTwo").addClass("active");
        $(".imgCard .mask").addClass("maskplay");
        setTimeout(() => {
            $('.card1').css('background-image', 'url(' + './images/img/p2-1.png' + ')');
            $('.card2').css('background-image', 'url(' + './images/img/p2-2.png' + ')');
            $('.card3').css('background-image', 'url(' + './images/img/p2-3.png' + ')');
            $('.card4').css('background-image', 'url(' + './images/img/p2-4.png' + ')');
            $('.card5').css('background-image', 'url(' + './images/img/p2-5.png' + ')');
            $('.card6').css('background-image', 'url(' + './images/img/p2-6.png' + ')');
        }, 500);
    },
    // onLeaveBack: function () {
    //     // 当离开触发点时，使用GSAP移除类
    //     $(".bannerTitle").removeClass("active");
    //     $(".dot").removeClass("active");
    //     $(".contentOne").removeClass("active");
    //     $(".contentTwo").removeClass("active");
    //     $(".imgCard .mask").removeClass("maskplay");
    // },
    pin: true,
    markers: false // 仅用于调试，显示触发器的位置
});

ScrollTrigger.create({
    trigger: ".card3", // 触发器的元素
    start: "-200% top",
    end: "bottom top",
    onEnter: function () {
        // 当进入触发点时，使用GSAP添加类
        $(".card3").addClass("fullSc");
        $('.card3').css('background-image', 'url(' + '' + ')');
        $('.videoArea').css('opacity','1');
        $('#bannerVideo').trigger('play');
        $(".scrollBtn").addClass("active");
    },
    // onLeaveBack: function () {
    //     // 当离开触发点时，使用GSAP移除类
    //     $(".card3").removeClass("fullSc");
    // },
    markers: false // 仅用于调试，显示触发器的位置
});

  
  // 创建ScrollTrigger触发器对象
  ScrollTrigger.create({
    trigger: ".videoTxt", // 触发器的元素
    start: "-70% top",
    end: "bottom top",
    toggleActions: "play none", // 在进入触发点时播放，离开时不执行
    onEnter: function(){
        $(".videoTxt").addClass("active");
    },
    markers: false // 仅用于调试，显示触发器的位置
  });
  
  // 后续的代码中，添加类到目标元素（例如在某个事件或条件下）
//   document.querySelector(".your-element").classList.add("active");

ScrollTrigger.create({
    trigger: "#page02", // 触发器的元素
    start: "13% top",
    end: "bottom top",
    onEnter: function () {
        // 当进入触发点时，使用GSAP添加类
        $(".earth").addClass("active");
        $(".page02").addClass("active");
        $(".page02 h1.title").addClass("active");
        $(".page02 .content").addClass("active");
        $(".page02 .numArea").addClass("active");
        $(".earth img").attr("src", "../images/img/earth.png");
        $(".plate").addClass("active");
        $(".plate img").attr("src","../images/img/plate02.svg");
        $('.number').each(function () {
            $(this).prop('Counter', 0).animate({
                Counter: $(this).text()
            }, {
                duration: 4000,
                easing: 'swing',
                step: function (now) {
                    $(this).text(Math.ceil(now));
                }
            });
        });
        animationStarted = true; // 防止多次执行动画
    },
    onLeaveBack: function () {
        // 当离开触发点时，使用GSAP移除类
        $(".earth").removeClass("active");
        $(".earth img").attr("src", "../images/img/earth.svg");
        $(".page02").removeClass("active");
        $(".page02 h1.title").removeClass("active");
        $(".page02 .content").removeClass("active");
        $(".page02 .numArea").removeClass("active");
        $(".plate").removeClass("active");
        $(".plate img").attr("src","../images/img/plate.svg");
    },
    pin:true,
    markers: false // 仅用于调试，显示触发器的位置
});


$(".customList .list .content").slideUp()
let listTotal = $('.customList .list');
listTotal.click(function () {
    // 找到当前 <li> 下的 .content 元素并执行 slideToggle()
    $(".customList .list .content").slideUp();
    $('.customList .list').removeClass("active");
    $(this).addClass("active");
    $(this).find('.content').slideDown();
});

$('.customList .listOne').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item01.png" + ')');
    }, 500);
});

$('.customList .listTwo').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item02.png" + ')');
    }, 500);
});

$('.customList .listTre').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item03.png" + ')');
    }, 500);
});

$('.customList .listFour').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item04.png" + ')');
    }, 500);
});

$('.customList .listFive').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item05.png" + ')');
    }, 500);
});

$(document).ready(function () {

    // 滚动事件监听
    $(window).scroll(function () {
        var windowHeight = $(window).height();
        var scrollTop = $(window).scrollTop();
        var scrollPosition = windowHeight + scrollTop;

        // 当元素进入视窗时开始执行动画
        if (scrollPosition > $("#page03").offset().top + 1000) {
            $(".leftBox .imgBox").addClass("active");
            // animationStarted = true; // 防止多次执行动画
        } else {
            $(".leftBox .imgBox").removeClass("active");
        }
    });
});