let menuMobile = document.querySelector(".nav-mobile-menu");
let mainMenu = document.querySelector(".navigation");

menuMobile.addEventListener("click",function(){
    menuMobile.classList.toggle("active-menu")
    if(menuMobile.classList.contains("active-menu")){
        mainMenu.classList.add("active-menu");
    }else{
        mainMenu.classList.remove("active-menu");
    }
})