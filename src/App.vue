<script setup>
  import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
  <div class="logo-container">
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/svgs/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://developer.mozilla.org/zh-CN/docs/Web/SVG" target="_blank">
      <SVGIcon class="logo svg" icon="disc" size="6em" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + SVG" />
</template>

<style scoped>
  .logo-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo {
    padding: 1.5em;
    height: 6em;
    will-change: filter;
  }

  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }

  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
  }
</style>
