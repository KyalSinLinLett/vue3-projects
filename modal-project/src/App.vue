<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">clickme</button>
  <br>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="" @closeModal="toggleModal">
      <!-- named slots -->
      <template v-slot:link>
        <a href="#">Link1</a>
        <a href="#">Link2</a>
      </template>
      <!-- regular slots -->
      <h1>Sign up for a giveaway</h1>
      <p>Get the merch you deserve</p>
    </Modal>
  </teleport>  
  <teleport to=".modals" v-if="showModal2">
    <Modal theme="sale" @closeModal="toggleModal2">
      <!-- named slots -->
      <!-- <template v-slot:link>
        <a href="#">Link1</a>
        <a href="#">Link2</a>
      </template> -->
      <!-- regular slots -->
      <h1>Sign up for our newsletter</h1>
      <p>Know about the latest and greatest!</p>
    </Modal>
  </teleport>
  <br>
  <button @click.alt="toggleModal">Show modal(alt)</button>
  <button @click="toggleModal2">Show modal</button>

</template>

<script>
import Modal from './components/Modal.vue';

export default {
  components: { Modal },
  name: 'App',
  data() {
    return {
      title: "My VUE app",
      showModal: false,
      showModal2: false
    }
  },

  methods: {
    handleClick() {
      console.log(this.$refs.name)
    },

    toggleModal() {
      this.showModal = !this.showModal
    },

    toggleModal2() {
      this.showModal2 = !this.showModal2
    }
  }
}
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
