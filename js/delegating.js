const galleryRef = document.querySelector(".gallery");
const modalBackdropRef = document.querySelector(".modal-backdrop");
const buttonCloseRef = document.querySelector(".close-button");
const modalContentRef = document.querySelector(".modal-content");

buttonCloseRef.addEventListener("click", onCloseModal);
galleryRef.addEventListener("click", onImageClick);
modalBackdropRef.addEventListener("click", onBackdropClick);

function onImageClick(event) {
  console.log(galleryRef);
  const targentRef = event.target;
  console.log(targentRef);

  const isImageRef = event.target.classList.contains("gallery-img");
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

function onCloseModal(event) {
  modalBackdropRef.classList.remove("is-open");
  window.removeEventListener("keydown", onWindowKeydown);
}

function onWindowKeydown(event) {
  const KEY_CODE_ESC = "Escape";
  console.log(event.code);
  if (event.code == KEY_CODE_ESC) {
    onCloseModal(event);
  }
}

function onBackdropClick(event) {
  if (event.currentTarget === event.target) {
    onCloseModal(event);
  }
}
