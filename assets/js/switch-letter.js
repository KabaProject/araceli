const phrase = document.querySelector('#switch-letters');

const phrases = [
    "Alegre",
    "Increible",
    "Confiable",
    "Latosa",
    "Peleonera",
    "Mi amiga",
    "Araceli"
];

let counter = 0;

function switchLetters(element, list, index){
    element.innerHTML = list[index];
}

const intervalSwitch = setInterval(()=>{
    switchLetters(phrase, phrases, counter);
    counter++;

    if (counter >= phrases.length){
        clearInterval(intervalSwitch);
        counter = 0;
    }
}, 1000);

phrase.addEventListener('click', ()=>{
    const intervalSwitch = setInterval(()=>{
        switchLetters(phrase, phrases, counter);
        counter++;
    
        if (counter >= phrases.length){
            clearInterval(intervalSwitch);
            counter = 0;
        }
    }, 1500);
});