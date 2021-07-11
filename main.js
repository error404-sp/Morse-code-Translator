const textInput = document.querySelector('#textinput');
const translateBtn = document.querySelector('#translate-btn');
const output = document.querySelector('.output');
const loader = document.querySelector("#loading");

let api = "https://api.funtranslations.com/translate/morse.json";

function displayLoader(){
    loader.classList.add("display");
    // to stop loading after some time
    setTimeout(() => {
        loader.classList.remove("display");
    }, 5000);
}
function constructUrl(text){
   return `${api}?text=${text}`;
}
function hideLoading() {
    loader.classList.remove("display");
}

translateBtn.addEventListener('click', clickHandler);

function clickHandler(){
    displayLoader();
    let inputText = textInput.value;
    fetch(constructUrl(inputText))
    .then(response => response.json())
    .then(
        json => {hideLoading()
            output.innerHTML = json.contents.translated;})

}