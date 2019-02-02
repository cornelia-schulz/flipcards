<template>
    <div id="flipcard">
        <div>
            <Front v-if="front === true" :img="cards[card].img" :nickname="cards[card].nickname" :url="cards[card].url" />
            <Back v-if="front === false" :name="cards[card].name" />
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
            nickname: 'Fluffy',
            url: 'https://en.wikipedia.org/wiki/Hillary_Clinton'
        },
        {
            id: 2,
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcY5983wXq-E0sMixhCetS8m0onB5GGpcw1nsowMgCBw5Rw1x',
            name: 'Michelle',
            nickname: 'Nickname',
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
    button {
        width: 200px;
        height: 3.5em;
        border-radius: 5px;
    }

    .navigation button {
        margin: 20px;
        height: 2em;
    }
</style>