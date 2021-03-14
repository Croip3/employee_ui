$(function () {
    $(".navbtn").click(function () {
        console.log("test");
        $(".navbtn").removeClass("navbtn_active");
        $(this).addClass("navbtn_active");
    });
});
