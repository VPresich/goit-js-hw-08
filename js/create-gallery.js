// Є контейнер, в який можна додати елементи галереї, і дані,
// за якими їх можна створити.

//  HTML містить список ul.gallery.
// <ul class="gallery"></ul>

// Використовуй масив об’єктів images і цей HTML шаблон елемента галереї
// та створи в JavaScript коді розмітку елементів,
// після чого додай усю розмітку всередину ul.gallery.
// Не додавай інші HTML теги, крім тих, що містяться в цьому шаблоні.
// Для створення розмітки використовуй шаблонні рядки
// і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.

// <li class="gallery-item">
//   <a class="gallery-link" href="large-image.jpg">
//     <img
//       class="gallery-image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </li>

// В атрибуті src тега <img> вказуємо посилання на маленьку версію зображення.
// Для атрибута alt використовуємо опис зображення.
// Посилання на велике зображення повинно зберігатися в data - атрибуті
// source на елементі < img >, і вказуватися в href посилання.
// Зверни увагу на те, що зображення огорнуте посиланням,
// отже, по кліку на нього за замовчуванням користувач буде перенаправлений на іншу
// сторінку, куди вказує href. Заборони цю поведінку за замовчуванням.

// Import array of images
import images from "./data/images.js";

// Function declaration for create of markup (string) for all images
// const createGallery = (images) => {
//   return images
//     .map(({ preview, description, original }) => {
//       return `<li class="gallery-item">
//             <a class="gallery-link" href="large-image.jpg">
//               <img class="gallery-img"
//                   src="${preview}"
//                   alt="${description}"
//                   data-source="${original}"
//                />
//             </a>
//           </li>`;
//     })
//     .join("");
// };

// Function declaration for create of markup (string) for 1 item (li) with img
const imageMarkup = ({ preview, description, original }) => {
  return `<li class="gallery-item">
            <a class="gallery-link" href="large-image.jpg">
              <img class="gallery-img"
                  src="${preview}"
                  alt="${description}"
                  data-source="${original}"
               />
            </a>
          </li>`;
};

// Function declaration for create markup of all images
const createGallery = (images) => {
  return images.map(imageMarkup).join("");
};

// Call function
const imagesMarkup = createGallery(images);

// Ref to container for inserting
const galleryRef = document.querySelector(".gallery");

// Insert in DOM
galleryRef.insertAdjacentHTML("beforeend", imagesMarkup);
