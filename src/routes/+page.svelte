<script>
    import { getWeatherFrom } from "../services/weather";
    import WeatherFooter from "../components/weather-footer.svelte";
	import PreLoader from "../components/preloader.svelte";

    const weatherPromise = getWeatherFrom()
    let test = true

    function deten() {
        test = false
        return ''
    }

</script>
<!-- Con la etiqueta {#await <Promesa> then <respuesta de la promesa>} esperamos a la resolucion de la promesa -->
    <PreLoader loading={test} />
{#await weatherPromise then weather}
{deten()}
<section>
    <h1>{weather.locationName}</h1>
    <h2>{weather.temperature}°</h2>
    <h3>{weather.conditionText}</h3>
    <h4>It´s {weather.isDay == 1 ? 'daytime' : 'nighttime'}</h4>
</section>
<WeatherFooter data={weather} />
{/await}

<style>
    section{
        padding: 16px;
    }
    h1{
        font-weight: 400;
        color: #333;
        text-transform: uppercase;
        padding: 16px 0 0 0;
    }
    h2{
        font-weight: 300;
        font-size: 150px;
        color: #333;
        text-transform: uppercase;
        padding: 0
    }
    h3{
        font-weight: 600;
        transform: rotate(-90deg);
        position: absolute;
        bottom: 60vh;
        right: 0px;
    }
</style>