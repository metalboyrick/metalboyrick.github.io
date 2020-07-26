const navBar= document.getElementsByClassName("nav-bar");
const navItems = document.getElementsByClassName("nav-item");
const burgerButton = document.getElementsByClassName("burger");
const navButton = document.getElementById("nav-button");
const navListContainer = document.getElementById("nav-list-container");

var offset = window.pageYOffset;
var isCross = false;

document.addEventListener("scroll",function(e){
    offset = window.pageYOffset;
    if(offset == 0){
        navBar[0].setAttribute("status","no-background");

        for(let i = 0; i < navItems.length; i++){
            navItems[i].style.color = 'white';
        }

        navButton.style.color = "white";
        
    }
    else{
        navBar[0].setAttribute("status","with-background");

        for(let i = 0; i < navItems.length; i++){
            navItems[i].style.color = 'black';
        }

        navButton.style.color = "black";
    }

    if(isCross == true){
        navButton.className = "fa fa-bars";
        navListContainer.setAttribute("is-shown","false");
        isCross = false;
    }
})

navBar[0].addEventListener("mouseenter",function(e){

    navBar[0].setAttribute("status","with-background");

    for(let i = 0; i < navItems.length; i++){
        navItems[i].style.color = 'black';
    }

    navButton.style.color = "black";
    
})

navBar[0].addEventListener("mouseleave",function(e){
    offset = window.pageYOffset;
    if(offset == 0 && isCross == false){
        navBar[0].setAttribute("status","no-background");

        for(let i = 0; i < navItems.length; i++){
            navItems[i].style.color = 'white';
        }
        navButton.style.color = "white";
    }
    

})

navButton.addEventListener("mouseenter",function(){
    navButton.style.color = "gray";
});

navButton.addEventListener("mouseleave",function(){
    offset = window.pageYOffset;
    if(offset == 0 && isCross == false){
        navButton.style.color = "white";
    }
    else{
        navButton.style.color = "black";
    }
    
});

navButton.addEventListener("click",function(){
    
    if(isCross == false){
        navButton.className = "fa fa-remove";
        navListContainer.setAttribute("is-shown","true");
        isCross = true;
    }
    else{
        navButton.className = "fa fa-bars";
        navListContainer.setAttribute("is-shown","false");
        isCross = false;
    }

});