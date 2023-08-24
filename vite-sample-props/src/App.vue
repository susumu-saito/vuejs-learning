<script setup>
import Hello from './components/Hello.vue';
import Attrs from './components/Attr.vue';
import Emit from './components/Emit.vue';
import { ref } from 'vue';

const name = ref('Vue');
const changeName = () => {
  name.value = 'Vue3';
};

const handleEvent = () => {
  console.log('子コンポーネントからの通知');
}
const handleEvent2 = () => {
    name.value = 'Ken';
};
</script>

<template>
  <div>
    <Hello message="Propsの使い方" />
    <Hello message="defineProps関数を利用" />
    <Hello message="Propsの使い方" name="Jonh" />
    <Hello message="Propsの初期値の設定" />
    <Hello message="数値を渡す(string)" price="1000" />
    <Hello message="v-bind を使って数値を渡す" v-bind:price="1000" />
    <Hello message="Boolean を渡す" isAdmin="true" />
    <Hello message="reactiveな変数を渡す" name="reactiveName" />
    <Hello message="reactiveな変数を更新" :name="name" />
    <button @click="changeName">Change Name</button>
    <Attrs message="class 属性の設定を渡す" class="active" />
    <Attrs message="attrsを使ってclassを適用" id="main" style="color:red" class="active" />
    <Emit message="子から親へイベントの伝達" v-on:notification="handleEvent" />
    <Emit message="emit イベントを利用した更新" @changeNameEvent="handleEvent2" :name="name" />
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
