<template>
<div class="wrap">
<div class="character_select">
  <div class="sex">
    <li><button>남</button></li>
    <li><button>여</button></li>
  </div>
  <div class="avata_editor">
    <div class="editor_type">
      <li><button>타입1</button></li>
      <li><button>타입2</button></li>
      <li><button>타입3</button></li>
      <li><button>타입4</button></li>
      <li><button>타입5</button></li>
    </div>
    <div class="editor_type_menu">
          <li><button>피부색</button></li>
          <li><button>얼굴형</button></li>
          <li><button>의상</button></li>
          <li><button>헤어</button></li>
          <li><button>수염</button></li>
          <li><button>눈</button></li>
          <li><button>눈썹</button></li>
          <li><button>안경</button></li>
          <li><button>데칼</button></li>
          <li><button>복면</button></li>
          <li><button>모자</button></li>
    </div>
  </div>
  
 
</div>


  <canvas  id="renderCanvas" ref="bjsCanvas" />


</div>
</template>

<script>
import { ref, onMounted } from "@vue/runtime-core";
import { createScene } from "../scenes/MyFirstScene";

export default {
  name: "BabylonScene",
  setup() {
    const bjsCanvas = ref(null);

    onMounted(() => {
      if (bjsCanvas.value) {
        createScene(bjsCanvas.value);
      }
    });

    return {
      bjsCanvas,
    };
  },
  mounted(){
    console.log("마운트 플레이에 있는")
  }
};
</script>
<style>
  canvas {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
 #renderCanvas {                      
    width: 100%;
    height:100%;
    touch-action: none;   
}
.character_select{
  position: absolute;
  display: flex;
  bottom: 0px;
  height: 100px;
  width: 100%;
  background-color: chocolate;
  overflow:hidden;
}
.sex{
  width: 100px;
}
.sex button{
 width:100px;
 height: 50px;
}
.editor_type{
  display: flex;
  width: 100%;
  justify-content: center;
}
.editor_type li button{
   width: 70px;
  height: 50px;
}

.editor_type_menu{
  display: flex;
  width: 100%;
  justify-content: center;
}
.editor_type_menu li button{
  width: 70px;
  height: 50px;
}
 



</style>
