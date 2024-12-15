const divElementoActivo = document.getElementById("divReloj")
const divMensaje = document.getElementById("divMensaje")


function sacarFecha() {

    const fecha = new Date()
    const dia = String(fecha.getDate()).padStart(2, '0')
    const mes = fecha.getMonth()+1
    const año = fecha.getFullYear()
    const hora = String(fecha.getHours()).padStart(2, '0')
    const minutos = String(fecha.getMinutes()).padStart(2, '0')
    const segundos = String(fecha.getSeconds()).padStart(2, '0')


    const fechaActual = `${dia}/${mes}/${año}`
    const horaActual = `${hora}:${minutos}:${segundos}`

    if (divElementoActivo) {

    divElementoActivo.innerHTML = 
        
        `
        <h1>${fechaActual}</h1>
        <h2>${horaActual}</h2>
        `
    }

    if (divMensaje) {

        if (hora >= 0 && hora < 7) {

            divMensaje.innerHTML =
            `
            <h3>¡Que haces aquí! Anda a descansar!</h3>
            `
        }
        
        else if (hora >= 7 && hora < 12 ) {

            divMensaje.innerHTML =
            `
            <h3>Al que madruga, d.os lo ayuda... eso dicen... pero tu al código!</h3>
            `
        }
        
        else if (hora >= 12 && hora < 14) {

            divMensaje.innerHTML =
            `
            <h3>Si si si, es hora de comer algo bueno!</h3>
            `
        }

        else if (hora >= 14 && hora < 16) {

            divMensaje.innerHTML =
            `
            <h3>¿Qué tal estuvo la comida? Venga, a por café y seguimos!</h3>
            `
        }

        else if (hora >= 16 && hora < 18) {

            divMensaje.innerHTML =
            `
            <h3>Vamos, dale un poco más que seguro que lo consigues!!</h3>
            `
        }

        else if (hora >= 18 && hora < 22) {

            divMensaje.innerHTML =
            `
            <h3>No paras, son buenas horas para ir a comer algo y ya seguir mañana!</h3>
            `
        }

        else if (hora >= 22 && hora <= 23) {

            divMensaje.innerHTML =
            `
            <h3>Una peli y a la cama!</h3>
            `
        }
    
    }
}

setInterval(sacarFecha, 1000)