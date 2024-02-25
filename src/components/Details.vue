<template>
  <h3>Detail</h3>
  <div v-if="error">Loading . . . </div>
  <div v-if="post">
    <p>{{post.title}}</p>
    <p>{{post.body}}</p>
  </div>
</template>

<script>
import getPostData from '../composable/getPost'
export default {
props:['id'],
setup(props){
    console.log('propsID',props.id)
const {post,error,toFetchPostData} = getPostData(props.id)
console.log('post',post)
toFetchPostData()
return {post,error}
}
}
</script>

<style>

</style>