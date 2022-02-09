//=============== Animation Menu hamburger ===============//   

let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})

 //=============== Apparition header ===============//    

const titreSpans = document.querySelectorAll('h1 span');
const btns = document.querySelectorAll('.header-btn');
const liens = document.querySelectorAll('.menu-link');
const page = document.querySelectorAll('.menu-link-1');
const logo = document.querySelector('.logo-site');
const medias = document.querySelectorAll('.bulle');

window.addEventListener('load', () => {

    const TL = gsap.timeline({paused: true});

    TL
    .staggerFrom(titreSpans, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.5)
    .staggerFrom(page, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.1, '-=1')
    .staggerFrom(liens, 1, {top: -50, opacity: 0, ease: "power2.out"}, 0.3, '-=1')
    .staggerFrom(btns, 1, {opacity: 0, ease: "power2.out"}, 0.5, '-=1')
    .staggerFrom(medias, 1, {right: -200, ease: "power2.out"}, 0.5, '-=1')
    .from(logo, 0.4, {transform: "scale(0)", ease: "power2.out"}, 0.5, '-=1');

    TL.play();
})

    //=============== DECLARATION DU FORMULAIRE ===============//    

    (function()
    {

        'use strict'

        let form = document.getElementById('lessonForm');

        form.addEventListener('submit', function(event) 
        {

             Array.from(form.elements).forEach((input) => 
            {
                if (input.type !== "submit") 
                {
                    if (!validateFields(input)) {
                        event.preventDefault();
                        event.stopPropagation();
                        input.classList.remove("is-valid");
                        input.classList.add("is-invalid");
                        input.nextElementSibling.style.display = 'block';
                    } 
                    else 
                    {
                        input.nextElementSibling.style.display = 'none';
                        input.classList.remove("is-invalid");
                        input.classList.add("is-valid");
                    }
                }
            });
        }, false)
    })()
    //=============== END - DECLARATION DU FORMULAIRE ===============//
