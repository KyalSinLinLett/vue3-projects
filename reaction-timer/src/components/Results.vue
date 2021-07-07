<template>
  <div class="result">
      <p>Your reaction time is {{ score }} ms</p>
      <p>Rank: <strong>{{ rank }}</strong></p>
  </div>
</template>

<script>
export default {
    name: 'Result',
    props: ["score"],
    data() {
        return {
            rank: null
        }
    },
    mounted() {
        if (this.score < 100) {
            this.rank = "Ninja"
        } else if (this.score < 200) {
            this.rank = "Novice"
        } else if (this.score < 300) {
            this.rank = "Turtle"
        } else if (this.score < 400) {
            this.rank = "Snail"
        } else if (this.score < 500) {
            this.rank = "Grandma"
        } else if (this.score < 600) {
            this.rank = "Are you asleep?"
        } else {
            this.rank = "Are you dead?"
        }
    }
}
</script>

<style>

</style>