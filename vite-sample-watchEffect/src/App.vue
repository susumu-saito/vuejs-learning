<script setup>
  import { ref, watchEffect } from 'vue';

  const count = ref(0);
  const count2 = ref(100);

  watchEffect(() => console.log(count.value));
</script>

<template>
<div>
  <h1>Vue 3 入門</h1>
  <button @click="count++">Count:{{ count }}</button>
  <button @click="count2++">Count2:{{ count2 }}</button>
</div>
</template>

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
