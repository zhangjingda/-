<template>
  <div id="username">

   <div class="row">
     <div class="col-md-3">
        <router-link to="/user/mystore">  
           <div class="mybtn">
              <i class="glyphicon glyphicon glyphicon-circle-arrow-right"></i>
              <span>我的收藏</span>
           </div>
         </router-link>

        <router-link to="/user/mycomment"> 
           <div class="mybtn">
              <i class="glyphicon glyphicon glyphicon-circle-arrow-right"></i>
              <span>我的评论</span>
           </div>
        </router-link>
     </div>

     <div class="col-md-9">
          <div v-if="$route.path == '/user'">
            
            这是我的收藏界面

          </div>
          <router-view></router-view>
     </div>

   </div>

  </div>
</template>
<script>
    export default {
        name : 'username',
        computed : {
         
        },
        methods : {
       
        }
    }
</script>
<style scoped>
  .mybtn{

    background-color:#337ab7;
    /*background-color:#ccc;*/
    padding: 5px 10px;
    width: 45%;
    color: #fff;
    margin-top: 20px;
    border-radius: 5px;
    border: 1px solid #ccc;

  }
   .mybtn i{
    float: left;
    display: inline-block;
    margin-top: 2px;
  }
  .mybtn span{
     display: inline-block;
     margin-left: 10px;
  }
</style>
