const galleryRef = document.querySelector(".gallery");

galleryRef.addEventListener("click", onImageClick);

let modalWindowRef = null;

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

  console.log(imageSrc);

  openModalWindow(imageSrc);
}

function openModalWindow({ src, alt }) {
  modalWindowRef = basicLightbox.create(
    `<div class="modal">
        <img src="${src}" alt="${alt}"/>        
    </div>`
  );
  window.addEventListener("keydown", onKeydown);
  modalWindowRef.show();
}

function closeModalWindow(event) {
  modalWindowRef.close();
  window.removeEventListener("keydown", onKeydown);
}

function onKeydown(event) {
  const KEY_CODE_ESC = "Escape";
  if (event.code == KEY_CODE_ESC) {
    closeModalWindow(event);
  }
}
