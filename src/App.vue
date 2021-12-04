<template>  

  <!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Twincosmos</a>
       <router-link to="/" class="navbar-brand">Twincosmos</router-link> |
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
          <router-link to="/" class="nav-link">world</router-link>
          </li>
          <li class="nav-item">
         <router-link to="/Life" class="nav-link">life</router-link> 
          </li>
         <li class="nav-item">
         <router-link to="/Study" class="nav-link">study</router-link> 
          </li>  
          <li class="nav-item">
         <router-link to="/Economy" class="nav-link">economy</router-link> 
          </li>    
         <li class="nav-item">
         <router-link to="/Chat" class="nav-link">Chat</router-link> 
          </li> 
           <li class="nav-item">
         <router-link to="/Play" class="nav-link">play</router-link> 
          </li> 
            <li class="nav-item">
          <router-link to="/Create" class="nav-link">create</router-link> 
          </li>
           <li class="nav-item">
         <router-link to="/ProductList" class="nav-link">productList</router-link>
          </li>            
        </ul>
        <form class="d-flex">
         <li v-if="user.email==undefined" > <button class="btn btn-danger" type="button" @click="kakaoLoin" >로그인</button></li>
         <li v-else> <button class="btn btn-danger" type="button" @click="kakaoLogout" >로그아웃</button></li>
        </form>
      </div>
    </div>
  </nav>  -->
  <h1 class="logo"><router-link to="/" class="navbar-brand">Twincosmos</router-link></h1>
  <nav>
      <ul class="nav">
        <li class="nav_item">
          <router-link to="/" class="nav-link">world</router-link>
        </li>
        <li class="nav_item">
          <router-link to="/Life" class="nav-link">life</router-link> 
        </li>
        <li class="nav_item">
          <router-link to="/Study" class="nav-link">study</router-link> 
        </li>  
        <li class="nav_item">
          <router-link to="/Economy" class="nav-link">economy</router-link> 
        </li>    
        <li class="nav_item">
          <router-link to="/Chat" class="nav-link">Chat</router-link> 
        </li> 
        <li class="nav_item">
          <router-link to="/Play" class="nav-link">play</router-link> 
        </li> 
        <li class="nav_item">
          <router-link to="/Create" class="nav-link">create</router-link> 
        </li>
        <li class="nav_item">
          <router-link to="/ProductList" class="nav-link">productList</router-link>
        </li> 
      </ul>
    </nav>
    <form class="loginBtn d-flex">
      <!-- user.email  이나  ===> 카톡에서 정보를 안줘서 닉네임으로 임시로 했음 -->
      <div v-if="user.email==undefined" > <button type="button" @click="kakaoLoin" >로그인</button></div>
      <div v-else> <button type="button" @click="kakaoLogout" >로그아웃</button></div>
    </form>
  <router-view/>
</template>


<script>

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
 
  methods: { 
    kakaoLoin() {
      window.Kakao.Auth.login({
        scope:'account_email, gender, profile_nickname',
        success: this.getProfile,
      })
    },     

    getProfile() {      
      window.Kakao.API.request({
      url: '/v2/user/me',
      success: res => {    
         const kakao_account = res.kakao_account;   
        // console.log("kakao_account ===>",kakao_account);
         this.login(kakao_account);  
         alert("로그인 성공")      ;
        },
        fail: function(error) {
        console.log(error);
        },   
      });
    },

    async login(kakao_account) {
      await this.$api("/api/login", {
        param: [
         {email:kakao_account.email, nickname:kakao_account.profile.nickname},        
         {nickname:kakao_account.profile.nickname}
        ]
      }); 
      this.$store.commit("user", kakao_account);
      console.log("kako_account text=====",kakao_account)
      console.log("store. user ===>",this.$store.user)

    },
    kakaoLogout() {
      window.Kakao.Auth.logout((response) => {
        console.log(response);
        this.$store.commit("user", {});
        alert("로그아웃");
        this.$router.push({path:'/'});        
      });
    }
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html, body, #app{height: 100%;width: 100%;background-color: #161628;}
#app{
  text-align: center;
}
h1,h2,h3,h4{color: white;}
ul, li {
  list-style: none;  
}
textarea{
  display: block;
}
a{
  position: relative;
  text-decoration: none;
  color: cornflowerblue;
}
a:hover{
  color: cornflowerblue;
}
.wrap{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.logo{
  position: fixed;
  left: 15px;
  top: 20px;
  color: cornflowerblue;
  font-size: 20px !important;
}
nav{
  position: fixed;
  left: 0;
  bottom: 50%;
  transform: translateY(50%);
  z-index: 8888;
}
nav>.nav{
  display: flex;
  flex-direction: column;
  text-align: left;
  font-size: 1rem;
  color: cornflowerblue;
}
.loginBtn{
  position: fixed;
  right: 0;
  top: 0;
}
.loginBtn button{
  border: none;
  margin: 20px 15px;
  background-color: cornflowerblue;
  padding: 5px 15px;
  border-radius: 50px;
  color: white;
}
@media screen and (max-width: 1024px){
  nav{
    width: 100%;
    bottom: 0;
    transform: translateY(0);
    background-color: cornflowerblue;
    padding: 5px;
    border-radius: 15px 15px 0 0;
  }
  nav>.nav{
    flex-direction: row;
    justify-content: space-between;
  }
  nav>.nav a{
    color: white;
  }
}
</style>
