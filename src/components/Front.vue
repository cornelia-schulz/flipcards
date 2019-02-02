<template>
    <div id="front">
        <img :src="img" :alt="nickname">
        <div>
            <h2>{{ nickname }}</h2>
            <p>{{ url }}</p>
        </div>
    </div>
</template>

<script>
    export default {
    name: 'Front',
    props: {
        img: String,
        nickname: String,
        url: String
    },
  }
</script>

<style scoped>
    #front {
        border: 1px solid black;
        width: 500px;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 20px;
        height: 400px;
    }
</style>