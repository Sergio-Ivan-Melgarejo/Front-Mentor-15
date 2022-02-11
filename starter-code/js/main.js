
const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");
const backgroundMovil = document.getElementById("background-movil");

addEventListener("DOMContentLoaded",()=>{ 
    navButton.addEventListener("click",()=>{
        const open = nav.classList.toggle("open");
        // open ? 
        //     navButton.children[0].src = "../starter-code/assets/shared/icon-close.svg"
        // :   navButton.children[0].src = "../starter-code/assets/shared/icon-hamburger.svg";
    })

    backgroundMovil.addEventListener("click",()=>{
        const open = nav.classList.toggle("open");
        // open ? 
        //     navButton.children[0].src = "../starter-code/assets/shared/icon-close.svg"
        // :   navButton.children[0].src = "../starter-code/assets/shared/icon-hamburger.svg";
    })

    console.log(nav,navButton)
})

