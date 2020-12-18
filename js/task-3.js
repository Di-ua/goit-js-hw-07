/*************Задание 3
Напиши скрипт для создания галлереи изображений по массиву данных.

В HTML есть список ul#gallery.

<ul id="gallery"></ul>
Используй массив объектов images для создания тегов img вложенных в li. Для создания разметки используй шаблонные строки и insertAdjacentHTML().

Все элементы галереи должны добавляться в DOM за одну операцию вставки.
Добавь минимальное оформление галереи флексбоксами или гридами через css-классы. */

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];
const imageGallery = images.map((image) => {
  const item = gallery.insertAdjacentHTML(
    "beforeend",
    `<li><img src='${image.url} alt='${image.alt}'>`
  );
  //   item.classList.add("js-items");
  console.log(item);
});
const listRef = document.querySelector("ul").classList.toggle("gallery");
const galleryRef = document.querySelector("#gallery");
// galleryRef.classList.toggle("item-img");
console.log(listRef);
console.log(galleryRef);

/********* Alternative decision ******************
 * const img = document.createElement('img')
 * img.setAttribute('src', image.url);
 * img.setAttribute('alt', image.alt);
 * item.append(img);
 * return item
 */
/***** Как присвоить класс li, чтоб сделать оформление css?  */
