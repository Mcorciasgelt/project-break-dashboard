
const inputTitulo = document.getElementById("inputTitulo")
const inputLink = document.getElementById("inputLink")
const btnAgregar = document.getElementById("btnAgregar")
const sectionEnlaces = document.getElementById("sectionEnlaces")

btnAgregar.addEventListener("click", () => {

    const titulo = inputTitulo.value 
    const link = inputLink.value

    if (!titulo || !link) {
        alert ("Debe completar los campos de título y enlace para continuar")
    }
    
    agregarEnlace(titulo, link)
    guardarLocalStorage(titulo, link)
})

function agregarEnlace(titulo, link) {

    const template =
    `
    <div class="enlaceGuardado">
        <a href="${link}" target="_blank">${titulo}</a>
        <button class="btnEliminar">X</button>
    </div>
    `

    sectionEnlaces.innerHTML += template

    botonesEliminar()
}


function botonesEliminar() {
    const btnEliminarAll = document.querySelectorAll(".btnEliminar")

    btnEliminarAll.forEach((boton, index) => {
        boton.addEventListener("click", () => {
            borrarLink(index)
        })
    })
}


function guardarLocalStorage(titulo, link) {
    const links = JSON.parse(localStorage.getItem("links")) || []
    links.push({titulo, link})
    localStorage.setItem("links", JSON.stringify(links))
}

function borrarLink(index) {

    const links = JSON.parse(localStorage.getItem("links")) ||[]
    links.splice(index, 1)

    localStorage.setItem("links", JSON.stringify(links))
    cargarEnlaces()
}


function cargarEnlaces() {
    sectionEnlaces.innerHTML = ""
    const links = JSON.parse(localStorage.getItem("links")) || []

    links.forEach(({titulo, link}) => {
        agregarEnlace(titulo, link)
    })
}

cargarEnlaces()