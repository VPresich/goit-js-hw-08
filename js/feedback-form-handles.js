import FeedbackFormState from "./feedback-form-state.js";
const feedbackForm = document.querySelector(".feedback-form");
// feedbackForm.addEventListener("submit", onSubmitForm);
// feedbackForm.addEventListener("input", onInput);

const formstate = new FeedbackFormState(feedbackForm);
formstate.restoreData();

// const localStorageKey = "feedback-form-state";

// const txtMessageRef = feedbackForm.elements.message;
// const inputEmailRef = feedbackForm.elements.email;

// const savedData = getDataFromLocalStorage(localStorageKey);
// insertDataToForm(savedData);

// function onSubmitForm(event) {
//   event.preventDefault();

//   localStorage.removeItem(localStorageKey);
//   feedbackForm.reset();
// }

// function onInput(event) {
//   console.log(event.target);
//   console.log(event.currentTarget);

//   const dataToSaved = {
//     email: event.currentTarget.elements.email.value,
//     message: event.currentTarget.elements.message.value,
//   };
//   console.log(dataToSaved);
//   saveDataToStorage(localStorageKey, dataToSaved);
// }

// function getDataFromLocalStorage(key) {
//   const strSavedData = localStorage.getItem(key);
//   console.log("strSavedData", strSavedData);
//   return strSavedData ? JSON.parse(strSavedData) : "";
// }

// function insertDataToForm({ email = "", message = "" } = {}) {
//   console.log("email", email, "message", message);
//   feedbackForm.elements.email.value = email;
//   feedbackForm.elements.message.value = message;
// }

// function saveDataToStorage(key, data) {
//   localStorage.setItem(key, JSON.stringify(data));
// }
