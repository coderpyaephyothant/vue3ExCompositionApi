import { reactive, ref } from 'vue'
const getPostData = (id) => {
    const post = ref(null)
    const error = ref(null)
    const toFetchPostData = async ()=> {
      try {
        let fetchedData = await fetch('http://localhost:3000/posts/'+ id)
        if(!fetchedData.ok){
          throw Error('エラーが発生した。')
        }
        post.value =  await fetchedData.json()
        console.log(fetchedData)
      } catch (err) {
        error.value = err.message
      }
    }
    return {error,post,toFetchPostData}
}
export default getPostData