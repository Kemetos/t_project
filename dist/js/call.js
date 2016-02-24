$('.dialpad ul li p:first-child').on("click", function(){
    TweenMax.fromTo($(this), 1, {css: {backgroundColor: "rgba(255,255,255,1)", color: "#d5ff00"}}, {css:{backgroundColor: "rgba(255,255,255,0)", color: "#fff"}} )
});