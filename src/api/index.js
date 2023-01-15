const MAIN_KEY = "items";
function saveKey (data){
    const mainArray = arrayCheck();
     mainArray.push(data);
 localStorage.setItem(MAIN_KEY,JSON.stringify(mainArray));
 };
 function arrayCheck(){
    try{
    const tempKey = localStorage.getItem(MAIN_KEY);
    return tempKey ? JSON.parse (tempKey): [];
    }
    catch(error){console.log(error.message)}
};
export {saveKey,arrayCheck};