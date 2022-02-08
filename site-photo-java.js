let toggle = document.querySelector('.toggle');
let body = document.querySelector('body');

toggle.addEventListener('click', function() {
    body.classList.toggle('open');
})



const navigation = document.querySelector('medias')

    window.addEventListener('scroll', () => {

        if(window.scrollY > 30){
            navigation.classList.add('anim-medias');
        } else {
            navigation.classList.remove('anim-medias');
        }
    })

    //=============== START - DECLARATION DU FORMULAIRE ===============//    

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
