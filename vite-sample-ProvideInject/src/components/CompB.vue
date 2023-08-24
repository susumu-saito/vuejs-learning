<script setup>
    import { inject } from 'vue';
    import { provide, ref } from 'vue';
    const { message } = defineProps(['message']);

    const message2 = inject('message');
    const message3 = ref('Provide/Injectでデータ渡し');
    provide('message3', message3);

    const count = inject('count');
    const addCount = inject('addCount');

</script>

<template>
    <div>
        <h3>CompBコンポーネント</h3>
        <p>{{ message }}</p>
        <p>{{ message2 }}</p>
        <p>{{ message3 }}</p>
        <input type="text" v-model="message3" />
        <br />
        <hr />
        <p>Count:{{ count }}</p>
        <button @click="addCount">+</button>
    </div>
</template>
