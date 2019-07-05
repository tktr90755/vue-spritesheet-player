<template>
  <div id="app">
    <SpriteSheetPlayer jsonPath="./Animal.json" imagePath="./Animal.png"/>
    <SpriteSheetPlayer jsonPath="./CircleToSquare.json" imagePath="./CircleToSquare.png"/>
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