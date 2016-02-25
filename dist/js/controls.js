$('.bottomPart .locks table tr .switch .switchSpace .button').on("click",function(){
    $(this).toggleClass('lock');
})


$(".bottomPart .suspension ul li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
});

$(".bottomPart .lightsType ul li").click(function() {
    $("li").removeClass("active");
    $(this).addClass("active");
});

$('.bottomPart .lights ul li').on('click',function(){
    console.log($('.bottomPart').position());
    $(this).parent('.lights').find('.button').css({left:pos.left + px});
})