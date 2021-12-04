<template>
  <div class="wrap">
    <h2>This is an world</h2>
    <Greet/>
  </div>
</template>
<script>

import Greet from '../components/Greet.vue'
export default {
  name: 'world',
  data () {
    return {    
    }
  },  
components:{Greet},
  methods: {
    showTitle () {
      this.title = 'Global Component TEST !!'
    }
  }
}
</script>