<template>
  <div class="about">
    <h2>This is an economy</h2>
  </div>
  
</template>

<script>

export default ({
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
   mounted() {
    if(this.user.email == undefined) {
      alert("로그인을 해야 이용할 수 있습니다.");
      this.$router.push({path:'/'}); 
    }
  },
})
</script>

