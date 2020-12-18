/*********
 * Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса
<div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div>
 */
/*****************************************/
// const counterValue = document.querySelector('#counter');
// / counterValue.addEventListener('click', () => {
//     console.log('Clicked');
//     // console.log(Date.now());
// });
/********************************* */
const btn = {
  add: document.querySelector("[data-action='increment']"),
  rem: document.querySelector("[data-action='decrement']"),
  span: document.querySelector("#value"),
  count: document.querySelector("#counter"),
};
let counterValue = 0;
const increment = () => {
  counterValue += 1;
  document.getElementById("value").textContent = counterValue;
};
const decrement = () => {
  counterValue -= 1;
  document.getElementById("value").textContent = counterValue;
};
btn.add.addEventListener("click", increment);
btn.rem.addEventListener("click", decrement);
btn.count.addEventListener("click", () => {
  console.log("Clicked");
});
