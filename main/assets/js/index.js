//burger menu
const burgerIcon = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const backgraund = document.querySelector('.backgraund');
const backgraundFon = document.querySelector('.fon');
const container = document.querySelector('.header__container')
const list = document.querySelector('.menu__list')

if (burgerIcon) {
   burgerIcon.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      burgerIcon.classList.toggle('burger-active');
      headerMenu.classList.toggle('menu-mobil');
      backgraund.classList.toggle('fon')
      container.classList.toggle('visable')
   });
}

if (backgraund) {
   backgraund.addEventListener("click", function (e) {
      document.body.classList.remove('lock');
      burgerIcon.classList.remove('burger-active');
      headerMenu.classList.remove('menu-mobil');
      backgraund.classList.remove('fon')
      container.classList.remove('visable')
   });
}
if (list) {
   list.addEventListener("click", function (e) {
      document.body.classList.remove('lock');
      burgerIcon.classList.remove('burger-active');
      headerMenu.classList.remove('menu-mobil');
      backgraund.classList.remove('fon')
      container.classList.remove('visable')
   });
}

//carousel
const slide = document.querySelector('#carousel');
let slideIndex = 1;
let isMoving = false;

function creatSlide(item) {
   return `<li class="slider__element ${item.name}" id="${item.id}">
   <div class="element__img" id="${item.id}/1"><img src="${item.img}"
         alt="img-pets">
   </div>
   <div class="name__pets">${item.name}</div>
   <button class="learn">Learn more</button>
</li> `;
}
function stepSlides() {
   slide.style.transform = `translateX(-${slideIndex * 100}%)`;
}
function transformSlide(direction) {
   isMoving = true;
   slide.style.transition = `transform 500ms ease-in-out`;
   direction !== 'right' ? (slideIndex -= 1) : (slideIndex += 1);
   stepSlides();
}


function numberRandom() {
   const maxValue = 8;
   const required = 8;
   let m = {};
   let array = [];
   for (let i = 0; i < required; ++i) {
      let r = Math.floor(Math.random() * (maxValue - i));
      array.push(((r in m) ? m[r] : r) + 1);
      let l = maxValue - i - 1;
      m[r] = (l in m) ? m[l] : l;
   }
   return array
}
const randomNumber = numberRandom()

async function fetchData() {
   await fetch('assets/js/pets.json')
      .then((collection) => {
         return collection.json();
      })
      .then((data) => {
         data.push(data[randomNumber[0] - 1]);
         data.push(data[randomNumber[1] - 1]);
         data.push(data[randomNumber[2] - 1]);
         data.push(data[randomNumber[3] - 1]);
         data.push(data[randomNumber[4] - 1]);
         data.push(data[randomNumber[5] - 1]);
         data.push(data[randomNumber[6] - 1]);
         data.push(data[randomNumber[7] - 1]);
         data.unshift(data[data.length - 3]);
         data.unshift(data[data.length - 4]);
         data.unshift(data[data.length - 5]);
         data.unshift(data[data.length - 6]);
         data.unshift(data[data.length - 7]);
         data.unshift(data[data.length - 8]);
         data.unshift(data[data.length - 1]);
         data.unshift(data[data.length - 2]);
         data.unshift(data[data.length - 3]);
         data.unshift(data[data.length - 4]);
         data.unshift(data[data.length - 5]);
         data.unshift(data[data.length - 6]);
         data.unshift(data[data.length - 7]);
         data.unshift(data[data.length - 8]);
         data.unshift(data[data.length - 1]);
         data.unshift(data[data.length - 2]);
         data.unshift(data[data.length - 3]);
         data.unshift(data[data.length - 4]);
         data.unshift(data[data.length - 5]);
         data.unshift(data[data.length - 6]);
         data.unshift(data[data.length - 7]);
         data.unshift(data[data.length - 8]);
         data.unshift(data[data.length - 1]);
         data.unshift(data[data.length - 2]);
         data.unshift(data[data.length - 3]);
         data.unshift(data[data.length - 4]);
         data.unshift(data[data.length - 5]);
         data.unshift(data[data.length - 6]);
         data.unshift(data[data.length - 7]);
         data.unshift(data[data.length - 8]);
         slide.innerHTML = data.map(creatSlide).join('');

         stepSlides();
      })
}
fetchData()

document.querySelector('.our-frends__button-rithe').addEventListener('click', () => {
   if (isMoving) {
      return;
   }
   transformSlide('right');
})
document.querySelector('.our-frends__button-left').addEventListener('click', () => {
   if (isMoving) {
      return;
   }
   transformSlide();
})

slide.addEventListener('transitionend', () => {
   isMoving = false;
   if (slideIndex === 0) {
      slide.style.transition = 'none';
      slideIndex = 8;
      stepSlides()
   }
   if (slideIndex === 9) {
      slide.style.transition = 'none';
      slideIndex = 1;
      stepSlides()
   }
})

//popap
const popupFon = document.querySelector('.popup');
const exitPopup = document.querySelector('.popup-close');
const popupBody = document.querySelector('.popup__body');
const popupContent = document.querySelector('.popup-content')

slide.onclick = function (e) {
   let slideComponent = e.target;
   let slideElement = slideComponent.parentNode;
   let number = slideElement.id;
   let numberArray = Array.from(number.toString(), Number);
   let numberPet = numberArray[0] - 1

   async function fetchPopUp() {
      let pets = await fetch('assets/js/pets.json')
      const pet = await pets.json();
      const petInfo = `<div class="popup__images"><img class="img-popup" src=${pet[`${numberPet}`].img}
alt = "pets-icon" ></div >
   <div class="popup__information">
      <div class="popup__name">${pet[`${numberPet}`].name}</div>
      <div class="typ-breed">${pet[`${numberPet}`].breed}</div>
      <div class="diskripcion">${pet[`${numberPet}`].description}</div>
      <ul class="pet-info">
         <li class="age"><span class="info-bolt">Age: </span>${pet[`${numberPet}`].age}</li>
         <li class="inokulacions"><span class="info-bolt">Inoculations: </span>${pet[`${numberPet}`].inoculations}</li>
         <li class="disseases"><span class="info-bolt">Diseases: </span>${pet[`${numberPet}`].diseases}</li>
         <li class="parasites"><span class="info-bolt">Parasites: </span>${pet[`${numberPet}`].parasites}</li>
      </ul>`;
      popupContent.innerHTML = petInfo;
   }

   fetchPopUp()
   document.body.classList.add('lock');
   popupFon.classList.add('popup-active');
   popupBody.classList.add('body-active');
   burgerIcon.classList.add('z-in');
}
if (exitPopup) {
   exitPopup.addEventListener("click", function (e) {
      document.body.classList.remove('lock');
      popupFon.classList.remove('popup-active');
      popupBody.classList.remove('body-active');
      burgerIcon.classList.remove('z-in');
   })
}
if (popupFon) {
   popupFon.addEventListener("click", function (e) {
      document.body.classList.remove('lock');
      popupFon.classList.remove('popup-active');
      popupBody.classList.remove('body-active');
      burgerIcon.classList.remove('z-in');
   });
}
if (popupContent) {
   popupContent.addEventListener("click", function (e) {
      e.stopPropagation();
   });
}