<template>
  <div class="singlePost">
    <router-link :to="{name : 'details', params:{id: post.id}}">
      <h3>{{post.title}}</h3>
    </router-link>
    <!-- <p class="paraGraph" v-if="post">
    {{post.title}} | {{snippet}}
    </p> -->
  </div>
</template>

<script>
import { computed, onMounted, onUnmounted, onUpdated } from 'vue'

export default {
  name: 'SinglePost',
  props:['post'],
  setup(props){
    const snippet = computed(()=> {
      return props.post.body.substring(0,100) + '***'
    })
    
    return {snippet}
  },

}
</script>
<style scoped>
.paraGraph{
  background: rgb(222, 13, 13);
  color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
  margin: 20px auto;
  max-width: 500px;
  font-weight: bold;
  text-align: justify;
}
</style>
