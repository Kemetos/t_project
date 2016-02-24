$('.dialpad ul li p:first-child').on("click", function(){
    TweenMax.fromTo($(this), 1, {css: {backgroundColor: "rgba(255,255,255,1)", color: "#d5ff00"}}, {css:{backgroundColor: "rgba(255,255,255,0)", color: "#fff"}} );

    console.log($(this)[0].innerHTML);
    $('.right_call h3').append($(this)[0].innerHTML)
});

var switchPhone = function(){
  $('.phoneCard').css("display","none");
  $('.tapDial').css("display","block");
};

var switchMusic1 = function(){
    $('.playlistCard').css("display","none");
    $('.songsCard').css("display","block");
};

var switchMusic2 = function(){
    $('.songsCard').css("display","none");
    $('.playlistCard').css("display","block");
};

var switchMusic3 = function(){
    $('.songsCard').css("display","none");
    $('.playlistCard').css("display","none");
    $('.musicFullscreen').css("display","block");
};