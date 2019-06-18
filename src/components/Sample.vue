<template>
  <div id="elephant0">
    <div id="elephant1">
    </div>
  </div>
</template>

<script>
import SpriteSheetPlayer from '@/assets/js/libs/tk90755/media/SpriteSheetPlayer.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
export default {
  name: 'Sample',
  created(){

  },
  mounted(){
    let myImage0 = document.getElementById('elephant0');
    let myImage1 = document.getElementById('elephant1');
    
    let spriteSheetPlayer = new SpriteSheetPlayer();
    spriteSheetPlayer.dispatcher.addEventListener(Event.INIT, ()=>{
      console.log("Event.INIT")

      myImage1.style.backgroundImage = 'url("/Animal.png")';
      myImage1.style.backgroundRepeat = 'no-repeat';

      var image = new Image();
      image.src = spriteSheetPlayer.image;//使っているスプライトシートはこれ
      image.id = 'my-image';
      this.$el.append(image);

      spriteSheetPlayer.play()
    });
    spriteSheetPlayer.dispatcher.addEventListener(Event.START, ()=>{
      console.log("Event.START")
    });
    spriteSheetPlayer.dispatcher.addEventListener(Event.RENDER, ()=>{
      let x = spriteSheetPlayer.x;
      let y = spriteSheetPlayer.y;
      let w = spriteSheetPlayer.width;
      let h = spriteSheetPlayer.height;
      let paddingTop = spriteSheetPlayer.spriteSourceSizeY;
      let marginLeft = spriteSheetPlayer.spriteSourceSizeX;

      myImage1.style.width = w + "px";
      myImage1.style.height = h + "px";
      myImage1.style.backgroundPosition = -x + 'px ' + -y + 'px';
      myImage0.style.paddingTop = paddingTop + 'px'; 
      myImage1.style.marginLeft = marginLeft + 'px';

      console.log("Event.RENDER: x:" + x + " y:" + y + " w:" + w + " h:" + h )
    });
    spriteSheetPlayer.dispatcher.addEventListener(Event.COMPLETE, ()=>{
      console.log("Event.COMPLETE")
      spriteSheetPlayer.play()
    });
    spriteSheetPlayer.load('Animal.json', 'Animal.png', false)//第二引数をtrueにすると自動的にplay()する

  }
}
</script>
<style scoped>
</style>
