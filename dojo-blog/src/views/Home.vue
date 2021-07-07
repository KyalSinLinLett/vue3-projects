<template>
  <div class="home">
    <h1>Home</h1>

    <input type="text" v-model="searchTerm">
    <p>input - {{ searchTerm }}</p>
    <div v-for="name in matchingTerms" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, reactive, computed } from '@vue/reactivity'

export default {
  name: 'Home',
  components: {},
  setup() {
    console.log('setup')

    // creating template reference
    // const p = ref(null)

    // creating reactive data with refs
    // const name = ref("Mario")
    // const age = ref(30)

    // const name2 = reactive({ name: "luigi", age: 32})

    // const handleClick = () => {
    //   name.value = "luigi"
    //   name2.name = "potatoe"
    // }

    // computed values
    const searchTerm = ref('')
    const names = ref(['mario', 'luigi', 'yoshi', 'john', 'sammy', 'coochy'])

    const matchingTerms = computed(() => {
      return names.value.filter((name) => {
        name.includes(searchTerm.value)
      })
    })

    console.log(matchingTerms.value)
    console.log(searchTerm.value)

    return { searchTerm, names, matchingTerms }
  }
}
</script>
