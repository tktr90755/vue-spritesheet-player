<template>
  <div id="hello">
  </div>
</template>

<script>
import Ticker from '@/assets/js/libs/tk90755/display/Ticker.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import EventDispatcher from '@/assets/js/libs/tk90755/events/EventDispatcher.js'
import Loader from '@/assets/js/libs/tk90755/net/Loader.js'
import SvgLoader from '@/assets/js/libs/tk90755/net/SvgLoader.js'
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

    let callback = ()=>{
      console.log('_callback kitayo')
      // console.log(loader.content)
      // var svg = loader.content.getElementsByTagName('svg');
      // var path = svg.getElementsByTagName('path');
      // console.log(path)
    }
    let loader = new SvgLoader(callback);
    loader.load('test.svg')
  }
}
</script>
<style scoped>

</style>
