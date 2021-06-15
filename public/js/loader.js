$(window).on("load", function(){
    $("#wrapper").hide();
    setTimeout(removeLoading, 4500)
})

function removeLoading() {

    $("#loading").remove()

    $("#wrapper").fadeIn(500, function(){
        $("#wrapper").show();
    });
}