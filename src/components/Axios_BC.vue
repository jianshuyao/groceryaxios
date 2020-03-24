<template>
    <div id="main">
        <div id="chart">
            <axiosExample></axiosExample>
        
        </div>
         <div id="chart">
            <PSIIndex></PSIIndex>
        
        </div>
        <div id="chart">
            <Covid></Covid>
        
        </div>
        <div id="chart">
            <Transport></Transport>
        
        </div>
        
    </div>
</template>

<script>
import axiosExample from '../axiosExample.js'
import PSIIndex from '../PSIIndex.js'
import Covid from '../Covid19.js'
import Transport from '../transport.js'

export default {
    components:{
        axiosExample,PSIIndex, Covid,Transport
    }
    
}
</script>>
<style scoped>
#main{
    content:"";
    display:table;
    clear:both;
}
#chart{
  height:240px;
  width:300px;
  border-style: solid;
  border-color:rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float:left;
}
</style>