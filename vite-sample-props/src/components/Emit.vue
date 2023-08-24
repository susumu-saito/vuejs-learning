<script setup>
const props = defineProps({
    message: { type: String, required: true },
    name: String,
});
const emit = defineEmits(['notification', 'changeNameEvent']);
const sendNotification = () => {
    emit('notification');
};
const changeName = () => {
    emit('changeNameEvent');
};

</script>

<template>
  <div>
    <hr>
    <h2>{{ props.message }}</h2>
    <button @click="$emit('notification')">通知</button>
    <button @click="emit('notification')">通知</button>
    <button @click="sendNotification">通知</button>
    <p>Hello {{ props.name }}</p>
    <button @click="changeName">Change Name</button>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
