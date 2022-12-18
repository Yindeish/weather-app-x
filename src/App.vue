<template>
    <div class="container">
        <the-header></the-header>
        <weather-template></weather-template>
    </div>
</template>

<script>
import TheHeader from './components/Layout/TheHeader';
import weatherTemplate from './components/Templates/weather-template';

export default {
    components: {
        TheHeader,
        weatherTemplate
    }
}
</script>

<style scoped>

    .container {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: .4em;
        overflow: hidden;
    }

</style>