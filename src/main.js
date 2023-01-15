import { saveKey, arrayCheck, addDataToStorage } from './api';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
const submitL = document.querySelector('.form');
const listRef = document.querySelector('.list');

init();

listRef.addEventListener('click', onButtonClick);

listRef.addEventListener('click', onParagrafClick);



function onSubmit(evt) {
  evt.preventDefault();
  console.dir(evt.target.elements.message.value);
  const valueI = evt.target.elements.message.value.trim();
  if (!valueI) {
    return;
  }
  const obj = objFabric(valueI);
  saveKey(obj);
  console.log(1, 2, 3);
  evt.target.reset();

  const markup = createMarkup([obj]);
  addMarkup(markup);
}
function objFabric(value) {
  return { value, checked: false, id: Date.now() };
}
// console.log(arrayCheck());
submitL.addEventListener('submit', onSubmit);
function init() {
  const arr = arrayCheck();

  if (!arr.length) {
    return;
  }

  const markup = createMarkup(arr);
  console.log(markup);

  addMarkup(markup);
}

function createMarkup(arr = []) {
  return arr
    .map(item => {
      return `<li class="item ${item.checked ? 'checked' : ''}" data-id="${item.id}">
          <p class="text">${item.value}</p>
          <button type="button" class="button">x</button>
        </li>`;
    })
    .join('');
}

function addMarkup(markup) {
  listRef.insertAdjacentHTML('beforeend', markup);
}

function onButtonClick(evt) {
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  }

  // const item = evt.target.closest('.item');

  const {id, item} = returnID(evt);
  console.log(id);

  const data = arrayCheck();
  const filteredArr = data.filter(item => item.id.toString() !== id.toString());

  console.log(filteredArr);
  addDataToStorage(filteredArr);
  item.remove();
}

function returnID(evt){
  const item = evt.target.closest('.item');
  return {id: item.dataset.id, item };

}

function onParagrafClick(evt){
  if (evt.target.nodeName !== 'P') {
    return;
  }
  
  const {id, item} = returnID(evt);
  const data = arrayCheck();
  for (const obj of data) {
    if(obj.id.toString() === id.toString()){
      obj.checked = !obj.checked
    }
  }
  addDataToStorage(data);
console.log(data);
item.classList.toggle('checked')

}