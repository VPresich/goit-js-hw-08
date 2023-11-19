class FeedbackFormState {
  static localStorageKey = "feedback-form-state";
  #inputs = [];
  #form = {};
  #formData = {};

  constructor(form) {
    if (form) this.#inputs = form.querySelectorAll("input, textarea");
    this.#form = form;

    if (this.#inputs) {
      this.#form.addEventListener("submit", this.onSubmitForm.bind(this));
      this.#form.addEventListener("input", this.onInput.bind(this));
    }
  }

  destroy() {
    if (this.#inputs) {
      this.#form.removeEventListener("submit", this.onSubmitForm.bind(this));
      this.#form.removeEventListener("input", this.onInput.bind(this));
    }
  }

  restoreData() {
    this.#formData = this.#getDataFromLocalStorage();
    this.#insertDataToForm();
  }

  onInput(event) {
    this.#formData = {};
    this.#inputs.forEach((input) => {
      if (input.name) {
        this.#formData[input.name] =
          event.currentTarget.elements[input.name].value.trim();
      }
    });
    this.#saveDataToStorage();
  }

  onSubmitForm(event) {
    event.preventDefault();
    if (!this.#isFormFilled()) {
      alert("Not all fields are filled in");
      return;
    }
    console.log("submit data: ", this.#formData);
    localStorage.removeItem(FeedbackFormState.localStorageKey);
    this.#formData = {};
    event.currentTarget.reset();
  }

  #getDataFromLocalStorage() {
    const strSavedData = localStorage.getItem(
      FeedbackFormState.localStorageKey
    );
    return strSavedData ? JSON.parse(strSavedData) : "";
  }

  #insertDataToForm() {
    const dataKeys = Object.keys(this.#formData);

    dataKeys.forEach((key) => {
      if (this.#form.elements[key]) {
        this.#form.elements[key].value = this.#formData[key];
      }
    });
  }

  #saveDataToStorage() {
    localStorage.setItem(
      FeedbackFormState.localStorageKey,
      JSON.stringify(this.#formData)
    );
  }

  #isFormFilled() {
    let result = true;
    this.#inputs.forEach((input) => {
      result = result && this.#form.elements[input.name].value.trim();
    });
    return result;
  }
}

export default FeedbackFormState;
