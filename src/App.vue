<template>
  <div id="app">
    <ul class="navigation" v-if="$route.name !== 'Home'">
      <li>
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'OpsList' }">Type List</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'OpsTable' }">Table</router-link>
      </li>
    </ul>
    <transition name="fade" mode="out-in">
      <router-view style="height: 100%; overflow-y: auto;"></router-view>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'App'
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