
const inputLongitud = document.getElementById("inputLongitud")
const botonGenerar = document.getElementById("botonGenerar")
const divPass = document.getElementById("divPass")

// EN CASO QUE SE CAMBIEN LOS MÍNIMOS Y MÁXIMOS DEL INPUT NO AFECTA AL CÓDIGO
const minLongitud = parseInt(inputLongitud.min)
const maxLongitud = parseInt(inputLongitud.max)

console.log(minLongitud);
console.log(maxLongitud);



// DEFINO LOS ARRAYS DE CADA TIPO USANDO SPLIT()
const mayusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("")
const minusculas = "abcdefghijklmnopqrstuvwxyz".split("")
const numeros = "0123456789".split("")
const simbolos = "!@#$%^&*()-_=+".split("")

// UNO TODOS LOS ARRAYS EN UNO SOLO PARA SACAR EL ALEATORIO POSTERIORMENTE
const allCaracteres = [...mayusculas, ...minusculas, ...numeros, ...simbolos]


// ESCUCHO CUANDO SE HAGA EL CLICK EN EL BOTÓN
botonGenerar.addEventListener("click", () => {

    divPass.innerText = ""

    const longitudContraseña = parseInt(inputLongitud.value)

    //SI EL INPUT ESTÁ DENTRO DEL RANGO PERMITIDO, LLAMO A LA FUNCIÓN    
    if (longitudContraseña >= minLongitud && longitudContraseña <= maxLongitud) {
        generarContraseña(longitudContraseña)
    }

    // SI EL RANGO NO ESTÁ DENTRO DE LO PERMITIDO, SACO MENSAJE EN EL DIV
    else {
        divPass.innerText = `Introduce un valor correcto entre ${minLongitud} y ${maxLongitud} para generar la contraseña`
    }
    
})


// FUNCIÓN PARA GENERAR LA CONTRASEÑA COMO TAL
function generarContraseña(longitud) {
    
    // DEFINO LA VARIABLE QUE USARÉ PARA ACUMULAR LA CONTRASEÑA 
    let contraseñaFinal = ""


    // LOS 4 PRIMEROS DÍGITOS SON OBLIGATORIAMENTE UNO DE CADA ARRAY
    const aleatMayuscula = mayusculas[Math.floor(Math.random() * mayusculas.length)]
    contraseñaFinal += aleatMayuscula

    const aleatMiniscula = minusculas[Math.floor(Math.random() * minusculas.length)]
    contraseñaFinal += aleatMiniscula

    const aleatNumero = numeros[Math.floor(Math.random() * numeros.length)]
    contraseñaFinal += aleatNumero

    const aleatSimbolo = simbolos[Math.floor(Math.random() * simbolos.length)]
    contraseñaFinal += aleatSimbolo
    

    // LOS SIGUIENTES DÍGITOS HASTA COMPLETAR LA LONGITUD INTRODUCIDA EN EL INPUT VIENEN DEL ARRAY COMPUESTO
    for (let i = (contraseñaFinal.length + 1); i <= longitud; i++) {

        const aleatVarios = allCaracteres[Math.floor(Math.random() * allCaracteres.length)]
        contraseñaFinal += aleatVarios
        
    }
    
    // PINTO LA CONTRASEÑA EN EL DIV
    divPass.innerText = `La contraseña generada es: ${contraseñaFinal}`
    
}