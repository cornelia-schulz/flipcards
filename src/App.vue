<template>
  <div id="app">
    <Flipcard/>
  </div>
</template>

<script>
import Flipcard from './components/Flipcard.vue'

export default {
  name: 'app',
  components: {
    Flipcard
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
