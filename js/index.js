const btnPlay = document.querySelector(".btnPlay")
const btnPause = document.querySelector(".btnPause")
const btnSet = document.querySelector(".btnSet")
const btnStop = document.querySelector(".btnStop")
let minutesDisplay = document.querySelector(".minutes")
let secondsDisplay = document.querySelector(".seconds")

let timerTimeOut

function updateDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(minutes).padStart("2", 0)
  secondsDisplay.textContent = String(seconds).padStart("2", 0)
}

function countdown() {
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  timerTimeOut = setTimeout(() => {
    if (seconds <= 0) {
      seconds = 10
      minutes--
    }
    seconds--
    updateDisplay(minutes, seconds)
    if (minutes <= 0 && seconds <= 0) {
      resetTimer()
      return
    }
    countdown()
  }, 1000)
}

function stopTimer() {
  clearTimeout(timerTimeOut)
}

function resetTimer() {
  stopTimer()
  //updateDisplay(minutes, seconds)
}

btnPlay.addEventListener("click", () => {
  btnPlay.classList.add("hide")
  btnPause.classList.remove("hide")
  countdown()
})

btnPause.addEventListener("click", () => {
  btnPause.classList.add("hide")
  btnPlay.classList.remove("hide")
  stopTimer()
})

btnSet.addEventListener("click", () => {
  let newMinutes
  btnSet.classList.add("hide")
  btnStop.classList.remove("hide")
  newMinutes = prompt("Digite os minutos:")
  updateDisplay(newMinutes, 0)
})

btnStop.addEventListener("click", () => {
  btnStop.classList.add("hide")
  btnPlay.classList.remove("hide")
  btnPause.classList.add("hide")
  btnSet.classList.remove("hide")
})
