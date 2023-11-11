import Slider from "./slider.js";

class LightboxSliderInterface {
  #sliderRef;
  constructor(indexList, elementsList, lightboxRef) {
    this.#sliderRef = new Slider(indexList, 1, elementsList.length);

    this.prevBtn = lightboxRef.element().querySelector('#prev-lightbox-button');
    this.nextBtn = lightboxRef.element().querySelector('#next-lightbox-button');
    this.sliderContent = lightboxRef.element().querySelector('.lightbox-image');
    this.slidesCount = lightboxRef.element().querySelector('.lightbox-counter');

    this.elementsList = elementsList;
    this.initBtnsFunction();
    this.update();
  }

  initBtnsFunction() {
    this.prevBtn.addEventListener("click", () => {
      this.#sliderRef.onPrevSlide();
      this.update();
    });

    this.nextBtn.addEventListener("click", () => {
      this.#sliderRef.onNextSlide();
      this.update();
    });
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.updateCounter();
  }

  updateContent() {
    const slideNumber = this.#sliderRef.currentSlide;
    const imgRef = this.elementsList[slideNumber].querySelector("img");

    this.sliderContent.src = imgRef.dataset.source;
    this.sliderContent.alt = imgRef.alt;
  }

  updateButtons() {
    this.prevBtn.disabled = this.#sliderRef.isExistPrev();
    this.nextBtn.disabled = this.#sliderRef.isExistNext();
  }

  updateCounter() {
    this.slidesCount.textContent = `${this.#sliderRef.currentSlide + 1 + '/' + this.elementsList.length}`;    
  }
}

export default LightboxSliderInterface;
