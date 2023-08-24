<script setup>
    import { useAttrs } from 'vue';
    const attrs = useAttrs();
    console.log(attrs);

  const props = defineProps({
    message: { type: String, required: true },
    name: { type: String, default: 'Jane' },
    price: Number,
    isAdmin: Boolean,
  });



</script>

<template>
  <div>
    <hr>
    <h2>{{ props.message }}</h2>
    <p>{{ props.name }} {{ props.message }}</p>
    <p>{{ props.price + 100 }}</p>  <!--文字列なので加算ではなく結合-->
    <p v-if = "props.isAdmin">adminUser</p>
    <p v-else>user</p>
    <p>Hello {{ props.name }}</p>

    <h2 class="info">子コンポーネント</h2>
    <p :class="$attrs.class">class属性の渡し方確認中</p>
    <p :style="attrs.style">style属性の渡し方確認中</p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
