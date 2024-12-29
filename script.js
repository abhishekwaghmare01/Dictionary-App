const form = document.querySelector('form');
const resultDev = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
    const responce = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
    const data = await responce.json();

    let definitions = data[0].meanings[0].definitions[0];
    
    resultDev.innerHTML = `
        <h2><strong>Word : </strong>${data[0].word}</h2>
        <p>${data[0].meanings[0].partOfSpeech}</p>
        <p><strong>Meaning : </strong>${definitions.definition === undefined ? "Not Found" : definitions.definition}</p>
        <p><strong>Example : </strong>${definitions.example === undefined ? "Not Found" : definitions.example}</p>
        <p><strong>Antonyms : </strong></p>
    `;

    if(definitions.antonyms.length === 0){
        resultDev.innerHTML += `<span>Not Found</span>`;
    }
    else{
        for(let i = 0; i < definitions.antonyms.length; i++){
            resultDev.innerHTML += `<li>${definitions.antonyms[i]}</li>`;
        }
    }

    
    console.log(data);


}
