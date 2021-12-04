<template>
  <div>
    <canvas ref="bjsCanvas" width="500" height="500" />
     <label id="fps">{{ fps }}</label>
        
  </div>
</template>

<script>

// import { createScene } from "../scenes/map";

// export default {
//   name: "",  

//  data() {
//     return {
//       fps: 0,
//     };
//   },
//   methods: {
//     fpsReceived(fps) {
//       this.fps = fps;
//     },
//   },
//   mounted() {
//     const bjsCanvas = this.$refs.bjsCanvas;
//     if (bjsCanvas) {
//       const fpsCallback = (fps) => {
//         this.$emit("fps", fps);      
//         this.fpsReceived(fps);
//       };
//       createScene(bjsCanvas, fpsCallback);
//     }
//   },
// };
// </script>

<style scoped>
#id {
  position: absolute;
  
  justify-content: center;
}
</style>