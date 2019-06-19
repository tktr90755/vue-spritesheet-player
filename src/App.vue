<template>
  <div id="app">
    <SpriteSheetPlayer name="Animal"/>
    <SpriteSheetPlayer name="CircleToSquare"/>
  </div>
</template>

<script>
import SpriteSheetPlayer from './components/SpriteSheetPlayer.vue'

export default {
  name: 'app',
  components: {
    SpriteSheetPlayer
  }
}
</script>