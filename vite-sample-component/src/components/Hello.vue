<script setup>
  import { ref, reactive } from 'vue';
  const count = ref(0);
  const state = reactive({
    count: 1,
  });
  const addRefCount = () => {
    count.value++;
  };

  const addReactiveCount = () => {
    state.count++;
  };

</script>

<template>
<div>
  <h2>コンポーネント</h2>
  <p>Ref Count:{{ count }}</p>
  <p>Reactive Count:{{ state.count }}</p>
  <div>
    <button @click="addRefCount">Ref Count+</button>
    <button @click="addReactiveCount">Reactive Count+</button>
  </div>
</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
