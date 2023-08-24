<script setup>
  import CompA from './components/CompA.vue';
  import { provide, ref } from 'vue';

  provide('message', 'Provide/Injectでデータ渡し');

  const message3 = ref('Provide/Injectでデータ渡し');
  provide('message3', message3);

  const count = ref(0);
  const addCount = () => {
    count.value++;
  };
  provide('count', count);
  provide('addCount', addCount);
  
</script>

<template>
  <div>
    <h1>Vue 3 入門</h1>
    <CompA message="propsでデータ渡し" />
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

