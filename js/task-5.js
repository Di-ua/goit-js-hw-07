/*Задание 5
Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>
 */
/************************** */
/***************var1 doesnt work */

// const inputRef = document.querySelector("#name-input");
// // console.log(inputRef);
// const spanRef = document.querySelector("#name-output");
// // console.log(spanRef);

// inputRef.addEventListener("input", (event) => {
//   event.preventDefault();
//   spanRef.textContent = event.target.value;
//   //   spanRef.textContent ? event.target.value : "незнакомец";
// });
/****************var 2 doesn work */
// inputRef.addEventListener("input", editText);
// function editText(event) {
//   outputRef.textContent = event.target.value;
// }
/****************var3 */
const inputRef = document.querySelector("#name-input");
const spanRef = document.querySelector("#name-output");
inputRef.addEventListener("input", editText);
function editText(even) {
  spanRef.textContent = even.target.value;
  if (spanRef.textContent === "") {
    spanRef.textContent = "незнакомец";
  }
}
