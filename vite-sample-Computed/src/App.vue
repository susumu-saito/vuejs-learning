<script setup>
import { ref, reactive, computed } from 'vue';
const count = ref(0);

const user = reactive({
  firstName: 'John',
  lastName: 'Doe',
});

const fullName = computed({
  get() {
    return `${user.firstName} ${user.lastName}`;
  },
  set(newValue) {
    const names = newValue.split(' ');
    user.firstName = names[0];
    user.lastName = names[names.length - 1];
  },
});

const changeName = () => {
  fullName.value = 'Jane Doe';
};
</script>

<template>
  <div>
    <h1>Vue 3 入門</h1>
    <h2>fullName: {{ fullName }}</h2>
    <button @click="changeName">Change Name</button>
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
