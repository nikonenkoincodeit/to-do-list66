import {saveKey,arrayCheck} from "./api";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.css";
const submitL = document.querySelector('.form')
function onSubmit (evt){
    evt.preventDefault();
console.dir(evt.target.elements.message.value)
const valueI = evt.target.elements.message.value.trim();
if(!valueI ){
    return
}
const obj = objFabric(valueI);
saveKey(obj);
console.log(1,2,3)
evt.target.reset()
}
function objFabric(value){
    return {value,cheked:false,id:Date.now(),}
}
// console.log(arrayCheck());
submitL.addEventListener('submit', onSubmit )






