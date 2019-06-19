<template>
  <div id="app">
    <Elephant path="Animal"/>
  </div>
</template>

<script>
import Elephant from './components/Elephant.vue'

export default {
  name: 'app',
  components: {
    Elephant
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
