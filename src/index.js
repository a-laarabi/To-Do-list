import './style.css';

const form = document.querySelector('.form');
const list = document.querySelector('.mainList');
const holder = document.querySelector('.add');

const arr = [];
let toDoId = 0;

function addToList(iteams) {
  const item = document.createElement('div');
  item.classList.add('item');
  item.classList.add(toDoId);
  item.innerHTML += `
    <input type="checkbox" name="" id="${toDoId}">
    <p class="itemP">${holder.value}</p>
    <i class="material-icons">&#xe5d4;</i>
  `
  list.appendChild(item);
}

function createIteam(text) {
  const iteams = {
    description: text,
    completed: false,
    index: toDoId += 1,
  }
  arr.push(iteams);
  addToList(iteams);
  console.log(iteams);
  holder.value = '';
}

  form.addEventListener('submit', (e) => {
  e.preventDefault();
  createIteam(holder.value);
});
