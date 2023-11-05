// For my modal window
import { KEY_CODE_ESC } from "./constants.js";
import Slider from "./slider.js";
import SliderInterface from "./slider-interface.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  modalBackdrop: document.querySelector(".modal-backdrop"),
  buttonClose: document.querySelector(".close-button"),
  modalContent: document.querySelector(".modal-content"),
  slidesList: document.querySelector(".gallery").querySelectorAll("li"),
  prevBtn: document.getElementById("prevBtn"),
  nextBtn: document.getElementById("nextBtn"),  
  sliderDots: document.querySelector('.slider-dots'),
};

refs.gallery.addEventListener("click", onImageClick);
refs.buttonClose.addEventListener("click", onCloseModalWindow);
refs.modalBackdrop.addEventListener("click", onBackdropClick);

function onImageClick(event) {
  const targetRef = event.target;
  const isImageRef = targetRef.classList.contains("gallery-img");
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const imageSrc = {
    src: targetRef.dataset.source,
    alt: targetRef.alt,
    preview: targetRef.src,
  };
  const closestLi = targetRef.closest(".gallery-item"); 
  const indexList = Array.from(event.currentTarget.children).indexOf(closestLi);
  
  const sliderRef = new Slider(indexList, 1, refs.slidesList.length);
  const sliderInterface = new SliderInterface(sliderRef,
  refs.slidesList,
  refs.prevBtn,
  refs.nextBtn,
  refs.modalContent,
  refs.sliderDots
  );  
  openModalWindow(imageSrc);
}

function openModalWindow({ src, alt }) {
  refs.modalContent.src = src;
  refs.modalContent.alt = alt;
  refs.modalBackdrop.classList.add("is-open");

  window.addEventListener("keydown", onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener("keydown", onWindowKeydown);

  refs.modalBackdrop.classList.remove("is-open");
}

function onWindowKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}
