<template>
<!-- 包围盒开始 -->
  <div id="wrapper" v-on:enroll="show">
    <!-- 注册对话框和登录对话框 -->
     <div v-show="show_enroll_dialog">
         <enroll v-on:off="hide"></enroll>
     </div>
     <div v-show="show_login_dialog">
         <login v-on:off="hide1"></login>
     </div>

   <!-- 顶部共用导航栏部分 -->
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand " href="javascript:void(0)">精灵图舍</a>
        <ul class="nav navbar-nav">
          <li><router-link to="/home"><i class="glyphicon glyphicon-home"></i>首页</router-link> </li>
          <li><router-link to="/user"><i class="glyphicon glyphicon-user"></i>用户管理</router-link></li>
          <li ><a href="javascript:void(0)" @click="show">注册</a></li>
          <li ><a href="javascript:void(0)" @click="show1">登录</a></li>
        </ul>
      </div>
    </nav>
   <!-- 顶部共用导航栏部分 -->


    <div class="container">

      <div class="col-md-2">
        <router-view name="mynav"></router-view>
      </div>

      <div class="col-md-10">
        <router-view name="myhome"></router-view>
      </div>

      <div class="col-md-12">
         <router-view name="myuser"></router-view>
      </div>

      <div class="col-md-12">
         <router-view></router-view>
      </div>

    </div>




  </div>
<!-- 包围盒结束 -->
</template>

<script>
// 分别是注册和登录对话框的组件
import Enroll from './components/Enroll.vue'
import Login from './components/Login.vue'
// import {mapActions, mapMutations, mapGetters, mapState} from "vuex"
export default {
  name: 'app',
  data(){
    return{
       //注册和登录对话框的显示还是影藏的控制变量
        show_enroll_dialog: false,
        show_login_dialog: false,
        bool : true
    }
  },
  mounted:function(){
     // var self = this;
     // window.onscroll = function(e){

     //   if(self.bool){
     //       self.bool = false;
     //       setTimeout(function(){
     //          var temp = Math.round(document.body.scrollTop|| document.documentElement.scrollTop)
     //          if(temp>100)
     //            self.$store.state.pos = {
     //               x: 0,
     //               y: Math.round(document.body.scrollTop|| document.documentElement.scrollTop)
     //            } 
     //          self.bool = true
     //        }.bind(self),500)
     //   }
           
        
       
     // }
      
  },
  computed:{

  },
  components: {
    enroll: Enroll,
    login: Login
  },

  methods:{
     //show 和 hide 是控制注册对话框的显示和影藏
     //show1 和 hide1 是控制登录对话框的显示和影藏
     show:function(){
          this.show_enroll_dialog = true;
     },
     show1:function(){
          this.show_login_dialog = true ;
     },
     hide:function(){
           this.show_enroll_dialog = false;
     },
     hide1:function(){
           this.show_login_dialog = false;
     }
  }
}
</script>

