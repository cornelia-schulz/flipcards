<template>
    <div id="back">
        <h1>{{ name }}</h1>
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
        border: 1px solid #2c3e50;
        border-radius: 10px;
        width: 90%;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 20px;
        height: 400px;
    }

    h1 {
        margin-top: 25%;
    }

    @media (min-width: 600px) {
        #back {
            width: 600px;
        }
    }
</style>