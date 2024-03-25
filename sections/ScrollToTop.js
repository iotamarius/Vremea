// Scroll to top button

// selectez butonul de scroll pentru a putea pune un event listner pe el
const scrollToTopButton = document.querySelector('.scroll-button');
scrollToTopButton.addEventListener('click', () =>{
    // Functia scrollTo este o functie predefinita
    window.scrollTo({
        top:0,
        behavior: "smooth",
    })
});

// Declaram un event de scroll care daca este mai mare decat jumatate de ecran va face butonul vizibil

document.addEventListener("scroll", ()=>{
    // window.innerHeight = inaltimea viewport-ului
    if(window.scrollY > window.innerHeight/2){
        scrollToTopButton.style.visibility = "visible";
    }
    else{
        scrollToTopButton.style.visibility = "hidden";
    };
});


