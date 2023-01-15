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
console.log(1,2,3)
evt.target.reset()
}

submitL.addEventListener('submit', onSubmit )






