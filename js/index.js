const label1_checkbox = document.querySelector(".icono-dark")
const label2_checkbox = document.querySelector(".icono")

label1_checkbox.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    label1_checkbox.classList.add("d-none")
    label2_checkbox.classList.remove("d-none")

    // Guardamos el modo en localstorage.
    if (document.body.classList.contains("dark")) {
        localStorage.setItem("dark-mode", "true");
    } else {
        localStorage.setItem("dark-mode", "false");
    }

})

label2_checkbox.addEventListener("click", () => {
    document.body.classList.toggle("dark")
    label2_checkbox.classList.add("d-none")
    label1_checkbox.classList.remove("d-none")
})

// Obtenemos el modo actual.
if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark")
    label1_checkbox.classList.add("d-none")
    label2_checkbox.classList.remove("d-none")

} else {
    document.body.classList.remove("dark")
    label2_checkbox.classList.add("d-none")
    label1_checkbox.classList.remove("d-none")
}