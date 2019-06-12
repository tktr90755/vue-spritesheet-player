<template>
  <div id="hello">
    →
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
      //使っているsvgはこれ
      document.getElementById('app').append(svgPlayer.svg)
    });
    svgPlayer.dispatcher.addEventListener(Event.START, ()=>{
      console.log("Event.START")
    });
    svgPlayer.dispatcher.addEventListener(Event.RENDER, ()=>{
      let x = svgPlayer.point.x;
      let y = svgPlayer.point.y;
      this.$el.style.left = x + "px";
      this.$el.style.top = y + "px";
      this.$el.style.transform = 'rotate(' + svgPlayer.rotation + 'deg)';
      console.log("Event.RENDER: percent:" + svgPlayer.percent + " x:" + x + " y:" + y + " rotation:" + svgPlayer.rotation )
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
  font-size: 30px;
}
svg{
  position: fixed;
}
</style>
