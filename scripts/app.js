function consoleEvent() {
    arrow = document.querySelector(".arrow-span");
    console = document.querySelector(".input-console");

    arrow.style.color = "#fff";
}
function consoleEventLost() {
    arrow = document.querySelector(".arrow-span");
    console = document.querySelector(".input-console");

    arrow.style.color = "#61dafb";
}
function menuResponsive() {
    hamburguer = document.querySelector(".hamburguer-icon");
    navigation = document.querySelector(".navigation-responsive");
    divOne = document.querySelector(".one");
    divTwo = document.querySelector(".two");
    divThree = document.querySelector(".three");

    if (navigation.style.right === "-100%") {        
        navigation.style.right = "0";

        divOne.style.opacity = "0";
        divTwo.style.transform = "rotate(45deg)";
        divThree.style.transform = "rotate(-45deg)";
        divThree.style.top = "-.7rem";
    } else {    
        navigation.style.right = "-100%"

        divOne.style.opacity = "1";
        divTwo.style.transform = "rotate(0)";
        divThree.style.transform = "rotate(0)";
        divThree.style.top = "0";
    }
    
}