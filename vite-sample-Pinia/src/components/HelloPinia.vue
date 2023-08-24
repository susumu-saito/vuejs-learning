<script setup>
    import { useStoreCounter } from '../stores/counter';
    const counter = useStoreCounter();
</script>

<template>
    <div>
        <h2>Hello Pinia</h2>
        <p>カウント:{{ counter.count }}</p>
    </div>
</template>
