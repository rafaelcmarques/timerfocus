import Timer from "./timer.js"
import Events from "./events.js"
import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay,
} from "./elements.js"

function resetButtons() {
  btnStop.classList.add("hide")
  btnPlay.classList.remove("hide")
  btnPause.classList.add("hide")
  btnSet.classList.remove("hide")
}

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons,
})

Events({ timer, resetButtons })
