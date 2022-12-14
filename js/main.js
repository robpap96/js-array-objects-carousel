
// BONUS 1:
// Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
// BONUS 2:
// Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
// BONUS 3:
// Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

"use strict";

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, 
    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, 
    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, 
    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },
    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


const currentImage = document.querySelector('.carousel-left');
const carouselRight = document.querySelector('.carousel-right');

const chevronUp = '<i class="fa-solid fa-chevron-up"></i>';
const chevronDown = '<i class="fa-solid fa-chevron-down"></i>';

//creo elemento prev
const prev = document.createElement('div');
prev.classList.add('prev');
carouselRight.append(prev);
document.querySelector('.prev').innerHTML = chevronUp;

//creo elemento next
const next = document.createElement('div');
next.classList.add('next');
carouselRight.append(next);
document.querySelector('.next').innerHTML = chevronDown;

images.forEach((element, index) => {
    // const previousElement = element[index-1];
    // const nextElement = element[index+1];
    // const currentElement = element[index];
    //aggiungo immagini a sinistra ciclicamente
    const imageLeft = document.createElement('img');
    const description = document.createElement('div'); 

    imageLeft.src = (`${element.image}`);
    imageLeft.alt = (`${element.title}`);
    if(index === 0) {
        imageLeft.classList.add("active");
    }else{
        imageLeft.classList.add("hide");
    }
    imageLeft.id = "0" + index;

    if(index === 0) {
        description.classList.add("active");
    }else{
        description.classList.add("hide");
    }
    description.id ="T" + index;
    description.classList.add('position-absolute');
    description.innerHTML = (`
       <h2> ${element.title} </h2>
        ${element.text}`);
    currentImage.append(imageLeft);
    currentImage.append(description);
    //aggiungo immagini a destra ciclicamente
    const imageRight = document.createElement('img');
    imageRight.classList.add('opacity-filter');
    imageRight.id = index;
    imageRight.src = (`${element.image}`);
    imageRight.alt = (`${element.title}`);
    carouselRight.append(imageRight);

    if(index === 0){
       imageRight.classList.remove('opacity-filter'); 
    }

    
});
//aggiungo click event next
let i = 0;

next.addEventListener('click', function(){
    let j = i + 1;
    if(i === 4){
        j = 0;
    }
    const currentItem = document.getElementById(i);
    const nextItem = document.getElementById(j);

    const currentImage = document.getElementById(`0${i}`);
    const nextImage = document.getElementById(`0${j}`);

    const currentText = document.getElementById(`T${i}`);
    const nextText = document.getElementById(`T${j}`);

    currentItem.classList.add('opacity-filter');
    nextItem.classList.remove('opacity-filter');

    currentImage.classList.remove('active');
    currentImage.classList.add('hide');
    nextImage.classList.remove('hide');
    nextImage.classList.add('active');

    currentText.classList.remove('active');
    currentText.classList.add('hide');
    nextText.classList.remove('hide');
    nextText.classList.add('active');

    i++;
    if(j === 0) {
        i = 0;
    }
        
});
//aggiungo click event prev
prev.addEventListener('click', function(){

    let j = i - 1;    
    if(i === 0){
        j = 4;
    }
    const currentItem = document.getElementById(i);
    const prevItem = document.getElementById(j);

    const currentImage = document.getElementById(`0${i}`);
    const prevImage = document.getElementById(`0${j}`);

    const currentText = document.getElementById(`T${i}`);
    const nextText = document.getElementById(`T${j}`);

    currentItem.classList.add('opacity-filter');
    prevItem.classList.remove('opacity-filter');

    currentImage.classList.remove('active');
    currentImage.classList.add('hide');
    prevImage.classList.remove('hide');
    prevImage.classList.add('active');

    currentText.classList.remove('active');
    currentText.classList.add('hide');
    nextText.classList.remove('hide');
    nextText.classList.add('active');

    i--;
    if(j === 4) {
        i = 4;
    }
    
});