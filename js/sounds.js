export default function Sounds(allSoundButtons) {
  const fireplaceSound = {
    audio: new Audio(".././audios/fireplace.wav"),
    play() {
      fireplaceSound.audio.play()
      coffeeSound.audio.pause()
      florestSound.audio.pause()
      rainSound.audio.pause()
    },
    pause() {
      fireplaceSound.audio.pause()
    },
  }

  const coffeeSound = {
    audio: new Audio(".././audios/coffee.wav"),
    play() {
      fireplaceSound.audio.pause()
      coffeeSound.audio.play()
      florestSound.audio.pause()
      rainSound.audio.pause()
    },
    pause() {
      coffeeSound.audio.pause()
    },
  }

  const florestSound = {
    audio: new Audio(".././audios/florest.wav"),
    play() {
      fireplaceSound.audio.pause()
      coffeeSound.audio.pause()
      florestSound.audio.play()
      rainSound.audio.pause()
    },
    pause() {
      florestSound.audio.pause()
    },
  }

  const rainSound = {
    audio: new Audio(".././audios/rain.wav"),
    play() {
      fireplaceSound.audio.pause()
      coffeeSound.audio.pause()
      florestSound.audio.pause()
      rainSound.audio.play()
    },
    pause() {
      rainSound.audio.pause()
    },
  }

  function resetSoundButtons() {
    for (const button of allSoundButtons) {
      button.classList.remove("soundOn")
    }
    pauseAllSounds()
  }

  function pauseAllSounds() {
    fireplaceSound.audio.pause()
    coffeeSound.audio.pause()
    florestSound.audio.pause()
    rainSound.audio.pause()
  }

  function isSoundON(button, newSound) {
    if (button.classList.contains("soundOn")) {
      button.classList.remove("soundOn")
      newSound.pause()
    } else {
      resetSoundButtons()
      button.classList.add("soundOn")
      newSound.play()
    }
  }

  fireplaceSound.audio.loop = true
  rainSound.audio.loop = true
  florestSound.audio.loop = true
  coffeeSound.audio.loop = true

  return {
    fireplaceSound,
    rainSound,
    coffeeSound,
    florestSound,
    isSoundON,
    resetSoundButtons,
  }
}
