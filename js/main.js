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

    const mainNavigation = 
    `<ul>
        <li>
            <a href="areas-of-practice.html">Areas of practice</a>
        </li>
        <li>
            <a href="ip-showcase.html">IP showcase</a>
        </li>
        <li>
            <a href="#">Accolades</a>
        </li>
        <li>
            <a href="publications.html">Publications</a>
        </li>
        <li>
            <a href="about-us.html">About Us</a>
        </li>
        <li>
            <a href="contact-us.html">Contact</a>
        </li>
    </ul>`

    $("#navigation").append(mainNavigation);
});
