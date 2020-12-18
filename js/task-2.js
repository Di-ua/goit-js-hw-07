/*****Напиши скрипт, который для каждого элемента массива ingredients создаст отдельный li, после чего вставит все li за одну операцию в список ul.ingredients. Для создания DOM-узлов используй document.createElement(). */

const ingredients = [
  "Картошка",
  "Грибы",
  "Чеснок",
  "Помидоры",
  "Зелень",
  "Приправы",
];
const createIngredientstList = (element, array) => {
  let itemArray = [];
  console.log("element", element);
  console.log("array", array);

  array.forEach((element) => {
    const listItemRef = document.createElement("li");
    listItemRef.textContent = element;
    console.log(listItemRef);
  });
  element.append(...itemArray);
};
createIngredientstList(document.querySelector("#ingredients"), ingredients);
