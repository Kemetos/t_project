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
    $(".pause").toggleClass("show");
}

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