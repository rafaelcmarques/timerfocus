import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnAddTime,
  btnRemoveTime,
  btnFlorest,
  btnCoffee,
  btnFireplace,
  btnRain,
  themeButton,
  main,
} from "./elements.js"

//Timer controler
export default function Events({ timer, resetButtons, sound }) {
  btnPlay.addEventListener("click", () => {
    btnPlay.classList.add("hide")
    btnPause.classList.remove("hide")
    btnSet.classList.add("hide")
    btnStop.classList.remove("hide")
    timer.countdown()
  })

  btnPause.addEventListener("click", () => {
    btnPause.classList.add("hide")
    btnPlay.classList.remove("hide")
    timer.stopTimer()
  })

  btnSet.addEventListener("click", () => {
    let newMinutes
    newMinutes = prompt("Digite os minutos:")
    timer.updateDisplay(newMinutes)
    timer.updateMinutes(newMinutes)

    btnSet.classList.add("hide")
    btnStop.classList.remove("hide")
  })

  btnStop.addEventListener("click", () => {
    resetButtons()
    timer.resetTimer()
  })

  btnAddTime.addEventListener("click", () => {
    timer.addTime()
  })

  btnRemoveTime.addEventListener("click", () => {
    timer.removeTime()
  })

  // Buttons Sounds Controlers

  btnFlorest.addEventListener("click", () => {
    let newSound = sound.florestSound
    sound.isSoundON(btnFlorest, newSound)
  })

  btnRain.addEventListener("click", () => {
    let newSound = sound.rainSound
    sound.isSoundON(btnRain, newSound)
  })

  btnCoffee.addEventListener("click", () => {
    let newSound = sound.coffeeSound
    sound.isSoundON(btnCoffee, newSound)
  })

  btnFireplace.addEventListener("click", () => {
    let newSound = sound.fireplaceSound
    sound.isSoundON(btnFireplace, newSound)
  })

  themeButton.addEventListener("click", () => {
    if (main.classList.contains("darkMode")) {
      main.classList.remove("darkMode")
    } else {
      main.classList.add("darkMode")
    }
  })
}
