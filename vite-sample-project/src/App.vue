<script setup>
  import HelloWorld from './components/HelloWorld.vue'
  import { ref, reactive, computed } from 'vue';

  const message = 'Hello World';
  const message2 = '<h2>Hello World</h2>';
  let message3 = 'Hello World';
  const message4 = ref('Hello World');
  const form = reactive({
    message5: 'Hello World',
  });

  const upperCase = () => {
    message3 = message3.toUpperCase();
  };

  upperCase();

  const link = 'https://www.google.com';
  const isActive = 'active';
  const styleObjcet = 'color:red;font-weight:10';
  const error = false;
  const stock = 0;
  const languages = ['JavaScript', 'TypeScript', 'Vue.js', 'React', 'Rust', 'Go'];
  const users = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
  ];
  const user = {
    id: 1,
    name: 'John Doe',
    email: 'john@test.com',
    admin: true,
  };

  const clickButton = (msg) => {
    console.log(msg);
  };

  const another = (msg) => {
    console.log(msg);
  };

  const clickEvent = (event) => {
    console.log(event.target);
    event.target.style.backgroundColor = 'red';
    //もう一度押したら戻る
    setTimeout(() => {
      event.target.style.backgroundColor = '';
    }, 1000);
  };
  const send = () => {
    console.log('send');
  };

  const count = ref(0);
  const addCount = () => {
    count++;
  };

  const state = reactive({
    count: 0,
  });
  
  const inputButton = () => {
    console.log(message.value);
  };

  const reloadButton = () => {
    console.log(form.message5);
  };

  const from = reactive({
    message: 0,
  });
  const vmodelbutton = () => {
    console.log(typeof from.message);
  };

  const userComputed = reactive({
    firstName: 'John',
    lastName: 'Doe',
  });
  const fullName = computed(() => `${userComputed.firstName} ${userComputed.lastName}`);
  const changeName = computed(() => `${userComputed.lastName} ${userComputed.lastName}`);


  const usersComputed = [
    { id: 1, name: 'John Doe', email: 'john@test.com', admin: true },
    { id: 2, name: 'Jane Doe', email: 'jane@example.com', admin: false },
    { id: 3, name: 'Kevin MacDonald', email: 'kevin@test.com', admin: false },
  ];
  const adminUsers = computed(() =>
    usersComputed.filter((user) => user.admin === true)
  );

  const userFunction = reactive({
    firstName: 'John',
    lastName: 'Doe',
  });
  const userFunctionName = () => `${userFunction.firstName} ${userFunction.lastName}`;
  
  const computedName = () => `${Math.random()} ${userFunction.firstName} ${userFunction.lastName}`;
  const cFullName = computed(
    () => `${Math.random()} $${userFunction.firstName} ${userFunction.lastName}`
  );


  const inputUser = reactive({
    firstName: 'John',
    lastName: 'Doe',
  }); 
  const inputfullName = () => {
    console.log('Function');
    return `${inputUser.firstName} ${inputUser.lastName}`;
  };
  const inputcFullName = computed(() => {
    console.log('Computed Propety');
    return `${inputUser.firstName} ${inputUser.lastName}`;
  });
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <HelloWorld msg="Vite + Vue" />
    <p>{{ message }}</p>
    <div>{{ message.length * 10 }}</div>
    <div>{{ message.length > 10 ? 'Long' : 'Short' }}</div>
    <p v-text="message"></p>
    <p v-html="message2"></p>
    <div v-text="message3"></div>
    <a :href="link" class="Link">Google</a>
    <p class="underLine" :class="{ active: isActive, back: isBlack }">複数の class を適用</p>
    <p :class="[isActive ? 'active' : 'underLine', isBlack]">配列の中で演算子</p>
    <p :style="{ color: 'blue' ,'font-weight': 100 }">styleの設定方法の確認</p>
    <p :style="styleObjcet">変数側でスタイルを設定</p>

    <h2>条件分岐</h2>
    <div v-if="error">{{ error }}</div>
    <div v-else>エラーはありません。</div>
    <div v-if="stock > 5">まだ商品に在庫数に余裕があります</div>
    <div v-else-if="stock === 0">申し訳ございません。現在売り切れです。</div>
    <div v-else>在庫数が少なくなっています。お急ぎください。</div>
    <div v-if="user">
      <div>1...</div>
      <div>
        <p>2...</p>
        <p>3...</p>
      </div>
    </div>

    <div v-if="error">エラーが発生しています。(v-if)</div>
    <div v-show="error">エラーが発生しています。(v-show)</div>

    <h2>リスト表示</h2>
    <p>配列の中身を表示</p>
    <p v-for="language in languages" :key="language">{{ language }}</p>
    <p>オブジェクトの中身を表示</p>
    <p v-for="user in users" :key="user">{{ user }}</p>

    <div v-for="user in users" :key="user.id">
      {{ user.id }}:{{ user.name }}({{ user.email }})
    </div>

    <ul class="list">
      <li v-for="user in users" :key="user.id">
        {{ user.id }}:{{ user.name }}({{ user.email }})
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <td>ID</td>
          <td>ユーザ名</td>
          <td>Email</td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{ user.id }}</td>
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
        </tr>
      </tbody>
    </table>

    <div v-for="value in user" :key="value">{{ value }}</div>
    <div v-for="user in users" :key="user.id">
      <div v-for="(value, name) in user" :key="value">{{ name }}:{{ value }}</div>
    </div>

    <div v-for="user in users" :key="user.id">
      <div v-if="!user.admin">{{ user.name }}</div>
    </div>

    <button v-on:click="clickButton">クリック</button>  
    <button @dbclick="clickButton">クリック</button>
    <!--一つの関数を実行する場合-->
    <button @click="clickButton('クリック')">クリック</button>
    <!--複数の関数を実行する場合-->
    <button @click="clickButton('クリック'), another('click')">クリック</button>
    <!--引数を渡す場合-->
    <button @click="clickButton('クリック', $event)">クリック</button>
    <!--event オブジェクト-->
    <button @click="clickEvent($event)">クリック</button>
    <!--イベント修飾子-->
    <form @submit.prevent="send">
      <button>送信</button>
    </form>
    <!--キー修飾子-->
    <form @submit.prevent="send">
      <button @keyup.enter="submit">送信</button>
    </form>

    <!-- Reactivity -->
    <button type="button" @click="count++">count is: {{ count }}</button>
    <button type="button" @click="state.count++">
      count is: {{ state.count }}
    </button>

    <p>{{ message4 }}</p>
    <input v-model="message4" />
    <div><button @click="inputButton">Click</button></div>

    <p>{{ form.message5 }}</p>
    <input v-model="form.message5" />
    <div><button @click="reloadButton">Click</button></div>

    <p>{{ form.message }}</p>
    <input v-model="form.message" type="text" />
    <div>
      <button @click="vmodelbutton">Click</button>
    </div>

    <h2>fullName: {{ userComputed.firstName }} {{ userComputed.lastName }}</h2>
    <h2>fullName: {{ fullName }}</h2>
    <h2>fullName: {{ changeName }}</h2>

    <div v-for="user in adminUsers" :key="user.id">
      <div>{{ user.id }} {{ user.name }} {{ user.email }}</div>
    </div>
    
    <h2>function</h2>
    <p>userFunctionName: {{ userFunctionName() }}</p>

    <h2>computed</h2>
    <p>fullName: {{ computedName() }}</p>
    <p>fullName: {{ computedName() }}</p>
    <p>fullName: {{ computedName() }}</p>
    <p>cFullName: {{ cFullName }}</p>
    <p>cFullName: {{ cFullName }}</p>
    <p>cFullName: {{ cFullName }}</p>

    <input v-model="user.firstName" />
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
  .Link {
    color: #42b883;
    text-decoration: none;
  }
  .active {
    color: red;
    font-weight: 900;
  }
  .underLine {
    text-decoration: underline;
  }
  .back {
    background-color: black;
  }
  .list {
    text-align: left;
  }
</style>
