<template>
  <div class="wrap">
    <h2>This is an productList page1</h2>
  

  <h2 v-for="(menu, i) in menu" :key="menu" > {{ i }}  {{ menu[i]  }}  </h2>
  <h2 :key="i" v-for="(fruitData, i) in fruitData" >{{ fruitData.product_name }}  </h2>  
  <h2 :key="i" v-for="(delData, i) in delData" >{{ delData.test }}  </h2>

  

</div>
</template>

<script>
export default {
  data(){
    return{     
      menu : ['home','aaa','aaa'],
      fruitData : [],
      delData:[]
    };
  },

  created() {
    this.getProductList();   
  },  

  methods: {
    async getProductList(){
    this.fruitData = await this.$api("/api/testlist", {});  
    this.delData =[ {id:1, test:'aa'}, {id:2, test:'99'}, {id:3, test:'cc'}]
    }, 
  }
}

// 1) mixims.js 에 규칙에 따라 api를 호출
// 2) server app.js 에  /api/:alias 에 접근하여 server 에 sql.js 에 선언된
//  testlist 퀄리문을 실행

</script>
