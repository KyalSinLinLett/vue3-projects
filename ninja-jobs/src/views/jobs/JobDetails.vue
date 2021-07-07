<template>
  <div v-if="job">
        <h2>Job Details</h2>
        <h1>{{ job.title }}</h1>
        <p>Job id is {{ id }}</p>
        <p>{{ job.details }}</p>
  </div>

  <div v-else>
      <h2>Loading job details...</h2>
  </div>
</template>

<script>
export default {
    props: ['id'],
    data() {
        return {
            job: null
        }
    },

    mounted() {
        fetch('http://localhost:3000/jobs/' + this.id)
        .then(res => res.json())
        .then(data => this.job = data)
        .catch(err => console.log(err.message))
    }
}
</script>

<style>

</style>