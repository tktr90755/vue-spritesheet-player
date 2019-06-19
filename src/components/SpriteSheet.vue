<template>
  <div v-bind:class="name">
    <div class="cont">
    </div>
  </div>
</template>

<script>
import SpriteSheetPlayer from '@/assets/js/libs/tk90755/media/SpriteSheetPlayer.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import {TweenMax} from "gsap";

export default {
  props: {
    name: String
  },
  mounted(){
    let container = this.$el;
    let elephant = this.$el.children[0];
    
    let player = new SpriteSheetPlayer();
    player.addEventListener(Event.INIT, ()=>{
      console.log("Event.INIT")

      elephant.style.backgroundImage = 'url("/' + this.name + '.png")';
      elephant.style.backgroundRepeat = 'no-repeat';

      var image = new Image();
      image.src = player.image;//使っているスプライトシートはこれ
      image.id = 'my-image';
      this.$el.append(image);
      
      //再生
      player.play();

      //TweenMaxの場合
      // player.percent = 0;
      // TweenMax.to(player,10.0,{ease:Expo.easeOut,percent:1});
    });
    player.addEventListener(Event.START, ()=>{
      console.log("Event.START")
    });
    player.addEventListener(Event.RENDER, ()=>{
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
    player.addEventListener(Event.COMPLETE, ()=>{
      console.log("Event.COMPLETE")
      player.play()
    });
    player.load(this.name + '.json', this.name + '.png', false)//第二引数をtrueにすると自動的にplay()する
  }
}
</script>
<style scoped>
</style>
