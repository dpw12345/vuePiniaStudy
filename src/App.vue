<template>
  <div>
    {{ store.count }}
    <hello-world></hello-world>
  </div>
</template>
<script setup lang="ts">
import helloWorld from './components/HelloWorld.vue'
import { useCountStore } from "./store/index.ts";


const store = useCountStore();
</script>
<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
