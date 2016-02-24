var video = $('#intro')[0];
var touched = false;

$(document).ready(function(){
    $("#intro").on("timeupdate", function(event){
        if (video.currentTime > 13 ){
            if(touched == false){
                video.pause();
                video.currentTime = 13;
            }
        }
        video.onended = function(){
            window.location = '/';
        }
    });

    $('.touchingArea').on('mousedown', function(){
        console.log("md");
        touched = true;
        video.play();
    });

    $('.touchingArea').on('mouseup', function(){
        console.log("mu");
        touched = false;
    });
});