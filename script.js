var menu_button = document.getElementById("menu_button")
var sideNav = document.getElementById("sideNav")
var menu = document.getElementById("menu")

sideNav.style.right = "-250px";

menu_button.onclick = function(){
    if(sideNav.style.right == "-250px"){
        sideNav.style.right = "0"
    }
    else{
        sideNav.style.right = "-250px"
    }
}

