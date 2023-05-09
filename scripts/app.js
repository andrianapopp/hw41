//1 //2
const ul = document.getElementById(`ulId`);
const liNames = [];
const liArr = [];
for (const attr of ul.attributes) {
  liNames.push(attr.name);
  liArr.push(attr.value);
}
console.log(liNames);
console.log(liArr);
//3
const changeLast = document.querySelector(`#ulId li:last-child`);
changeLast.textContent = `Привет! Меня зовут Андриана`;
//4
const changeFirst = document.querySelector(`#ulId li:first-child`);
changeFirst.setAttribute(`data-my-name`, `Andriana`);
//5
ul.removeAttribute(`data-dog-tail`);
