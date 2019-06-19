<template>
  <div id="app">
    <SpriteSheet path="Animal"/>
    <SpriteSheet path="CircleToSquare"/>
  </div>
</template>

<script>
import SpriteSheet from './components/SpriteSheet.vue'

export default {
  name: 'app',
  components: {
    SpriteSheet
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
