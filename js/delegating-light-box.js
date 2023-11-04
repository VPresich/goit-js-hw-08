const galleryRef = document.querySelector(".gallery");

const KEY_CODE_ESC = "Escape";
let modalWindowRef = null;

galleryRef.addEventListener("click", onImageClick);

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
  modalWindowRef = basicLightbox.create(
    `<div class="modal">
        <img src="${src}" alt="${alt}"/>        
    </div>`
  );
  modalWindowRef.show();

  window.addEventListener("keydown", onKeydown);
}

function closeModalWindow(event) {
  window.removeEventListener("keydown", onKeydown);
  modalWindowRef.close();
}

function onKeydown(event) {
  if (event.code == KEY_CODE_ESC) {
    closeModalWindow(event);
  }
}
