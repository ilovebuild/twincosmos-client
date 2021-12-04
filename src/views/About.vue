<template>
   <button @click="showTitle">
        전역 컴포넌트 클릭해보세요. 아래에 글씨가 나옵니다.
    </button>
<Greet/>

</template>

<script>

import Greet from '../components/Greet.vue'
export default {
  name: 'About',
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