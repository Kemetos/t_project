$('.dialpad ul li p:first-child').on("click", function(){
    TweenMax.fromTo($(this), 1, {css: {backgroundColor: "rgba(255,255,255,1)", color: "#d5ff00"}}, {css:{backgroundColor: "rgba(255,255,255,0)", color: "#fff"}} );

    console.log($(this)[0].innerHTML);
    $('.right_call h3').append($(this)[0].innerHTML)
});

var switchPhone = function(){
  $('.phoneCard').fadeOut();
  $('.tapDial').fadeIn();
};

var switchPhone2 = function(){
    $('.tapDial').fadeOut();
    $('.phoneCard').fadeIn();
};

var switchMusic1 = function(){
    $('.playlistCard').fadeOut();
    $('.songsCard').fadeIn();
};

var switchMusic2 = function(){
    $('.songsCard').fadeOut();
    $('.playlistCard').fadeIn();
};

var switchMusic3 = function(){
    $('.songsCard').fadeOut();
    $('.playlistCard').fadeOut();
    $('.musicFullscreen').fadeIn();
};