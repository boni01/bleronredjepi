$(window).on("load", function(){
    $("#wrapper").hide();
    $(".documentation").hide()
    setTimeout(removeLoading, (Math.random() * (4500 - 100) + 100))
})

function removeLoading() {
    $("#loading").remove()
    $('body').addClass('is-preload')
    $("#wrapper").fadeIn(500, function(){
        $("#wrapper").show();
    });
    $(".documentation").fadeIn(500, function name() {
        $(".documentation").show();
    })
    $('body').removeClass("is-preload")
    $("#loadercss").remove()
}