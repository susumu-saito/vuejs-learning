<script setup>
    import CompB from './CompB.vue';

    const { message } = defineProps(['message']);
</script>
<template>
    <div>
        <h2>CompAコンポーネント</h2>
        <CompB :message="message" />
    </div>
</template>