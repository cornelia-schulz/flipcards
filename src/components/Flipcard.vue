<template>
    <div id="flipcard">
        <div  v-for="card in cards" :key="card.name">
            <img src=":card.img" alt=":card.name">
            <div>
                <h2>{{card.nickname}}</h2>
                <p>{{card.url}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Flipcard',
  props: {},
  data() {
      return {
          cards: [
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqkayhT3NbL0s1YQqpLbhFnUSYNDqMMlZ1BPz0pi4H1PInC5r1AQ',
            name: 'Hillary',
            nickname: 'Fluffy',
            url: 'https://en.wikipedia.org/wiki/Hillary_Clinton'
        },
        {
            img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvcY5983wXq-E0sMixhCetS8m0onB5GGpcw1nsowMgCBw5Rw1x',
            name: 'Michelle',
            nickname: 'something',
            url: 'https://becomingmichelleobama.com/'
        }
        ]
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>