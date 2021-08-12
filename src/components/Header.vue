<template>
    <div id="nav">
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
    name: 'Header'
  }
</script>

<style scoped>
</style>