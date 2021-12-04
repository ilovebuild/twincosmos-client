import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import store from './store'



// import 'bootstrap'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


const app = createApp(App);


app.use(router);
app.mixin(mixins);
app.use(store);
app.mount('#app');





// window.Kakao.init("3ba22632f359189b644bd0ee813b8d39");

window.Kakao.init('3ba22632f359189b644bd0ee813b8d39');

// SDK 초기화 여부를 판단합니다.
// console.log(window.Kakao.isInitialized());