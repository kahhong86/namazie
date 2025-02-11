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
    `<ul id="main-nav">
        <li>
            <a href="areas-of-practice.html">Areas of practice</a>
        </li>
        <li>
            <a href="ip-showcase.html">IP showcase</a>
        </li>
        <li>
            <a href="accolades.html">Accolades</a>
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

    path = window.location.pathname.split("/");
    for(let i = 0; i < path.length; i++){
        console.log("finding ",path[i]);
        if(path[i].includes(".html") == true){
            console.log("confirmation ",path[i]);
            $("#main-nav li").each(function(index){
                let thisNav = $(this).find("a").attr("href");
                
                if(thisNav == path[i]){
                    $(this).addClass("selected");
                }
            });
        }
    }
    
    // console.log($("#main-nav li a").attr('href'));
});
