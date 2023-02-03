<script>
    export let data = {
        humidity:'',
        windSpeed:'',
        feelsLike: ''
    }
</script>

<footer>
    <div>
        <span>{data.humidity}</span>
        <strong>Humidity</strong>
    </div>
    <div>
        <span>{data.windSpeed}</span>
        <strong>km/h</strong>
    </div>
    <div>
        <span>{data.feelsLike}</span>
        <strong>Feelslike</strong>
    </div>
</footer>

<style>
    footer{
        border: 2px solid #000;
        padding: 12px 32px;
        width: 80%;
        margin: 0 auto;
        border-radius: 10px;
        display: flex;
        text-align: center;
        justify-content: space-around;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 12px;
    }
    span{
        display: block;
    }
    strong{
        color: #444;
        font-weight: 500;
    }
</style>