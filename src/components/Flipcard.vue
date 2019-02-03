<template>
<div id="flip-card">
    <div id="flipcard">
        <div class="flip">
                <Front class="front" v-show="front === true" :img="cards[card].img" :nickname="cards[card].nickname" :url="cards[card].url" />     
                <Back class="back" v-show="front === false" :name="cards[card].name" />      
        </div>
        </div>
        <button v-on:click="front = !front" class="flip">Flip over</button>
        <div class="navigation">
            <button @click="card--" :disabled="card <= 0">Previous</button>
            <button @click="card++" :disabled="card >= cards.length-1">Next</button>
        </div>
        <div class="menu">
            <button class="menu-btn">Edit card</button>
            <button class="menu-btn">Add new card</button>
            <button class="menu-btn">Delete card</button>
        </div>
    </div>
</template>

<script>
import Front from './Front.vue'
import Back from './Back.vue'
import cards from './data.json'
export default {
  name: 'Flipcard',
  props: {},
  data() {
      return {
          front: true,
          card: 0,
          cards: cards.cards
      }
  },
  methods: {

  },
  components: {
      Front,
      Back
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #flip-card {
        font-family: 'Poppins', sans-serif;
    }

    button {
        width: 200px;
        height: 2em;
        border: 1px solid black;
        color: cornsilk;
        border-radius: 5px;
        background-color: #2c3e50;
        font-size: 1.5em;
        font-family: 'Poppins', sans-serif;
    }

    .navigation button {
        margin: 20px;
        height: 2em;
        background-color: #2c3e50;
        font-size: 1em;
    }

    .navigation button:disabled {
        color: grey;
    }

    .menu-btn {
        background-color: black;
        border: 1px solid #2c3e50;
        height: 2em;
        font-size: 1em;
        margin-right: 5px;
    }
</style>