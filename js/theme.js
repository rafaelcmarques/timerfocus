export default function Theme({ main, btnLightMode, btnDarkMode }) {
  function changeTheme() {
    if (main.classList.contains("darkMode")) {
      main.classList.remove("darkMode")
      btnLightMode.classList.toggle("hide")
      btnDarkMode.classList.toggle("hide")
    } else {
      main.classList.add("darkMode")
      btnLightMode.classList.toggle("hide")
      btnDarkMode.classList.toggle("hide")
    }
  }

  return {
    changeTheme,
  }
}
