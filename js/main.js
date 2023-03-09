//Dato un array di oggetti letterali con:
//  - url dell’immagine
//  - titolo
//  - descrizione
// Creare un carosello



const imagesArray = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const imageListDom = document.querySelector('.image-list');
let sliderContent = '';

for (let i = 0; i < imagesArray.length; i++) {
    let newWrapper = ` <div class="wrapper">
                            <img src="${imagesArray[i].image}" class="wrapped-img">
                            <div class="relative-text">
                               <h2> ${imagesArray[i].title}<h2>
                               <div class="text"> ${imagesArray[i].text}</div>
                            </div>
                      </div> `;

    sliderContent += newWrapper;
    console.log(newWrapper);
}

imageListDom.innerHTML = sliderContent;

const wrapperDom = document.getElementsByClassName('wrapper');
console.log(wrapperDom);

let activeImage = 0; //0 relativo alla posizione nell'array. 

wrapperDom[activeImage].classList.add('show');  //l'img del primo wrapper sarà sempre visibile.


const nextBtnDom = document.querySelector('#next-btn');
const prevBtnDom = document.querySelector('#prev-btn');

nextBtnDom.addEventListener('click',
    function () {

        if (activeImage < wrapperDom.length - 1) {

            wrapperDom[activeImage].classList.remove('show');

            activeImage++;

            wrapperDom[activeImage].classList.add('show');

            prevBtnDom.classList.remove('hide');

            if (activeImage == wrapperDom.length - 1) {

                nextBtnDom.classList.add('hide');
            }
        }
    }
);


prevBtnDom.addEventListener('click',

    function () {
        if (activeImage > 0) {
            wrapperDom[activeImage].classList.remove('show');
            activeImage--;
            wrapperDom[activeImage].classList.add('show')

            nextBtnDom.classList.remove('hide');


            if (activeImage == 0) {
                prevBtnDom.classList.add('hide');
            }
        }
    }
);