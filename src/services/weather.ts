    /// Configuración de la petición
    const FETCH_OPTIONS = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea258607a0msh381abbb0c9ee007p1e1887jsn7e6523e1c211',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };
    const test = {
        method: 'GET',
    };

    /// Export de la data
    export async function getWeatherFrom (query='Tuxtla%20Gutierrez') {
        // Realizamos la peticion
       await  fetch(`/api/weather?p=test`, test)
    const response = await fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${query}`, FETCH_OPTIONS)
    const data = await response.json()
        const {location, current} = data
        const {country, localtime, name} = location
        const {condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current
        const {code,text} = condition
        console.log(data
        );
        return {
            conditionCode: code,
            conditionText: text,
            country,
            localtime,
            locationName: name,
            humidity,
            isDay: is_day,
            feelsLike: feelslike_c,
            temperature: temp_c,
            windSpeed: wind_kph,
            windDir: wind_dir
        };
    }