var navlinks = document.getElementById("navLinks");

function displayMenu(){
    navlinks.style.display = "block"
    navLinks.style.right = "0";
}

function closeMenu(){
    navLinks.style.right = "-200px";

    navlinks.ontransitionend = function(){
        navlinks.style.display = "none";
    }

}