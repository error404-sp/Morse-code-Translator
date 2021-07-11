const textInput = document.querySelector('#textinput');
const translateBtn = document.querySelector('#translate-btn');
const output = document.querySelector('.output');

let api = "https://api.funtranslations.com/translate/morse.json";

function constructUrl(text){
   return `${api}?text=${text}`;
}

translateBtn.addEventListener('click', clickHandler);

function clickHandler(){
    let inputText = textInput.value;
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(json => {output.innerHTML = json.contents.translated})

}