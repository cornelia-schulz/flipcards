<template>
    <div id="front">
        <img :src="img" :alt="nickname">
        <div>
            <h2>Nickname: {{ nickname }}</h2>
            <p>More info: <a href=":url" target="_blank">{{ url }}</a></p>
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

<style>
    #front {
        width: 90%;
        border: 1px solid #2c3e50;
        border-radius: 10px;
        margin: 0 auto;
        padding: 20px;
        margin-bottom: 20px;
        height: 400px;
        word-wrap: break-word;
    }

    img {
            border: 1px solid white;
        }

        a, a:visited {
            color: #2c3e50;
        }

    @media (min-width: 600px) {
        #front {
            width: 600px;
        }
    }

</style>