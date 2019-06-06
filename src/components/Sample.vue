<template>
  <div class="hello">
    <p>
      sample
    </p>
  </div>
</template>

<script>
import Ticker from '../assets/js/common/display/Ticker.js'
import Event from '../assets/js/common/events/Event.js'
import EventDispatcher from '../assets/js/common/events/EventDispatcher.js'
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

  }
}
</script>
<style scoped>

</style>
