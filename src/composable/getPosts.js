import { reactive, ref } from 'vue'
const getPostData = () => {
    const posts = ref([])
    const error = ref(null)
    const toFetchData = async ()=> {
      try {
        let fetchedData = await fetch('http://localhost:3000/posts')
        if(!fetchedData.ok){
          throw Error('エラーが発生した。')
        }
        posts.value =  await fetchedData.json()
        console.log(fetchedData)
      } catch (err) {
        error.value = err.message
      }
    }
    return {error,posts,toFetchData}
}
export default getPostData