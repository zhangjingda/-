<template>
  <div>
    <p>
        <div v-if=" $route.path == '/home' || $route.path == '/'">
            <myimg></myimg>
        </div>
        <router-view name="content"></router-view>   
    </p>


  </div>
</template>
<style>

</style>
<script>
    import Myimg from "./Myimg.vue"
    export default{
        data(){
          return{

          }
        },
        components:{
          myimg: Myimg
        }
    }
</script>
