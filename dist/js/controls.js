$('.bottomPart .locks table tr .switch .switchSpace .button').on("click",function(){
    $(this).toggleClass('lock');
});


$(".bottomPart .suspension ul li").click(function() {
    $(".suspension ul li").removeClass("active");
    $(this).addClass("active");
});

$(".bottomPart .lightsType ul li").click(function() {
    $(".lightsType ul li").removeClass("active");
    $(this).addClass("active");
});

$('.bottomPart .lights ul li').on('click',function(){
    console.log($(this).position());
    var pos = $(this).position();
    $('.bottomPart .lights .selector').css({left:pos.left + "px"});
    $(".lights ul li").removeClass("active");
    $(this).addClass("active");
});

var showControls = function(){
    $(".full-screen").fadeIn();
};

var hideControls = function(){
    $(".full-screen").fadeOut();
};