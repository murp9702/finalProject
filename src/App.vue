<template>
  <!-- <div id="app"> -->
    <EasyGarden/>
  <!-- </div> -->
</template>

<script>

import EasyGarden from './components/EasyGarden'

export default {
  name: 'app',
  components: {
    EasyGarden
  }
}
</script>

<style>
  @import '../node_modules/fullcalendar/dist/fullcalendar.css';
/* #app {
   font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; 


}  */
* {
  box-sizing: border-box;
}

.wrapper {
    height: 100%;

}

html, body{
  height: 100vh;
  width: 100vw;
  padding: 0;
  margin: 0;
  position: relative;

}

</style>
