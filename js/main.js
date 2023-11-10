$(function () {
    const menu = document.querySelector('.menubar');

    // 滾輪事件監聽器
    window.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            // 向下滾動，顯示菜單
            $(".menubar").addClass("Sticky");
        } else {
            // 向上滾動，隱藏菜單
            $(".menubar").removeClass("Sticky");
        }
    });
})

$(function () {
    setTimeout(function () {
        const bannerTxt = document.querySelectorAll('.bannerTitle span');
        bannerTxt.forEach((item, index) => {
            item.style.animationName = 'textShow, gradientAnimation';
            item.style.animationDelay = `${index * 0.2}s`;
        });
    }, 6500); // 這裡的2000是延遲的時間，你可以根據需要調整
    setTimeout(() => {
        $(".contentOne").css("opacity","1")
    }, 7000);
    setTimeout(() => {
        $(".imgCard .mask").addClass("maskplay");
    }, 7600);
    $(".imgCard .mask").removeClass("maskplay");

    setTimeout(() => {
        $(".imgCard .img").addClass("show");
    }, 8500);
})

$(function(){
    let w = $(window).width();
    if(w <= 1560 ){
        gsap.registerPlugin(ScrollTrigger);
        
        ScrollTrigger.create({
            trigger: ".banner", // 触发器的元素
            start: "6% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".banner .bannerTitle").addClass("active");
                $(".banner .dot").addClass("active");
                $(".banner .contentOne").addClass("active");
                $(".banner .contentTwo").addClass("active");
                // $(".imgCard .mask").addClass("maskplay");
                // $(".imgCard .img").removeClass("show");
                setTimeout(() => {
                    $('.card1 .img').css('background-image', 'url(' + './images/img/p2-1.png' + ')');
                    $('.card2 .img').css('background-image', 'url(' + './images/img/p2-2.png' + ')');
                    $('.card3 .img').css('background-image', 'url(' + './images/img/p2-3.png' + ')');
                    $('.card4 .img').css('background-image', 'url(' + './images/img/p2-4.png' + ')');
                    $('.card5 .img').css('background-image', 'url(' + './images/img/p2-5.png' + ')');
                    $('.card6 .img').css('background-image', 'url(' + './images/img/p2-6.png' + ')');
                }, 500);
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        ScrollTrigger.create({
            trigger: ".card3", // 触发器的元素
            start: "-180% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".card1").addClass("leave");
                $(".card2").addClass("leave");
                $(".card4").addClass("leave");
                $(".card5").addClass("leave");
                $(".card6").addClass("leave");
                $(".card3").addClass("fullSc");
                $('.card3 .img').css('background-image', 'url(' + '' + ')');
                $('.videoArea').css('opacity', '1');
                $('#bannerVideo').trigger('play');
                $(".scrollBtn").addClass("active");
            },
            onLeaveBack: function () {
        
            },
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        // 创建ScrollTrigger触发器对象
        ScrollTrigger.create({
            trigger: ".videoTxt", // 触发器的元素
            start: "-40% top",
            end: "bottom top",
            toggleActions: "play none", // 在进入触发点时播放，离开时不执行
            onEnter: function () {
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
                $(".earth").addClass("show");
                $(".plate").addClass("show");
                setTimeout(() => {
                    $("body").css("background-color", "#EEF3F4");
                }, 1000);
                setTimeout(() => {
                    $(".sqrate").addClass("show")
                }, 2500);
                setTimeout(function () {
                    const bannerTxt = document.querySelectorAll('.page02 h1.title span');
                    bannerTxt.forEach((item, index) => {
                        item.style.animationName = 'textShow';
                        item.style.animationDelay = `${index * 0.2}s`;
                    });
                }, 4500); // 這裡的2000是延遲的時間，你可以根據需要調整
            },
            onLeaveBack: function () {
                // 当离开触发点时，使用GSAP移除类
                $(".earth").removeClass("show");
                $("body").css("background-color", "#fff");
                $(".plate").removeClass("show");
                $(".sqrate").removeClass("show")
                $(".page02 h1.title").removeClass("show")
            },
            onToggle: ({
                isActive
            }) => {
                if (!isActive) {
                    // 在结束时触发事件
                    console.log("ScrollTrigger结束时触发事件");
                    $("body").css("background-color", "#fff");
                    $(".page02").css("background-color", "#EEF3F4")
                } else {
        
                }
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        ScrollTrigger.create({
            trigger: ".pageBlock", // 触发器的元素
            start: "10% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".earth").addClass("active");
                $(".page02 h1.title").addClass("active");
                $(".page02 .content").addClass("active");
                $(".page02 .numArea").addClass("active");
                $(".earth img").attr("src", "./images/img/earth.png");
                $(".plate").addClass("active");
                $(".plate img").attr("src", "./images/img/plate02.svg");
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
            markers: false // 仅用于调试，显示触发器的位置
        });
        $(document).ready(function () {

            // 滚动事件监听
            $(window).scroll(function () {
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();
                var scrollPosition = windowHeight + scrollTop;
        
                // 当元素进入视窗时开始执行动画
                if (scrollPosition > $("#page03").offset().top) {
                    $(".leftBox .imgBox").addClass("active");
                    // animationStarted = true; // 防止多次执行动画
                } else {
                    // $(".leftBox .imgBox").removeClass("active");
                }
            });
        });
    }else if(w <= 1366){
        $(function () {
            setTimeout(function () {
                const bannerTxt = document.querySelectorAll('.bannerTitle span');
                bannerTxt.forEach((item, index) => {
                    item.style.animationName = 'textShow, gradientAnimation';
                    item.style.animationDelay = `${index * 0.2}s`;
                });
            }, 6500); // 這裡的2000是延遲的時間，你可以根據需要調整
            setTimeout(() => {
                $(".contentOne").css("opacity","1")
            }, 7000);
            setTimeout(() => {
                $(".imgCard .mask").addClass("maskplay");
            }, 7600);
            $(".imgCard .mask").removeClass("maskplay");
        
            setTimeout(() => {
                $(".imgCard .img").addClass("show");
            }, 8500);
        })
        
        
        gsap.registerPlugin(ScrollTrigger);
        
        
        ScrollTrigger.create({
            trigger: ".banner", // 触发器的元素
            start: "6% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".banner .bannerTitle").addClass("active");
                $(".banner .dot").addClass("active");
                $(".banner .contentOne").addClass("active");
                $(".banner .contentTwo").addClass("active");
                setTimeout(() => {
                    $('.card1 .img').css('background-image', 'url(' + './images/img/p2-1.png' + ')');
                    $('.card2 .img').css('background-image', 'url(' + './images/img/p2-2.png' + ')');
                    $('.card3 .img').css('background-image', 'url(' + './images/img/p2-3.png' + ')');
                    $('.card4 .img').css('background-image', 'url(' + './images/img/p2-4.png' + ')');
                    $('.card5 .img').css('background-image', 'url(' + './images/img/p2-5.png' + ')');
                    $('.card6 .img').css('background-image', 'url(' + './images/img/p2-6.png' + ')');
                }, 500);
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        ScrollTrigger.create({
            trigger: ".card3", // 触发器的元素
            start: "-180% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".card1").addClass("leave");
                $(".card2").addClass("leave");
                $(".card4").addClass("leave");
                $(".card5").addClass("leave");
                $(".card6").addClass("leave");
                $(".card3").addClass("fullSc");
                $('.card3 .img').css('background-image', 'url(' + '' + ')');
                $('.videoArea').css('opacity', '1');
                $('#bannerVideo').trigger('play');
                $(".scrollBtn").addClass("active");
            },
            onLeaveBack: function () {
        
            },
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        // 创建ScrollTrigger触发器对象
        ScrollTrigger.create({
            trigger: ".videoTxt", // 触发器的元素
            start: "-50% top",
            end: "bottom top",
            toggleActions: "play none", // 在进入触发点时播放，离开时不执行
            onEnter: function () {
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
                $(".earth").addClass("show");
                $(".plate").addClass("show");
                setTimeout(() => {
                    $("body").css("background-color", "#EEF3F4");
                }, 1000);
                setTimeout(() => {
                    $(".sqrate").addClass("show")
                }, 2500);
                setTimeout(function () {
                    const bannerTxt = document.querySelectorAll('.page02 h1.title span');
                    bannerTxt.forEach((item, index) => {
                        item.style.animationName = 'textShow';
                        item.style.animationDelay = `${index * 0.2}s`;
                    });
                }, 4500); // 這裡的2000是延遲的時間，你可以根據需要調整
            },
            onLeaveBack: function () {
                // 当离开触发点时，使用GSAP移除类
                $(".earth").removeClass("show");
                $("body").css("background-color", "#fff");
                $(".plate").removeClass("show");
                $(".sqrate").removeClass("show")
                $(".page02 h1.title").removeClass("show")
            },
            onToggle: ({
                isActive
            }) => {
                if (!isActive) {
                    // 在结束时触发事件
                    console.log("ScrollTrigger结束时触发事件");
                    $("body").css("background-color", "#fff");
                    $(".page02").css("background-color", "#EEF3F4")
                } else {
        
                }
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        ScrollTrigger.create({
            trigger: ".pageBlock", // 触发器的元素
            start: "10% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".earth").addClass("active");
                $(".page02 h1.title").addClass("active");
                $(".page02 .content").addClass("active");
                $(".page02 .numArea").addClass("active");
                $(".earth img").attr("src", "./images/img/earth.png");
                $(".plate").addClass("active");
                $(".plate img").attr("src", "./images/img/plate02.svg");
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
            markers: false // 仅用于调试，显示触发器的位置
        });
        $(document).ready(function () {

            // 滚动事件监听
            $(window).scroll(function () {
                var windowHeight = $(window).height();
                var scrollTop = $(window).scrollTop();
                var scrollPosition = windowHeight + scrollTop;
        
                // 当元素进入视窗时开始执行动画
                if (scrollPosition > $("#page03").offset().top) {
                    $(".leftBox .imgBox").addClass("active");
                    // animationStarted = true; // 防止多次执行动画
                } else {
                    // $(".leftBox .imgBox").removeClass("active");
                }
            });
        });
    }else{
        $(function () {
            setTimeout(function () {
                const bannerTxt = document.querySelectorAll('.bannerTitle span');
                bannerTxt.forEach((item, index) => {
                    item.style.animationName = 'textShow, gradientAnimation';
                    item.style.animationDelay = `${index * 0.2}s`;
                });
            }, 6500); // 這裡的2000是延遲的時間，你可以根據需要調整
            setTimeout(() => {
                $(".contentOne").css("opacity","1")
            }, 7000);
            setTimeout(() => {
                $(".imgCard .mask").addClass("maskplay");
            }, 7600);
            $(".imgCard .mask").removeClass("maskplay");
        
            setTimeout(() => {
                $(".imgCard .img").addClass("show");
            }, 8500);
        })
        
        
        gsap.registerPlugin(ScrollTrigger);
        
        
        ScrollTrigger.create({
            trigger: ".banner", // 触发器的元素
            start: "6% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".banner .bannerTitle").addClass("active");
                $(".banner .dot").addClass("active");
                $(".banner .contentOne").addClass("active");
                $(".banner .contentTwo").addClass("active");
                $(".imgCard .mask").removeClass("maskplay");
                setTimeout(() => {
                    $(".imgCard .mask").addClass("maskplay");
                }, 1000);
                $(".imgCard .img").removeClass("show");
                setTimeout(() => {
                    $(".imgCard .img").addClass("show");
                }, 1500);
                setTimeout(() => {
                    $('.card1 .img').css('background-image', 'url(' + './images/img/p2-1.png' + ')');
                    $('.card2 .img').css('background-image', 'url(' + './images/img/p2-2.png' + ')');
                    $('.card3 .img').css('background-image', 'url(' + './images/img/p2-3.png' + ')');
                    $('.card4 .img').css('background-image', 'url(' + './images/img/p2-4.png' + ')');
                    $('.card5 .img').css('background-image', 'url(' + './images/img/p2-5.png' + ')');
                    $('.card6 .img').css('background-image', 'url(' + './images/img/p2-6.png' + ')');
                }, 1500);
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        ScrollTrigger.create({
            trigger: ".card3", // 触发器的元素
            start: "-180% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".card1").addClass("leave");
                $(".card2").addClass("leave");
                $(".card4").addClass("leave");
                $(".card5").addClass("leave");
                $(".card6").addClass("leave");
                $(".card3").addClass("fullSc");
                $('.card3 .img').css('background-image', 'url(' + '' + ')');
                $('.videoArea').css('opacity', '1');
                $('#bannerVideo').trigger('play');
                $(".scrollBtn").addClass("active");
            },
            onLeaveBack: function () {
        
            },
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        // 创建ScrollTrigger触发器对象
        ScrollTrigger.create({
            trigger: ".videoTxt", // 触发器的元素
            start: "-50% top",
            end: "bottom top",
            toggleActions: "play none", // 在进入触发点时播放，离开时不执行
            onEnter: function () {
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
                $(".earth").addClass("show");
                $(".plate").addClass("show");
                setTimeout(() => {
                    $("body").css("background-color", "#EEF3F4");
                }, 1000);
                setTimeout(() => {
                    $(".sqrate").addClass("show")
                }, 2500);
                setTimeout(function () {
                    const bannerTxt = document.querySelectorAll('.page02 h1.title span');
                    bannerTxt.forEach((item, index) => {
                        item.style.animationName = 'textShow';
                        item.style.animationDelay = `${index * 0.2}s`;
                    });
                }, 4500); // 這裡的2000是延遲的時間，你可以根據需要調整
            },
            onLeaveBack: function () {
                // 当离开触发点时，使用GSAP移除类
                $(".earth").removeClass("show");
                $("body").css("background-color", "#fff");
                $(".plate").removeClass("show");
                $(".sqrate").removeClass("show")
                $(".page02 h1.title").removeClass("show")
            },
            onToggle: ({
                isActive
            }) => {
                if (!isActive) {
                    // 在结束时触发事件
                    console.log("ScrollTrigger结束时触发事件");
                    $("body").css("background-color", "#fff");
                    $(".page02").css("background-color", "#EEF3F4")
                } else {
        
                }
            },
            pin: true,
            markers: false // 仅用于调试，显示触发器的位置
        });
        
        
        ScrollTrigger.create({
            trigger: ".pageBlock", // 触发器的元素
            start: "10% top",
            end: "bottom top",
            onEnter: function () {
                // 当进入触发点时，使用GSAP添加类
                $(".earth").addClass("active");
                $(".page02 h1.title").addClass("active");
                $(".page02 .content").addClass("active");
                $(".page02 .numArea").addClass("active");
                $(".earth img").attr("src", "./images/img/earth.png");
                $(".plate").addClass("active");
                $(".plate img").attr("src", "./images/img/plate02.svg");
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
            markers: false // 仅用于调试，显示触发器的位置
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
                    // $(".leftBox .imgBox").removeClass("active");
                }
            });
        });
    }
})



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
    }, 200);
});

$('.customList .listTwo').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item02.png" + ')');
    }, 200);
});

$('.customList .listTre').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item03.png" + ')');
    }, 200);
});

$('.customList .listFour').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item04.png" + ')');
    }, 200);
});

$('.customList .listFive').click(() => {
    setTimeout(() => {
        $(".imgBox").css('background-image', 'url(' + "./images/img/page03_item05.png" + ')');
    }, 200);
});