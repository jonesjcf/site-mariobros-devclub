const form = document.querySelector(".formulario-fale-conosco")
const mascara = document.querySelector(".mascara-formulario")

function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function cliqueinamascara() {
    form.style.left = "-10%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "hidden"


}