<template>
  <div id="hello">
  </div>
</template>

<script>
import SvgPlayer from '@/assets/js/libs/tk90755/media/SvgPlayer.js'
export default {
  name: 'Sample',
  created(){

  },
  mounted(){
    // Ticker.add(()=>{
    //   console.log('sample1' + Math.random())
    // },'sample1')
    // Ticker.add(()=>{
    //   console.log('sample2' + Math.random())
    // },'sample2')
    // setTimeout(()=>{
    //   Ticker.kill('sample1')
    // },2000)
    // setTimeout(()=>{
    //   Ticker.kill('sample2')
    // },4000)

    // let callback = ()=>{
    //   console.log('_callback kitayo')
    //   console.log(loader.content)
    // }
    // let loader = new SvgLoader(callback);
    // loader.load('test.svg')

    let svgPlayer = new SvgPlayer();
    svgPlayer.load('test.svg')
    svgPlayer.play()
  }
}
</script>
<style scoped>

</style>
