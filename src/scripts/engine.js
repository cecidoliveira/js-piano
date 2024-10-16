const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider");
const keysCheck = document.querySelector(".keys-check input");

let audio = new Audio()


const playTune = (key) =>{
    audio.src = `src/tunes/${key}.wav`
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`)
    clickedKey.classList.add("active")
    setTimeout(()=>{
        clickedKey.classList.remove("active");
    },150)
};

document.addEventListener("keypress", (pressKey)=> pianoKeys.forEach((key)=> pressKey.key.toLowerCase() == key.dataset.key && playTune(pressKey.key)));

pianoKeys.forEach((key)=> key.addEventListener("click", ()=> playTune(key.dataset.key)));

volumeSlider.addEventListener("input", (e)=> audio.volume = e.target.value)

keysCheck.addEventListener("click",()=> pianoKeys.forEach((key) => key.classList.toggle("hide")))