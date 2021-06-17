$(window).on("load", function(){
    $("#wrapper").hide();
    setTimeout(removeLoading, (Math.random() * (4500 - 100) + 100))
})

function removeLoading() {
    $("#loading").remove()
    $('body').addClass('is-preload')
    $("#wrapper").fadeIn(500, function(){
        $("#wrapper").show();
    });
    $('body').removeClass("is-preload")
}