<script setup>
import { ref, onMounted } from 'vue';

const users = ref([]);

onMounted(async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  users.value = data;
});
</script>

<template>
  <div>
    <h2>Users一覧</h2>
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>