<template>
<router-link :to="{name:'home'}">ホームページ</router-link>|
<router-link :to="{name:'about'}">アバウト</router-link>|
<router-link :to="{name:'compo'}">コンポ</router-link>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
