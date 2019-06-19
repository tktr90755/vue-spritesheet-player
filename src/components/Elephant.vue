<template>
  <div id="container">
    <div id="elephant">
    </div>
  </div>
</template>

<script>
import SpriteSheetPlayer from '@/assets/js/libs/tk90755/media/SpriteSheetPlayer.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import {TweenMax} from "gsap";

export default {
  name: 'Elephant',
  props: {
    path: String
  },
  mounted(){
    let container = document.getElementById('container');
    let elephant = document.getElementById('elephant');
    
    let player = new SpriteSheetPlayer();
    player.dispatcher.addEventListener(Event.INIT, ()=>{
      console.log("Event.INIT")

      elephant.style.backgroundImage = 'url("/' + this.path + '.png")';
      elephant.style.backgroundRepeat = 'no-repeat';

      var image = new Image();
      image.src = player.image;//使っているスプライトシートはこれ
      image.id = 'my-image';
      this.$el.append(image);
      
      
      player.play();
      // player.percent = 0;
      // TweenMax.to(player,1.0,{ease:Expo.easeOut,percent:1});
    });
    player.dispatcher.addEventListener(Event.START, ()=>{
      console.log("Event.START")
    });
    player.dispatcher.addEventListener(Event.RENDER, ()=>{
      let x = player.x;
      let y = player.y;
      let w = player.width;
      let h = player.height;
      let paddingTop = player.spriteSourceSizeY;
      let marginLeft = player.spriteSourceSizeX;

      elephant.style.width = w + "px";
      elephant.style.height = h + "px";
      elephant.style.backgroundPosition = -x + 'px ' + -y + 'px';
      container.style.paddingTop = paddingTop + 'px'; 
      elephant.style.marginLeft = marginLeft + 'px';

      console.log("Event.RENDER: x:" + x + " y:" + y + " w:" + w + " h:" + h )
    });
    player.dispatcher.addEventListener(Event.COMPLETE, ()=>{
      console.log("Event.COMPLETE")
      player.play()
    });
    player.load(this.path + '.json', this.path + '.png', false)//第二引数をtrueにすると自動的にplay()する
  }
}
</script>
<style scoped>
</style>
