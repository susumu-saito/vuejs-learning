<script setup>
import { ref, onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const user = ref([]);

let id = parseInt(route.params.userId);

const fetchUser = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();
  user.value = data;
};

onMounted(() => {
  fetchUser();
  watch(route, () => {
    id = parseInt(route.params.userId);
    fetchUser();
  });
});
</script>

<template>
<div>
  <h2>User詳細</h2>
    <table border="1">
      <tr>
        <th>User Id</th>
        <td>{{ user.id }}</td>
      </tr>
      <tr>
        <th>User Name</th>
        <td>{{ user.name }}</td>
      </tr>
      <tr>
        <th>User Email</th>
        <td>{{ user.email }}</td>
      </tr>
    </table>
    <br />
    <RouterLink to="/users">戻る</RouterLink>
</div>
</template>