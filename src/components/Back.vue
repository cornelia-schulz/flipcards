<template>
    <div id="back">
        <h2>{{ name }}</h2>
    </div>
</template>

<script>
    export default {
    name: 'Back',
    props: {
        name: String
    },
  }
</script>

<style scoped>
    #back {
        border: 1px solid black;
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 20px;
        height: 400px;
    }
</style>