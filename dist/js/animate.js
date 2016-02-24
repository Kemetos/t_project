var bigCard = document.getElementsByClassName("big-screen")[0];

TweenMax.to(bigCard, 2, {left:"700px", repeat:10, yoyo:true, onRepeat:onRepeat, repeatDelay:0.5, ease:Linear.easeNone});