$(document).ready(function(){
    $(".regular").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
    });
    const d = new Date();
    let year = d.getFullYear();
    $("#year").append(year);

    $(".hamburger").on("click",function(){
        $("#navigation").toggleClass("open");
    })
});
