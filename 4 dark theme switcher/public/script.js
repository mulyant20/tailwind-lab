const btnSwitch = document.querySelector(".btnSwitch")
const iconSwitch = document.querySelector(".iconSwitch")

const userTheme = localStorage.getItem("theme")
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches

const iconToggle = () => {
    iconSwitch.classList.toggle("text-yellow-400")
}

// theme check
const themeCheck = () => {
    if(userTheme == "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark")
        iconSwitch.classList.add("text-yellow-400")
        return
    }
    iconSwitch.classList.remove("text-yellow-400")
}

themeCheck()