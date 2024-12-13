/* 

API KEY: d70d493a6c7c490a85480648241112

EJEMPLO LLAMADA: https://api.weatherapi.com/v1/current.json?key=d70d493a6c7c490a85480648241112&q=madrid&aqi=no

LOCALIZACIÓN: getCurrentPosition()

*/

const divLocation = document.getElementById("divLocacion")
const divTiempo = document.getElementById("divTiempo")
const divForecast = document.getElementById("divForecast")
const ulForecast = document.getElementById("ulForecast")
const apiKey = "d70d493a6c7c490a85480648241112"

// FUNCIÓN DE GEOLOCALIZACIÓN

const getLocation = () => {
    
    navigator.geolocation.getCurrentPosition(
    
    (position) => {
    
    const latitud = position.coords.latitude
    const longitud =  position.coords.longitude

    getWeather(latitud, longitud)
    
    
    },

    (error) => {

    getWeather("madrid")

    }
    )
}

// LLAMADA API A WEATHER CON ASYN/AWAIT

const getWeather = async (latCiudad, longCiudad) => {

    try {
        const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${latCiudad},${longCiudad}&aqi=no`)
        if (!response.ok) {
            throw new Error("Ha existido un error al recuperar los datos del fetch")
        }
        const data = await response.json()
        
        mostrarWeather(data);

    }
    catch(error) {
        console.log("Ha ocurrido un error", error)
    }
}


// MOSTRAR LOS DATOS EN DOM

function mostrarWeather(data) {

    mostrarDatos(data)
    mostrarDetalles(data)
    mostrarForecast(data)

}


// LLAMADAS A LAS FUNCIONES

getLocation()

const mostrarDatos = (data) => {

    divLocation.innerHTML = 
        `
        <h2>${data.location.name} - ${data.location.country} / ${data.location.region}</h2>
        <p>${data.current.condition.text}</p>
        `

}

const mostrarDetalles = (data) => {

    divTiempo.innerHTML =
    `
    <img class"weather-icon" src="https:${data.current.condition.icon}" alt="${data.current.condition.text}">
    <div class"divTiempoGrados">
        <h1>${data.current.temp_c} ºC</h1>
    </div>
    <div class"divTiempoDatos">
        <p>Precipitaciones: ${data.current.precip_mm}%</p>
        <p>Humedad: ${data.current.humidity}%</p>
        <p>Viento: ${data.current.wind_kph} Km/h</p>
    </div>
    `

}

const mostrarForecast = (data) => {

    const forecastHoras = data.forecast.forecastday[0].hour

    forecastHoras.forEach(hora => {

        const divHora = document.createElement("div")
        divHora.classList.add("divHora")
        const liHora = document.createElement("li")
        liHora.classList.add("liHora")
        const urlHora = `https:${hora.condition.icon}`
        const valorHora = hora.time.slice(11)
        const tempHora = hora.temp_c
        
        divHora.innerHTML =
        `
        <h4>${valorHora}</h4>
        <h4>${tempHora} ºC</h4>
        <img src="${urlHora}" class="weatherHora-icon" alt="${hora.condition.text}">

        `

        liHora.appendChild(divHora)
        ulForecast.appendChild(liHora)
    })

}