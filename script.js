"use strict";

////CONTACT/////
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".close-modal");
const btnsOpenModal = document.querySelectorAll(".btn-contact");

const openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

for (let i = 0; i < btnsOpenModal.length; i++)
  btnsOpenModal[i].addEventListener("click", openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  // console.log(e.key);

  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

///////SLIDER//////

const slides = document.querySelectorAll(".slides");
const dots = document.querySelector(".dot-box");
const slide1 = document.querySelector(".slide1");
const slide2 = document.querySelector(".slide2");
const slide3 = document.querySelector(".slide3");

let curSlide = 0;
const maxSlide = slides.length;

const activateDot = function (slide) {
  document
    .querySelectorAll(".dots")
    .forEach((dot) => dot.classList.remove("dots--active"));

  document
    .querySelector(`.dots[data-slide="${slide}"]`)
    .classList.add("dots--active");

  document
    .querySelectorAll(".small-dot")
    .forEach((dot) => dot.classList.remove("small-dot--active"));

  document
    .querySelector(`.small-dot[data-dot="${slide}"]`)
    .classList.add("small-dot--active");
};

const goToSlide = function (slide) {
  slides.forEach(
    (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
  );
};

const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  // activateDot(curSlide);
};

const init = function () {
  goToSlide(0);
  // createDots();

  activateDot(0);
};
init();

dots.addEventListener("click", function (e) {
  let silderBtn = e.target.closest(".dots");

  if (!silderBtn) return;

  const slideNum = silderBtn.dataset.slide;
  goToSlide(Number(slideNum));
  activateDot(Number(slideNum));
});

// auto Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  activateDot(curSlide);
};
setInterval(nextSlide, 3000);

////PROJECT////
const projectChoose = document.querySelector(".project-detail");
const projectImg = document.querySelectorAll(".project-image");
const prDetail = document.querySelectorAll(".pr-detail");

const changeImage = function (imgNum) {
  projectImg.forEach((img) => img.classList.add("pr-hidden"));
  document
    .querySelector(`.project-image[data-img="${imgNum}"]`)
    .classList.remove("pr-hidden");
  prDetail.forEach((detail) => detail.classList.remove("pr-detail--active"));
  document
    .querySelector(`.pr-detail[data-pr="${imgNum}"]`)
    .classList.add("pr-detail--active");
};

projectChoose.addEventListener("click", function (e) {
  let imgNum = e.target.closest(".pr-detail");
  changeImage(Number(imgNum.dataset.pr));
});
