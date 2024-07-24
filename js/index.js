$(function(){
    // 메뉴
    $(".main>li").mouseover(function(){
        $(this).find(".sub").stop().slideDown();
    }) //mouseover

    $(".main>li").mouseout(function(){
        $(".sub").stop().slideUp();
    }) //mouseout

    //이미지 슬라이드

    // var n = 0; // 0 1 2 3 0(t0) 1(t-400) 2(t-800) 3(t-1200)
    // setInterval(function(){

    //     n = ( n + 1 ) % 4; // 0 1 2 3

    //     // if(n<4){
    //     //     n++
    //     // }else{
    //     //     n=0
    //     // }

    //     // if(n == 4){
    //     //     n=0;
    //     // }else{
    //     //     n++;
    //     // }

    //     top_pos = n * (-400) + "px";

    //     $(".top_move").animate({top : top_pos},500);

    // },3000)

    setInterval(function(){
        $(".top_move").animate({top : "-400px"},500,function(){
            $(".top_move").append($(".top_move li").eq(0));
            $(".top_move").css({top:"0"})
        })
    },2000)


    // 탭 메뉴
    $(".contents h2").click(function(){
        $(".contents h2").removeClass("on");
        $(this).addClass("on")

        $(".contents ul").hide();
        $(this).next().css({display : "flex"})
    }) //click

    // 팝업

    $(function(){
        $(".p_click").click(function(){
            $(".pop").show();
        })
        $(".close").click(function(){
            $(".pop").hide();
        })
    })


}) //jquery