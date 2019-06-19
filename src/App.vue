<template>
  <div id="app">
    <SpriteSheet name="Animal"/>
    <SpriteSheet name="CircleToSquare"/>
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