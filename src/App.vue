<template>
  <div id="app">
    <Header></Header>
  </div>
</template>
<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Header,
  }
}
</script>
<style>
#app {
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

html, body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background: url('assets/Subtle-Prism.svg');
}

.navigation {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  justify-content: center;
  color: silver;
  padding: 25px;
  background-color: rgba(0,0,0,0.5);
  margin: 0;
}
.navigation li {
  padding: 0 15px;
}
.navigation li a {
  color: silver;
}
</style>