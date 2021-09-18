
var popoutmenu = document.getElementById("popout-menu-id");
var hamburger = document.getElementById("hamburger-id").addEventListener("click", machWas);

var menuButton = document.getElementById("home-button-id").addEventListener("click", hidePopoutMenu);


function machWas(){
    console.log("Mach Was !!!");
    popoutmenu.style.visibility = "initial";
}

function hidePopoutMenu(){
    popoutmenu.style.visibility = "hidden";
}
hidePopoutMenu();

console.log("hello Peter Pahn");