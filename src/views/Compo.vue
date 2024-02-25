<template>
  <div class="home">
    <div v-if="error" class="err">{{error}}</div>
    <div v-for="post in posts" :key="post.id" class="">
      <p>{{post.title}}</p> 
      <p>{{post.body}}</p>
      <hr>
    </div>
      <br><br>
    <button @click="showPost=!showPost">TogglePost</button>
    <button @click="posts.pop()">DeleteOnePost</button>
    <div v-if="posts.length">
    <PostLists v-if="showPost" :posts="posts"/>
    </div>
    <div v-else class="err">Loading.....</div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import PostLists from './PostLists.vue'
import getPost from '../composable/getPosts.js'
export default {
  name: 'Compo',
    components:{
      PostLists
    },
  setup(){
    console.log(getPost)
    const {posts,error,toFetchData} = getPost()
    // console.log(posts,error,toFetchData)
    // console.log(error)
    // console.log(toFetchData)
    toFetchData()
    // load()
    const showPost = ref(true)
    return {posts,showPost,error}
  },

}
</script>
<style scoped>
.paraGraph{
  background: rgb(222, 13, 13);
  color: rgb(255, 251, 0);
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 500px;
  font-weight: bold;
  text-align: justify;
}
.err{
  padding: 20px;
  background: #ffd6d6;
  color: #0400ff;
}
</style>
