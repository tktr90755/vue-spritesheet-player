<template>
  <div class="hello">
    <p>
      sample
    </p>
  </div>
</template>

<script>
import Ticker from '@/assets/js/libs/tk90755/display/Ticker.js'
import Event from '@/assets/js/libs/tk90755/events/Event.js'
import EventDispatcher from '@/assets/js/libs/tk90755/events/EventDispatcher.js'
import Loader from '@/assets/js/libs/tk90755/net/Loader.js'
import HtmlLoader from '@/assets/js/libs/tk90755/net/HtmlLoader.js'
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
    let loader = new HtmlLoader();
    loader.load()
  }
}
</script>
<style scoped>

</style>
