<script setup>
  import { ref } from 'vue';
  const props = defineProps({
    name: String,
  });

  const name = ref(props.name);

  const emit = defineEmits(['changeNameEvent']);

  const changeName = () => {
    emit('changeNameEvent', name.value);
  };
</script>

<template>
  <div>
    <hr>
    <h2>子コンポーネント</h2>
    <p>Hello {{ props.name }}</p>
    <input type="text" v-model="name" @input="changeName" />
    <input type="text" :value="props.name" @input="$emit('changeNameEvent', $event.target.value)" />

     <input type="text" :value="name" @input="name = $event.target.value" />
  </div>
</template>