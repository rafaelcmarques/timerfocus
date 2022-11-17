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
  btnVolumeCoffee,
  btnVolumeFireplace,
  btnVolumeFlorest,
  btnVolumeRain,
  btnLightMode,
  btnDarkMode,
} from "./elements.js"

//Timer controler
export default function Events({ timer, resetButtons, sound, theme }) {
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
    newMinutes = Number(prompt("Digite os minutos:"))
    console.log(newMinutes, Number.isNaN(newMinutes), typeof newMinutes)

    if (Number.isNaN(newMinutes)) {
      alert("Apenas números são permitidos. Tente novamente")
    } else {
      timer.updateDisplay(newMinutes)
      timer.updateMinutes(newMinutes)

      btnSet.classList.add("hide")
      btnStop.classList.remove("hide")
    }
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

  // Volume Controller

  btnVolumeRain.addEventListener("change", () => {
    let rainSound = sound.rainSound
    let volume = btnVolumeRain.value

    sound.updateVolume(rainSound, volume)
  })

  btnVolumeFlorest.addEventListener("change", () => {
    let florestSound = sound.florestSound
    let volume = btnVolumeFlorest.value
    sound.updateVolume(florestSound, volume)
  })

  btnVolumeFireplace.addEventListener("change", () => {
    let fireplaceSound = sound.fireplaceSound
    let volume = btnVolumeFireplace.value
    sound.updateVolume(fireplaceSound, volume)
  })

  btnVolumeCoffee.addEventListener("change", () => {
    let coffeeSound = sound.coffeeSound
    let volume = btnVolumeCoffee.value
    sound.updateVolume(coffeeSound, volume)
  })

  // Theme buttons

  btnLightMode.addEventListener("click", () => {
    theme.changeTheme()
  })

  btnDarkMode.addEventListener("click", () => {
    theme.changeTheme()
  })
}
