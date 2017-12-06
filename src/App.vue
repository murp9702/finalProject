<template>
  <div id="app">
    <EasyGarden/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import EasyGarden from './components/EasyGarden'

export default {
  name: 'app',
  components: {
    EasyGarden
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
 @import '../node_modules/fullcalendar/dist/fullcalendar.css';
</style>
