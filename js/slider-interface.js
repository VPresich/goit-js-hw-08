import Slider from "./slider.js";

class SliderInterface {
  static touchThreshold = 75;
  constructor(indexList, elementsList, sliderContent) {
    this.sliderRef = new Slider(indexList, 1, elementsList.length);
    console.log(this.sliderRef);
    this.touchStartX = 0;
    this.prevBtn = document.getElementById("prevBtn");
    this.nextBtn = document.getElementById("nextBtn");
    this.sliderDots = document.querySelector(".slider-dots");
    this.slidesCounter = document.querySelector(".slider-counter");

    this.elementsList = elementsList;
    this.sliderContent = sliderContent;

    this.initBtnsFunction();
    this.initTouchFunction();
    this.createDots();
    this.update();
  }

  initBtnsFunction() {
    this.prevBtn.addEventListener("click", () => {
      this.sliderRef.onPrevSlide();
      this.update();
    });

    this.nextBtn.addEventListener("click", () => {
      this.sliderRef.onNextSlide();
      this.update();
    });
  }

  initTouchFunction() {
    this.touchStartX = 0;
    this.sliderContent.addEventListener("touchstart", (event) => {
      this.touchStartX = event.touches[0].clientX;
    });

    this.sliderContent.addEventListener("touchmove", (event) => {
      const currentX = event.touches[0].clientX;
      const deltaX = this.touchStartX - currentX;

      if (deltaX > SliderInterface.touchThreshold) {
        this.sliderRef.onNextSlide();
        this.touchStartX = currentX;
        this.update();
      } else {
        if (deltaX < -SliderInterface.touchThreshold) {
          this.sliderRef.onPrevSlide();
          this.touchStartX = currentX;
          this.update();
        }
      }
    });
  }

  createDots() {
    this.sliderDots.innerHTML = "";
    for (let ind = 0; ind < this.elementsList.length; ind += 1) {
      const dot = document.createElement("div");
      dot.className = "slider-dot";
      dot.dataset.index = ind;
      this.sliderDots.appendChild(dot);
    }

    this.sliderDots.addEventListener("click", (event) => {
      const dot = event.target;
      if (dot.classList.contains("slider-dot")) {
        const index = parseInt(dot.dataset.index, 10);
        console.log(index);
        this.sliderRef.goToSlide(index);
        this.update();
      }
    });
  }

  update() {
    this.updateContent();
    this.updateButtons();
    this.updateDisplayDots();
    this.updateCounter();
  }

  updateContent() {
    const slideNumber = this.sliderRef.currentSlide;
    const imgRef = this.elementsList[slideNumber].querySelector("img");

    this.sliderContent.src = imgRef.dataset.source;
    this.sliderContent.alt = imgRef.alt;
  }

  updateButtons() {
    this.prevBtn.disabled = this.sliderRef.isExistPrev();
    this.nextBtn.disabled = this.sliderRef.isExistNext();
  }

  updateDisplayDots() {
    const children = this.sliderDots.children;
    for (let i = 0; i < children.length; i += 1) {
      if (i === this.sliderRef.currentSlide) {
        children[i].classList.add("active-dot");
      } else {
        children[i].classList.remove("active-dot");
      }
    }
  }

  updateCounter(){
    this.slidesCounter.textContent = `${this.sliderRef.currentSlide + 1 + '/' + this.elementsList.length}`;   
    console.log(this.slidesCounter.textContent); 
  }  
}

export default SliderInterface;
