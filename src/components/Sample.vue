<template>
  <div id="hello">
    ▲
  </div>
</template>

<script>
import SvgPlayer from '@/assets/js/libs/tk90755/media/SvgPlayer.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
export default {
  name: 'Sample',
  created(){

  },
  mounted(){
    let svgPlayer = new SvgPlayer();
    svgPlayer.speed = 1;
    svgPlayer.dispatcher.addEventListener(Event.INIT, ()=>{
      console.log("Event.INIT")
      svgPlayer.play()
    });
    svgPlayer.dispatcher.addEventListener(Event.START, ()=>{
      console.log("Event.START")
    });
    svgPlayer.dispatcher.addEventListener(Event.RENDER, ()=>{
      console.log("Event.RENDER")
      this.$el.style.left = svgPlayer.point.x + "px";
      this.$el.style.top = svgPlayer.point.y + "px";
      this.$el.style.transform = 'rotate(' + svgPlayer.rotation + 'deg)';
    });
    svgPlayer.dispatcher.addEventListener(Event.COMPLETE, ()=>{
      console.log("Event.COMPLETE")
    });
    svgPlayer.load('test.svg', false)//第二引数をtrueにすると自動的にplay()する
  }
}
</script>
<style scoped>
#hello{
  position: fixed;
}
</style>
