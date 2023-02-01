<script>
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ea258607a0msh381abbb0c9ee007p1e1887jsn7e6523e1c211',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};

const weatherPromise = fetch('https://weatherapi-com.p.rapidapi.com/current.json?q=Tuxtla%20Gutierrez', options)
	.then(response => response.json())
	.then(response => {
        console.log(response);
        return response
        /* const {location, current} = response
        const {country, localtime, name} = location
        const {condition, humidity, feelslike_c, is_day, temp_c, wind_kph, wind_dir} = current
        const {code,text} = condition
        return {
            conditionCode: code,
            conditionText: text,
            country,
            localtime,
            name,humidity,
            isDay: is_day,
            feelsLike: feelslike_c,
            temperature: temp_c,
            windSpeed: wind_kph,
            windDir: wind_dir
        }; */
    })
	.catch(err => console.error(err));
</script>

{#await weatherPromise then weather}
<h1>{weather.location.name}</h1>
{/await}

<h1>Lo que se está renderizando</h1>

<style>
    h1{
        font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
</style>