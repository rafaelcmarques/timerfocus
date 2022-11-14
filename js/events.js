import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  btnAddTime,
  btnRemoveTime,
} from "./elements.js"

export default function Events({ timer, resetButtons }) {
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
}
