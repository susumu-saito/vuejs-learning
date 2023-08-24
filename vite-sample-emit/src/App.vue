<script setup>
  import { ref } from 'vue';
  import Hello from './components/Hello.vue';

  const name = ref('John');

  const handleEvent = (newName) => {
    name.value = newName;
  };
</script>

<template>
  <div>
  <Hello message="emit でデータを渡す" @changeNameEvent="handleEvent" :name="name" />
  <Hello message="emit イベントを利用した更新" @changeNameEvent="handleEvent" :name="name" />
  </div>

</template>