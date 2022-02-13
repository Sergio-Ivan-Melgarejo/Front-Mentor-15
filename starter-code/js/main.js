const nav = document.getElementById("nav");
const navButton = document.getElementById("navButton");
const backgroundMovil = document.getElementById("background-movil");

const body = document.getElementById("body");

const containerbutton = document.querySelectorAll("[data-rol]");
let data = null;

const getData = async () => {
    data =  await fetch("./data.json")
        .then(res => res.json())
        .then(res =>{
            return res;
        });
}

const validate = async event =>{
    if(event.dataset.rol == "button"){
        containerbutton.forEach(ele => ele.classList.remove("select"));
        event.classList.add("select");

        if(!data) await getData();
        changedData(event.dataset.number); 
    } 
}

const changedData = (number) => {
    let itemsToChange = document.querySelectorAll("[data-section]");

    for(const item of itemsToChange){
        const section = item.dataset.section;
        const value = item.dataset.value;

        if(value == "images" || value == "landscape" || value == "portrait") item.src = data[section][number][value];
        else item.textContent = data[section][number][value];
    }
}

addEventListener("DOMContentLoaded",()=>{ 
    
    navButton.addEventListener("click",()=>{
        const open = nav.classList.toggle("open");
        open ? 
            navButton.children[0].src = "../starter-code/assets/shared/icon-close.svg"
        :   navButton.children[0].src = "../starter-code/assets/shared/icon-hamburger.svg";
    })

    backgroundMovil.addEventListener("click",()=>{
        const open = nav.classList.toggle("open");
        open ? 
            navButton.children[0].src = "../starter-code/assets/shared/icon-close.svg"
        :   navButton.children[0].src = "../starter-code/assets/shared/icon-hamburger.svg";
    })

    switch(body.dataset.page){
        case "destination":
            const eventsDestination = document.querySelector(".destination #events");
            eventsDestination.addEventListener("click",(e)=>{
                validate(e.target); 
            })
            break
        case "crew": 
            const eventsCrew = document.querySelector(".crew #events");
            eventsCrew.addEventListener("click",(e)=>{
                validate(e.target); 
            })
            break
        case "technology":
            const eventsTechnology = document.querySelector(".technology #events");
            eventsTechnology.addEventListener("click",(e)=>{
                validate(e.target); 
            })
            break
    }
})

