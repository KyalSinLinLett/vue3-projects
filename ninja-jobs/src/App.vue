<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs'}">Jobs</router-link>
  </div>

  <button @click="redirect">Redirect</button>
  <button @click="goForward">Go Forward</button>
  <button @click="goBack">Go Back</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home'})
    },

    goForward() {
      this.$router.go(1)
    },

    goBack() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;
}

#nav a.router-link-exact-active {
  color: white;
  background: crimson;
}
</style>
