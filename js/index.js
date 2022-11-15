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
  main,
  btnLightMode,
  btnDarkMode,
} from "./elements.js"
import Theme from "./theme.js"

function resetButtons() {
  btnStop.classList.add("hide")
  btnPlay.classList.remove("hide")
  btnPause.classList.add("hide")
  btnSet.classList.remove("hide")
}

const sound = Sounds({
  allSoundButtons,
})

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons,
  resetSounds: sound.resetSoundButtons,
})

const theme = Theme({ main, btnLightMode, btnDarkMode })

Events({ timer, resetButtons, sound, theme })
