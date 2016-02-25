/**
 * Created by Rodolphe on 24/02/2016.
 */
var objects = [$(".top_left")];
TweenMax.staggerFrom(objects, 1, {x:"-=1000", delay: 0.3}, 0.2);

var objects2 = [$('.top_right')];
TweenMax.staggerFrom(objects2, 1, {x:"+=1000", delay: 0.3}, 0.2);

var objects2 = [$('.bottom_right')];
TweenMax.staggerFrom(objects2, 1, {x:"+=1000", delay: 0.6}, 0.2);

var objects = [$(".bottom_left")];
TweenMax.staggerFrom(objects, 1, {x:"-=1000", delay: 0.6}, 0.2);

var objects = [$(".big-screen")];
TweenMax.staggerFrom(objects, 1, {y:"-=2000"}, 0.2);

// Switch play,pause

var switchPlay = function(){
    $(".play").toggleClass("hide");
    console.log('cc');
    $(".pause").toggleClass("show");
}
<<<<<<< HEAD

$(document).ready(function() {
    $(document).keydown(function (e) {
        e.preventDefault();
        if (e.keyCode == 70) {
            console.log("tadar");
            $('.threat').fadeIn();
            TweenMax.staggerFrom(".threat .content .choice",0.5, {opacity:0, y: 100, delay:0.5},0.4);

        }
    });
});

$('.threat .content .choice').on('click',function(){
    $('.threat').fadeOut();
})
=======
var counter = function(){
    $('.number').each(function () {
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        }, {
            duration: 4000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
}
>>>>>>> d00dfed53afb88bffbe949328a3a190d5b26032c
