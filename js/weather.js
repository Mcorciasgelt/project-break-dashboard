/* 

API KEY: d70d493a6c7c490a85480648241112

EJEMPLO LLAMADA: https://api.weatherapi.com/v1/current.json?key=d70d493a6c7c490a85480648241112&q=madrid&aqi=no

LOCALIZACIÓN: getCurrentPosition()
{
    "location": {
        "name": "Madrid",
        "region": "Madrid",
        "country": "Spain",
        "lat": 40.4,
        "lon": -3.6833,
        "tz_id": "Europe/Madrid",
        "localtime_epoch": 1733904472,
        "localtime": "2024-12-11 09:07"
    },
    "current": {
        "last_updated_epoch": 1733904000,
        "last_updated": "2024-12-11 09:00",
        "temp_c": 5.3,
        "temp_f": 41.5,
        "is_day": 1,
        "condition": {
            "text": "Partly cloudy",
            "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
            "code": 1003
        },
        "wind_mph": 4.9,
        "wind_kph": 7.9,
        "wind_degree": 37,
        "wind_dir": "NE",
        "pressure_mb": 1017.0,
        "pressure_in": 30.03,
        "precip_mm": 0.0,
        "precip_in": 0.0,
        "humidity": 61,
        "cloud": 75,
        "feelslike_c": 3.5,
        "feelslike_f": 38.3,
        "windchill_c": 1.8,
        "windchill_f": 35.2,
        "heatindex_c": 3.8,
        "heatindex_f": 38.9,
        "dewpoint_c": -2.8,
        "dewpoint_f": 27.0,
        "vis_km": 10.0,
        "vis_miles": 6.0,
        "uv": 0.0,
        "gust_mph": 7.2,
        "gust_kph": 11.6
    }
}

*/

const ciudad = navigator.geolocation.getCurrentPosition()


console.log(ciudad);

