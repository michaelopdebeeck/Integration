$("document").ready(function () {
    
    // MENU WEL OF NIET TONEN 
    var winWidth = $(window).width();
    console.log(winWidth);
    if (winWidth < 650) {
        $(".menu").hide();
    }
    $(window).resize(function () {
        winWidth = $(window).width();
        if (winWidth < 650) {
            $(".menu").hide();
        } else {
            $(".menu").show();
        }
    });
    $(".menu-knop").on("click", function (e) {
        $(".menu").slideToggle("slow");
        e.preventDefault();
    });
});