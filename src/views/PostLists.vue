<template>
  <div class="post-list">
    <div class="paraGraph" v-for="post in posts" :key="post.id">
    <SinglePost :post="post"/>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'
export default {
  name: 'PostLists',
  props:['posts'],
  components: {SinglePost  },
  setup(){
    onMounted(()=>console.log('mounted'))
    onUnmounted(()=> console.log('unmounted'))
    onUpdated(()=> console.log('updated'))
    return {}
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
</style>
