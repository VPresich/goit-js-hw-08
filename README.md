# goit-js-hw-08

Містить 4 сторінки:

gallery.html - галерея з модальним вікном для перегляду зображення у збільшеному вигляді. Модальне вікно побудовано власноруч (3 класи для слайдера (Slider.js - логіка переміщення по слайдах; SliderInterface.js - обробники подій елементів модального вікна для управління слайдами, ModalSlider - класс для відображення слайда, наслідується від SliderInterface)). Галерея картинок будується динамічно з масива данних.

gallery-lightbox.html - галерея з модальним вікном для перегляду зображення у збільшеному вигляді. Модальне вікно побудовано з використанням бібліотеки BasicLightbox.
Додано обробку події клавіатури (Esc).

gallery-lightbox-button.html - вікно з кнопками навігації по галереї побудовано з використанням бібліотеки BasicLightbox, додані також кнопки для керування відображенням картинок без закриття вікна. Всі обробники подій додані власноруч. Створений клас LightBoxSlider для обробки подій кнопок керуванням слайдерами. Для логіки застосований клас Slider.js.

page-with-form.html - submit form зі збереженням даних з полів ввода форми в локальному сховищі браузера. Створений клас FeedbackFormState (feedback-form-state.js) для збереження данних форми з будь-якою кількістю полів вводу. Екземпляр класу створюється в модулі feedback-form-handles.js.

- вкладка містить галерею та модальне вікно для перегляду картинок у збільшеному вигляді. Вікно створюється із застосуванням бібліотеки SimpleLightbox. Створюється екземпляр класу SimpleLightbox та виконується налагодження опцій. Для кнопок керування слайдами та закриттям вікна додані іконки з макету, також виведено підпис картинки. Всі обробники подій використовуються з бібліотеки.

Для стилізації застосовані стилі з макету.

Проект побудований з використанням node.js та компоновщика vite. Бібліотеки додані пакетним менеджером.
