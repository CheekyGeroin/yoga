const refs = {
  about: document.querySelector('.nav__about'),
  advantages: document.querySelector('.nav__adv'),
  timetable: document.querySelector('.nav__time'),
  form: document.querySelector('.nav__form'),
  menu: document.querySelector('.menu'),
  openBtn: document.querySelector('.open__button'),
  closeBtn: document.querySelector('.close__button'),
};
console.log(refs.about);

refs.about.addEventListener('mouseenter', onAddClassAbout);
refs.advantages.addEventListener('mouseenter', onAddClassAdv);
refs.timetable.addEventListener('mouseenter', onAddClassTime);
refs.form.addEventListener('mouseenter', onAddClassForm);

function onAddClassAbout() {
  refs.about.classList.add('nav__about--active');
  refs.about.addEventListener('mouseout', onRemoveClassAbout);

  function onRemoveClassAbout() {
    refs.about.classList.remove('nav__about--active');
  }
}

function onAddClassAdv() {
  refs.advantages.classList.add('nav__adv--active');
  refs.advantages.addEventListener('mouseout', onRemoveClassAdv);

  function onRemoveClassAdv() {
    refs.advantages.classList.remove('nav__adv--active');
  }
}
function onAddClassTime() {
  refs.timetable.classList.add('nav__time--active');
  refs.timetable.addEventListener('mouseout', onRemoveClassTime);

  function onRemoveClassTime() {
    refs.timetable.classList.remove('nav__time--active');
  }
}
function onAddClassForm() {
  refs.form.classList.add('nav__form--active');
  refs.form.addEventListener('mouseout', onRemoveClassForm);

  function onRemoveClassForm() {
    refs.form.classList.remove('nav__form--active');
  }
}

refs.openBtn.addEventListener('click', onOpenMenu);

function onOpenMenu() {
  refs.menu.classList.add('is-open');
  refs.openBtn.classList.add('hide');
  refs.closeBtn.addEventListener('click', onCloseMenu);
  function onCloseMenu() {
    refs.menu.classList.remove('is-open');
    refs.openBtn.classList.remove('hide');
  }
}
