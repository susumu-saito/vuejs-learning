<script setup></script>

<template>
  <div>
    <header>
      <nav>
        <router-link to="/">Home</router-link>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/users/1">User1</RouterLink>
        <RouterLink to="/users/2">User2</RouterLink>
      </nav>
    </header>
    <h1>Hello World</h1>
    <router-view />
  </div>
</template>

<style>
  .router-link-active {
    font-weight: bold;
  }
</style>