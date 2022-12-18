<template>
    <header>
       <h1>weather</h1>
    </header>
</template>

<script>
export default {
    name: 'TheHeader',
    methods: {
        
    }
}
</script>

<style scoped>

    header {
        width: 100%;
        height: 20%;
        border-bottom: 1px solid var(--vue-primary);
        box-shadow: 1px 1px 3px var(--vue-primary);
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    h1 {
        color: var(--vue-primary);
        text-align: center;
        text-transform: uppercase;
        font-weight: 500;
        width: 100%;
        height: 100%;
        margin: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: white;
    }
</style>