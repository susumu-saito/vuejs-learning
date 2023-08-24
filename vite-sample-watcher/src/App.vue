<script setup>
  import { reactive, watch } from 'vue';

  const state = reactive({
    count: 0,
  });

  /*
  watch(count, (count, previousCount) => {
    console.log('count:', count);
    console.log('previousCount:', previousCount);
  });
  */

  /*watch(
    () => state.count,
    (count, previousCount) => {
      console.log('count:', count);
      console.log('previousCount:', previousCount);
    }
  );*/
  /*watch(
    () => state,
    (state, previousState) => {
      console.log('state:', state);
      console.log('previousState:', previousState);
    },
    { deep: true }
  );*/

  watch(
    () => state.count,
    (count, previousCount) => {
      console.log('count:', count);
      console.log('previousCount:', previousCount);
    },
    { immediate: true }
  );
</script>

<template>
  <div>
    <h1>Vue 3 入門</h1>
    <button @click="state.count++">Count:{{ state.count }}</button>
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
