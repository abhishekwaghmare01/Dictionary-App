const form = document.querySelector('form');
const resultDev = document.querySelector('.result');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word)=>{
    const responce = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await responce.json();
    console.log(data);
    //alert("word :" + word);
    
}