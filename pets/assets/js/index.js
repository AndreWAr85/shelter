//burger menu
const burgerIcon = document.querySelector('.menu-burger');
const headerMenu = document.querySelector('.header__menu');
const boduLock = document.querySelector('.main');
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


//pagination
const slide = document.querySelector('#carousel');

function creatSlide(item) {
   return `<li class="slider__element ${item.name}" id="${item.id}">
   <div class="element__img" id="${item.id}/1"><img src="${item.img}"
         alt="img-pets">
   </div>
   <div class="name__pets">${item.name}</div>
   <button class="learn">Learn more</button>
</li> `;
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
         data.push(data[randomNumber[0] - 1]);
         data.push(data[randomNumber[1] - 1]);
         data.push(data[randomNumber[3] - 1]);
         data.push(data[randomNumber[2] - 1]);
         data.push(data[randomNumber[4] - 1]);
         data.push(data[randomNumber[6] - 1]);
         data.push(data[randomNumber[5] - 1]);
         data.push(data[randomNumber[7] - 1]);
         data.unshift(data[data.length - 1])
         data.unshift(data[data.length - 2])
         data.unshift(data[data.length - 6])
         data.unshift(data[data.length - 7])
         data.unshift(data[data.length - 5])
         data.unshift(data[data.length - 4])
         data.unshift(data[data.length - 3])
         data.unshift(data[data.length - 8])
         data.unshift(data[data.length - 1])
         data.unshift(data[data.length - 2])
         data.unshift(data[data.length - 3])
         data.unshift(data[data.length - 4])
         data.unshift(data[data.length - 5])
         data.unshift(data[data.length - 6])
         data.unshift(data[data.length - 7])
         data.unshift(data[data.length - 8])
         data.unshift(data[data.length - 1])
         data.unshift(data[data.length - 2])
         data.unshift(data[data.length - 4])
         data.unshift(data[data.length - 3])
         data.unshift(data[data.length - 6])
         data.unshift(data[data.length - 8])
         data.unshift(data[data.length - 7])
         data.unshift(data[data.length - 5])

         slide.innerHTML = data.map(creatSlide).join('');
      })
}
fetchData()

const prev = document.querySelector('.switch__button.left')
const next = document.querySelector('.switch__button.right')
const prevEnd = document.querySelector('.switch__button.end-left')
const nextEnd = document.querySelector('.switch__button.end-ride')

const width = 310;
let widthSlider = slide.clientWidth
let slideCount = widthSlider / width;
let position = 0;
let slideIndex = 1
let pagunation = document.querySelector('.page-number')
let positionMax
let maxSlideIndex

document.addEventListener("DOMContentLoaded", function () {
   if (slideIndex == 1) {
      prev.setAttribute('disabled', 'disabled');
      prevEnd.setAttribute('disabled', 'disabled');
   }
})

if (slide.clientWidth == 1240) { maxSlideIndex = 6; positionMax = 6200 }
else if (slide.clientWidth == 620) { maxSlideIndex = 8; positionMax = 4340 }
else { maxSlideIndex = 16; positionMax = 4650 };


prev.onclick = function () {
   let widthSlider = slide.clientWidth
   let slideCount = widthSlider / width;
   if (slide.clientWidth == 1240) { maxSlideIndex = 6; positionMax = 6200 }
   else if (slide.clientWidth == 620) { maxSlideIndex = 8; positionMax = 4340 }
   else { maxSlideIndex = 16; positionMax = 4650 };
   position += width * slideCount;
   position = Math.min(position, 0)
   slide.style.marginLeft = position + 'px';
   slideIndex = slideIndex - 1;
   pagunation.innerHTML = slideIndex
   if (slideIndex == 1) {
      prev.setAttribute('disabled', 'disabled');
      prevEnd.setAttribute('disabled', 'disabled');
   }
   if (slideIndex !== maxSlideIndex) {
      next.removeAttribute('disabled');
      nextEnd.removeAttribute('disabled');
   }

};

next.onclick = function () {
   let widthSlider = slide.clientWidth
   let slideCount = widthSlider / width;
   if (slide.clientWidth == 1240) { maxSlideIndex = 6; positionMax = 6200 }
   else if (slide.clientWidth == 620) { maxSlideIndex = 8; positionMax = 4340 }
   else { maxSlideIndex = 16; positionMax = 4650 };
   const slidesArray = [...slide.querySelectorAll('.slider__element')];
   position -= width * slideCount;
   position = Math.max(position, -width * ((slidesArray.length / 2) - slideCount));
   slide.style.marginLeft = position + 'px';
   slideIndex = slideIndex + 1;
   pagunation.innerHTML = slideIndex
   if (slideIndex == maxSlideIndex) {
      next.setAttribute('disabled', 'disabled');
      nextEnd.setAttribute('disabled', 'disabled');
   }
   if (slideIndex !== 1) {
      prev.removeAttribute('disabled');
      prevEnd.removeAttribute('disabled');
   }
}

prevEnd.onclick = function () {
   let widthSlider = slide.clientWidth
   let slideCount = widthSlider / width;
   if (slide.clientWidth == 1240) { maxSlideIndex = 6; positionMax = 6200 }
   else if (slide.clientWidth == 620) { maxSlideIndex = 8; positionMax = 4340 }
   else { maxSlideIndex = 16; positionMax = 4650 };
   position = 0;
   slide.style.marginLeft = position + 'px';
   slideIndex = 1;
   pagunation.innerHTML = slideIndex
   if (slideIndex == 1) {
      prev.setAttribute('disabled', 'disabled');
      prevEnd.setAttribute('disabled', 'disabled');
   }
   if (slideIndex !== maxSlideIndex) {
      next.removeAttribute('disabled');
      nextEnd.removeAttribute('disabled');
   }

}

nextEnd.onclick = function () {
   let widthSlider = slide.clientWidth
   let slideCount = widthSlider / width;
   if (slide.clientWidth == 1240) { maxSlideIndex = 6; positionMax = 6200 }
   else if (slide.clientWidth == 620) { maxSlideIndex = 8; positionMax = 4340 }
   else { maxSlideIndex = 16; positionMax = 4650 };
   slide.style.marginLeft = (positionMax * (-1)) + 'px';
   slideIndex = maxSlideIndex;
   position = positionMax * (-1);
   pagunation.innerHTML = slideIndex
   if (slideIndex == maxSlideIndex) {
      next.setAttribute('disabled', 'disabled');
      nextEnd.setAttribute('disabled', 'disabled');
   }
   if (slideIndex !== 1) {
      prev.removeAttribute('disabled');
      prevEnd.removeAttribute('disabled');
   }

}

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