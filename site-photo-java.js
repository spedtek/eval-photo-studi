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
//============bouton==========//

//=============== Déclaration Formulaire ===============//    

document.getElementById("Formulaire").addEventListener("submit", function(e) {

    var erreur;
    var Prenom = document.getElementById("firstName");
    var Nom = document.getElementById("lastName");
    var Email = document.getElementById("email");
    var Telephone = document.getElementById("phoneNumber");
    var Projet = document.getElementById("projet");
    var CodePostale = document.getElementById("postCode");
    var Check = document.getElementById("conditions");


 
    if (!postCode.value) {
        erreur = "Veuillez renseigner un code postale";
    }
    if (!projet.value) {
        erreur = "Veuillez renseigner un projet";
    }
    if (!phoneNumber.value) {
        erreur = "Veuillez renseigner un numéro de téléphone";
    }
    if (!email.value) {
        erreur = "Veuillez renseigner un email";
    }
    if (!lastName.value) {
        erreur = "Veuillez renseigner un nom";
    }
    if (!firstName.value) {
        erreur = "Veuillez renseigner un prénom";
    }
    if (!conditions.value) {
        erreur = "Veuillez accepter les conditions";
    }
    if (erreur){
        e.preventDefault();
        document.getElementById("erreur").innerHTML = erreur;
        return false;
    } else {
        alert('Formulaire envoyé !');
    }
      
}); 
