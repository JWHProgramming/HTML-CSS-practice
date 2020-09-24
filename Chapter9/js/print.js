$(document).ready(function(){
    $("#image_list li a img").click(function(e){
        e.preventDefault();
        var oldUrl = $("#oldImage").attr("src");
        var newUrl = $(this).attr("src");

        $("#oldImage").attr("src",newUrl);
        $(this).attr("src", oldUrl);
    })
})