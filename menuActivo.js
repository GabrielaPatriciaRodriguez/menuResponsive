const menuLink = document.querySelectorAll('#navbarNav > ul > li > a');

const observer = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        const id= entry.target.getAttribute("id");        
        const menuLink= document.querySelector(`ul li a[href='#${id}']`);
        if(entry.isIntersecting){
            document.querySelector("#navbarNav > ul > li > a.selected").classList.remove("selected");
            menuLink.classList.add("selected");
        }
    });
},
{rootMargin: "-30% 0px -70% 0px"}
);

function handleHide(){
    const button = document.querySelector("button.navbar-toggler")
    button.click()
}

menuLink.forEach(menuLink => {
    const hash = menuLink.getAttribute("href");
    const target = document.querySelector(hash);
    if(target){
        observer.observe(target);
    }
    // logica para ocultar el menu:
    menuLink.addEventListener("click", handleHide)
})
