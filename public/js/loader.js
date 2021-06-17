$(window).on("load", function(){
    $("#wrapper").hide();
    setTimeout(removeLoading, (Math.random() * (4500 - 1500) + 1500))
})

function removeLoading() {

    $("#loading").remove()

    $("#wrapper").fadeIn(500, function(){
        $("#wrapper").show();
    });
}