<template>
    <div class="splash-screen" style="margin-top: 50px;">
      <span class="title">Objective Personality System</span>
      <img class="pulse" :src="image" style="padding-top: 25px;"/>
      <router-link class="enter" :to="{ name: 'OpsTable' }" style="padding-top: 25px;">Enter OPS Web Tool</router-link>
    </div>
</template>

<script>

import image from "../assets/icons8-anonymous-mask-100.png"

export default {
    name: 'SplashScreen',
    data () {
      return {
        image: image
      }
    }
}
</script>

<style scoped>
.footer {
    position: absolute; 
    left: 0;
    bottom: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0 30px;
}

.title {
    font-size: 65px;
}

.enter {
    text-decoration: none;
    font-size: 32px;
}

.enter:hover {
    cursor: pointer;
    border-bottom: 1px solid silver;
}
.pulse {
  animation-name: pulse;
  animation-duration: 1s;
  animation-iteration-count: infinite;
}

@keyframes pulse {
  0% {transform: scale(1);}
  50% {transform: scale(1.1);}
  100% {transform: scale(1);}
}

.splash-screen {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>