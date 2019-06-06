<template>
  <div id="app">
    <Sample/>
  </div>
</template>

<script>
import Sample from './components/Sample.vue'

export default {
  name: 'app',
  components: {
    Sample
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
