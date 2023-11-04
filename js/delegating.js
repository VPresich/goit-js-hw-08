// For my modal window
const galleryRef = document.querySelector(".gallery");
const KEY_CODE_ESC = "Escape";

const modalBackdropRef = document.querySelector(".modal-backdrop");
const buttonCloseRef = document.querySelector(".close-button");
const modalContentRef = document.querySelector(".modal-content");

galleryRef.addEventListener("click", onImageClick);
buttonCloseRef.addEventListener("click", onCloseModalWindow);
modalBackdropRef.addEventListener("click", onBackdropClick);

function onImageClick(event) {
  const targentRef = event.target;
  const isImageRef = targentRef.classList.contains("gallery-img");
  if (!isImageRef) {
    return;
  }
  event.preventDefault();

  const imageSrc = {
    src: targentRef.getAttribute("data-source"),
    alt: targentRef.getAttribute("alt"),
    preview: targentRef.getAttribute("src"),
  };
  openModalWindow(imageSrc);
}

function openModalWindow({ src, alt }) {
  modalContentRef.src = src;
  modalContentRef.alt = alt;
  modalBackdropRef.classList.add("is-open");

  window.addEventListener("keydown", onWindowKeydown);
}

function onCloseModalWindow(event) {
  window.removeEventListener("keydown", onWindowKeydown);

  modalBackdropRef.classList.remove("is-open");
}

function onWindowKeydown(event) {
  if (event.code == KEY_CODE_ESC) {
    onCloseModalWindow(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModalWindow(event);
  }
}
