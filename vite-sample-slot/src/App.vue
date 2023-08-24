<script setup>
  import User from './components/User.vue';
  import Users from './components/Users.vue';
  import NamedSlot from './components/NamedSlot.vue';
  import Default from './components/Default.vue';
</script>

<template>
<div>
  <User>
    <span style="font-weight: 900; font-size: 1.4em">John Doe</span>
  </User>
  <User />
  <User><span style="color: blue">Jane Doe</span></User>

  <hr />
  <Users>
    <template v-slot:title><h1>ユーザ情報</h1></template>
    <template v-slot:content
      ><div>
        <div>John Doe</div>
        <div>Jane Doe</div>
      </div></template
    >
    <template v-slot:actions><button>ユーザ追加</button></template>
  </Users>

  <hr />
   <NamedSlot>
    <template v-slot:title><h1>ユーザ情報</h1></template>
    <div>
      <div>John Doe</div>
      <div>Jane Doe</div>
    </div>
    <template v-slot:actions><button>ユーザ追加</button></template>
  </NamedSlot>

  <hr />
  <Default />
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
