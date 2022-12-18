<template>
    <div class="weather-template">
        <div class="weather-image">
            <img :src="require('../../assets/svgs/'+svg+'.png')" alt="">
        </div>
        <div class="weather-degree">
            <span>{{celcius}}</span> &deg; c
        </div>
        <div class="weather-description">
            {{description}}
        </div>
        <div class="state">
            {{cityName}}
        </div>
    </div>
</template>

<script>

export default {
    name: 'WeatherTemplate',
    data () {
        return {
            svg: 'cloudy'
        }
    },
    created() {
        this.getRandomNo();
        this.getWeather();
    },
    computed: {
        currentData() {
            return this.$store.getters.currentData;
        },
        celcius() {
            return (this.currentData.main.temp - 273).toFixed(2);
        },
        cityName() {
            return this.currentData.city_name;
        },
        description() {
            return this.currentData.weather[0].description;
        },
        currentRandomNo() {
            return Math.floor(this.$store.getters.currentRandomNo);
        },
        weatherSatus() {
            return this.currentData.weather[0].main;
        }
    },
    methods: {
        getWeather() {
            this.$store.dispatch('getWeather', this.currentRandomNo);

            if ( this.weatherSatus == 'Rain' ) {
                this.svg = 'rainy';
            } 
            if ( this.weatherSatus == 'Clouds' ) {
                this.svg == 'cloudy';
            } else {
                this.svg = 'sunny';
            }
        },
        getRandomNo() {
            return this.$store.dispatch('getRandomNo', [0, 48]);
        }
    }
}
</script>

<style scoped>

.weather-template {
    width: 100%;
    height: fit-content;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1em;
    padding-bottom: 3em;
    background-color: rgba(211, 211, 211, 0.623);
}

.weather-image {
    width: 150px;
    height: 150px;
    margin: auto;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
}

.weather-degree {
    font-weight: bold;
    font-size: 1.7rem;
}

.weather-degree span {
    font-size: 2.7rem;
    font-weight: 600;
}

.weather-description, .state {
    font-weight: 600;
}

.state {
    align-self: start;
}

</style>