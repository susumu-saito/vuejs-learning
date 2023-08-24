<script setup>
  import { ref, computed } from 'vue';
  import Tokyo from './components/Tokyo.vue';
  import Kyoto from './components/Kyoto.vue';

  const city = ref('tokyo');
  const count = ref(0);

  const tabs = {
    tokyo: Tokyo,
    kyoto: Kyoto,
  };
  const tab = computed(() => tabs[city.value]);
</script>

<template>
  <div>
    <div>
      <button @click="city = 'tokyo'">東京</button>
      <button @click="city = 'kyoto'">京都</button>
    </div>
    <component v-bind:is="tab"></component>
    
    <hr />
    <div>
      <p>{{ count }}</p>
      <button @click="count++">Add Count</button>
    </div>
    <keep-alive> <component v-bind:is="tab"></component></keep-alive>
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
