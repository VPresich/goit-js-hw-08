import { KEY_CODE_ESC } from "./constants.js";

import LightboxSliderInterface from "./lightbox-slider-interface.js";

const refs = {
  gallery: document.querySelector(".gallery"),
};

let modalWindowRef = null;

refs.gallery.addEventListener("click", onImageClick);

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
  const listImages = event.currentTarget.children;
  const indexList = Array.from(listImages).indexOf(closestLi);

  openModalWindow(imageSrc, listImages, indexList);
}

function openModalWindow({ src, alt }, listImages, indexList) {
  modalWindowRef = basicLightbox.create(
    `<div class="lightbox-modal">  
      <button
        class="lightbox-close"
        type="button"
        id="id-lightbox-close"
      >
        <svg class="lightbox-close-icon" width="8" height="8">
          <use href="./img/icons.svg#close-form"></use>
        </svg>
      </button>
      <div class="lightbox-slider">
        <button
          class="lightbox-button"
          id="prev-lightbox-button">
          Previous
        </button>

        <img class="lightbox-image" src="${src}" alt="${alt}" width="1112" height="640"/>           
          
        <button
          class="lightbox-button"
          id="next-lightbox-button"
          type="button"> Next
        </button>
      </div>
    </div>`,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onKeydown);
      },
      onClose: () => {
        document.removeEventListener("keydown", onKeydown);
      },
      closable: true,
    }
  );

  const lightboxSlider = new LightboxSliderInterface(
    indexList,
    listImages,
    modalWindowRef
  );
  modalWindowRef.show();
}

function onKeydown(event) {
  if (event.code === KEY_CODE_ESC) {
    modalWindowRef.close();
  }
}

function createLightboxMarkup() {}
