import { KEY_CODE_ESC } from "./constants.js";

const galleryRef = document.querySelector(".gallery");

let modalWindowRef = null;

galleryRef.addEventListener("click", onImageClick);

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

  openModalWindow(imageSrc);
}

function openModalWindow({ src, alt }) {
  modalWindowRef = basicLightbox.create(
    `<div class="modal">
        <img src="${src}" alt="${alt}"/>        
    </div>`,
    {
      onShow: () => {
        document.addEventListener("keydown", onKeydown);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeydown);
      },
    }
  );
  modalWindowRef.show();
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    modalWindowRef.close();
  }
}
