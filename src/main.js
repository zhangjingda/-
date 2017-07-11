import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import store from './store'

import App from './App.vue'
import NotFound from './components/404'
import Home from './components/Home'
import LeftsideNav from './components/Nav.vue'
import User from './components/User.vue'
import Myimg from "./components/Myimg.vue"
import Bigimg from "./components/bigimg.vue"

import 'bootstrap/dist/css/bootstrap.css'


Vue.use(VueRouter)
Vue.use(VueResource)

const routes = [{
   path : '/',
   redirect: "/home"
},
{
  path : '/home',
  components : {
      myhome: Home,
      mynav: LeftsideNav
  },
  children:[
      {
        path: 'myimg',
        components: {
            content: Myimg
        }
      },
      {
        path: 'myzixun',
        components: {
            content: NotFound
        }
      }

  ]

},{

  path : '/user',
  components : {
    myuser: User
  },
  children:[
    {
        path: 'mystore',
        component: {
          template: "<div>这是我的收藏界面</div>"
        }
    },
    {

        path: 'mycomment',
        component: {
          template: "<div>这是我的评论界面</div>"
        }
    }
     
  ]
    

},
{
  path : '/bigimg',
  component : Bigimg,
  beforeEnter: function(to, from, next){
      var  temp = Math.round(document.body.scrollTop|| document.documentElement.scrollTop)  
      app.$store.state.pos = {x:0,y:temp};
      next();
  }
},
{
  path : '*',
  component : NotFound
}];

const router = new VueRouter({
  mode: 'history',
  routes:routes,
  scrollBehavior:function(to, from, savedPosition) {
    // console.log(from.path, to.path)
      if((to.path=="/home" && from.path=="/home") || (to.path=="/home/myimg" && from.path=="/home/myimg") ){

          if (savedPosition) {
              return savedPosition;
          } else {
            return app.$store.state.pos
          }

      }
  
  }
});

var app = new Vue({
  el: '#app',
  router,
  store,
  render:h => h(App)
});
