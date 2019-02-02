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
    
    </div>
</template>

<script>
import Front from './Front.vue'
import Back from './Back.vue'
export default {
  name: 'Flipcard',
  props: {},
  data() {
      return {
          front: true,
          card: 0,
          cards: [
        {
            id: 1,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkayhT3NbL0s1YQqpLbhFnUSYNDqMMlZ1BPz0pi4H1PInC5r1AQ',
            name: 'Hillary',
            nickname: 'Hill',
            url: 'https://en.wikipedia.org/wiki/Hillary_Clinton'
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcY5983wXq-E0sMixhCetS8m0onB5GGpcw1nsowMgCBw5Rw1x',
            name: 'Michelle',
            nickname: 'Forever first lady',
            url: 'https://becomingmichelleobama.com/'
        }
        ]
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


</style>