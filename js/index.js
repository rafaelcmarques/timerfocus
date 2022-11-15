import Timer from "./timer.js"
import Events from "./events.js"
import Sounds from "./sounds.js"
import {
  btnPlay,
  btnPause,
  btnSet,
  btnStop,
  minutesDisplay,
  secondsDisplay,
  allSoundButtons,
} from "./elements.js"

function resetButtons() {
  btnStop.classList.add("hide")
  btnPlay.classList.remove("hide")
  btnPause.classList.add("hide")
  btnSet.classList.remove("hide")
}

const sound = Sounds(allSoundButtons)

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons,
  resetSounds: sound.resetSoundButtons,
})

Events({ timer, resetButtons, sound })
