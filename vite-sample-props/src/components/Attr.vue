<script setup>
    import { useAttrs } from 'vue';
    const attrs = useAttrs();
    console.log(attrs);

  const props = defineProps({
    message: { type: String, required: true },
  });



</script>

<template>
  <div class="info">
    <hr>
    <h2>{{ props.message }}</h2>
    <p :class="$attrs.class">class属性の渡し方確認中</p>
    <p :style="attrs.style">style属性の渡し方確認中</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
