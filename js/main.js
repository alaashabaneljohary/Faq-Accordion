let Accordionbox = document.querySelectorAll(".Accordion-box") ;
Accordionbox.forEach(element => {
    element.addEventListener("click" , function() {
        this.classList.toggle("active");
    })
});