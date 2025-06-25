$(document).ready(function() {

    // Toggle navigation menu
    $(".hamburger").on("click", function() {
        $("#navigation").toggleClass("open");
    });

    // Main navigation HTML
    const mainNavigation = 
    `<ul id="main-nav">
        <li><a href="areas-of-practice.html">Areas of practice</a></li>
        <li><a href="ip-showcase.html">IP showcase</a></li>
        <li><a href="accolades.html">Accolades</a></li>
        <li><a href="publications.html">Publications</a></li>
        <li><a href="about-us.html">About Us</a></li>
        <li><a href="contact-us.html">Contact</a></li>
    </ul>`;

    // Append navigation to DOM
    $("#navigation").append(mainNavigation);

    // 🔴 FIX 1: Declare `path` with `let` or `const`
    let path = window.location.pathname.split("/");

    // Loop through path parts to find the matching nav link
    for (let i = 0; i < path.length; i++) {
        if (path[i].includes(".html")) {
            $("#main-nav li").each(function() {
                let thisNav = $(this).find("a").attr("href");

                if (thisNav === path[i]) {
                    $(this).addClass("selected");
                }
            });
        }
    }

});
