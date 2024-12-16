
/* const divElementoActivo = document.getElementById("divReloj")

const mostrarFecha = setInterval(sacarFecha, 1000)

function sacarFecha() {
    const fecha = new Date()
    const dia = fecha.getDay()
    const mes = fecha.getMonth()
    const año = fecha.getFullYear()

    const fechaActual = `${dia}/${mes}/${año}`

    console.log(fechaActual)

    divElementoActivo.innerText = fechaActual
} */

function cambiarBackground () {



    const imagenAleat = Math.floor(Math.random()*10) + 1
    const urlBase = "./img/background"
    
    console.log(imagenAleat);
    
    document.body.style.backgroundImage = `url("${urlBase}${imagenAleat}.jpg")`
    document.body.style.backgroundSize = "cover"
    document.body.style.backgroundPosition = "center"
    document.body.style.backgroundRepeat = "no-repeat"

}

cambiarBackground()
setInterval(cambiarBackground,15000)

