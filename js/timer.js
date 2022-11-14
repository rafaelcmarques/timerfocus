export default function Timer({
  minutesDisplay,
  secondsDisplay,
  resetButtons,
}) {
  let timerTimeOut
  let minutes = Number(minutesDisplay.textContent)
  let newMinutes = minutes
  let newSeconds = 0

  function countdown() {
    newMinutes = Number(minutesDisplay.textContent)
    newSeconds = Number(secondsDisplay.textContent)

    timerTimeOut = setTimeout(() => {
      if (newMinutes <= 0 && newSeconds <= 0) {
        updateDisplay()
        resetTimer()
        return
      }
      if (newSeconds <= 0 && newMinutes > 0) {
        newSeconds = 10
        newMinutes--
      }
      newSeconds--
      updateDisplay(newMinutes, newSeconds)
      countdown()
    }, 1000)
  }

  function stopTimer() {
    clearTimeout(timerTimeOut)
  }

  function resetTimer() {
    stopTimer()
    resetButtons()
    updateDisplay(minutes)
  }

  function updateDisplay(minutes, seconds) {
    minutes = minutes === (undefined || null) ? 0 : minutes
    seconds = seconds === undefined ? 0 : seconds
    minutesDisplay.textContent = String(minutes).padStart("2", 0)
    secondsDisplay.textContent = String(seconds).padStart("2", 0)
  }

  function updateMinutes(newMinutes) {
    return (minutes = Number(newMinutes))
  }

  function addTime() {
    newMinutes = Number(newMinutes + 5)
    updateDisplay(newMinutes, newSeconds)
  }

  function removeTime() {
    if (newMinutes < 5) {
      newMinutes = 0
      updateDisplay(newMinutes, newSeconds)
    } else {
      newMinutes = newMinutes - 5
      updateDisplay(newMinutes, newSeconds)
    }
  }

  return {
    countdown,
    stopTimer,
    resetTimer,
    updateDisplay,
    updateMinutes,
    addTime,
    removeTime,
  }
}
