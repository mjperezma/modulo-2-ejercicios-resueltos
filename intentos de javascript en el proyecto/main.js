// 'use strict';


// let card = document.querySelector('.js-card-title-box');

// let title = document.querySelector('.js-card-title-first');

// let links = document.querySelector('.js-card-menu-links');

// let linksIcon = document.querySelector('.js-card-menu-links-icon');

// let themeOne = document.getElementById('green');

// let themeTwo = document.getElementById('red');

// let themeThree = document.getElementById('other');

// themeOne.addEventListener('change', paletteOne);

// function paletteOne() {
//   card.classList.add('card__box--theme1');
//   title.classList.add('card__first--theme1');
//   links.classList.add('card__menu__links--theme1');
//   linksIcon.classList.add('card__menu__links__icon--theme1');
//   card.classList.remove('card__box--theme2');
//   title.classList.remove('card__first--theme2');
//   links.classList.remove('card__menu__links--theme2');
//   linksIcon.classList.remove('card__menu__links__icon--theme2');
//   card.classList.remove('card__box--theme3');
//   title.classList.remove('card__first--theme3');
//   links.classList.remove('card__menu__links--theme3');
//   linksIcon.classList.remove('card__menu__links__icon--theme3');
// }

// themeTwo.addEventListener('change', paletteTwo);

// function paletteTwo() {
//   card.classList.add('card__box--theme2');
//   title.classList.add('card__first--theme2');
//   links.classList.add('card__menu__links--theme2');
//   linksIcon.classList.add('card__menu__links__icon--theme2');
//   card.classList.remove('card__box--theme3');
//   title.classList.remove('card__first--theme3');
//   links.classList.remove('card__menu__links--theme3');
//   linksIcon.classList.remove('card__menu__links__icon--theme3');
//   card.classList.remove('card__box--theme1');
//   title.classList.remove('card__first--theme1');
//   links.classList.remove('card__menu__links--theme1');
//   linksIcon.classList.remove('card__menu__links__icon--theme1');
// }

// themeThree.addEventListener('change', paletteThree);

// function paletteThree() {
//   card.classList.add('card__box--theme3');
//   title.classList.add('card__first--theme3');
//   links.classList.add('card__menu__links--theme3');
//   linksIcon.classList.add('card__menu__links__icon--theme3');
//   card.classList.remove('card__box--theme2');
//   title.classList.remove('card__first--theme2');
//   links.classList.remove('card__menu__links--theme2');
//   linksIcon.classList.remove('card__menu__links__icon--theme2');
//   card.classList.remove('card__box--theme1');
//   title.classList.remove('card__first--theme1');
//   links.classList.remove('card__menu__links--theme1');
//   linksIcon.classList.remove('card__menu__links__icon--theme1');
// }



//  intento de formulario


// const userForm = [];

// let name = document.querySelector('.js-name');
// let profesion = document.querySelector('.js-profesion');
// let mail = document.querySelector('.js-mail');
// let number = document.querySelector('.js-number');
// let linkedin = document.querySelector('.js-linkedin');
// let github = document.querySelector('.js-github');



// function completeForm(ev) {
//   let cardName = document.querySelector('.js-card-title-first');
//   let cardProfesion = document.querySelector('.js-card-title-second');
//   let cardMail = document.querySelector('.js-a-mail');
//   let cardNumber = document.querySelector('.js-a-mobile');
//   let cardLinkedin = document.querySelector('.js-a-linkedin');
//   let cardGithub = document.querySelector('.js-a-github');
//   ev.preventDefault();
//   if (ev.currentTarget.classList.contains('js-name')) {
//     cardName.innerHTML = name.value;
//     userForm.name = ev.currentTarget.value;
//   }
//   if (ev.currentTarget.classList.contains('js-profesion')) {
//     cardProfesion.innerHTML = profesion.value;
//     userForm.profesion = ev.currentTarget.value;
//   }
//   if (ev.currentTarget.classList.contains('js-mail')) {
//     cardMail.setAttribute('href', mail.value);
//     userForm.mail = ev.currentTarget.value;
//   }
//   if (ev.currentTarget.classList.contains('js-number')) {
//     cardNumber.setAttribute('href', number.value);
//     userForm.number = ev.currentTarget.value;
//   }
//   if (ev.currentTarget.classList.contains('js-linkedin')) {
//     cardLinkedin.setAttribute('href', linkedin.value);
//     userForm.linkedin = ev.currentTarget.value;
//   }
//   if (ev.currentTarget.classList.contains('js-github')) {
//     cardGithub.setAttribute('href', github.value);
//     userForm.github = ev.currentTarget.value;
//   }
// }


// name.addEventListener('keyup', completeForm);
// profesion.addEventListener('keyup', completeForm);
// number.addEventListener('keyup', completeForm);
// mail.addEventListener('keyup', completeForm);
// linkedin.addEventListener('keyup', completeForm);
// github.addEventListener('keyup', completeForm);
