<template>
  <div id="login">
  <normal-dialog v-on:off="hide">
      <h3>欢迎登录</h3>
      <form id="form" action="" method="post" autocomplete="off">   
    
           <div class="wrapper">
             <span class="f">用户名</span> <input type="text" name="username" placeholder="请输入用户名6-18位" 
             v-model="username" @blur="checkUsername">
             <div class="errortip">{{username_error}}</div>
           </div>
           
           <div class="wrapper">
             <span class="f">密码</span> <input type="password" name="password" placeholder="请输入密码6-18位" v-model="password" @blur="checkPassword">
             <div class="errortip">{{password_error}}</div>
           </div>

           <div class="wrapper" v-if="isShowCheckcode">
             <span class="f">验证码</span> <input type="text" name="checkcode" placeholder="输入验证码" v-model="checkcode" 
             @blur="checkCode" style="width: 80px"><img src="/static/assets/1_1.jpg" width="100" height="36" 
             style="margin-left: 30px;"/>
             <div class="errortip">{{checkcode_error}}</div>
           </div>

           <br>
           <input type="button" id="sub" @click="sub" value="立即登录">
           
           <div id="other">
             <div id="go-enroll"><a href="javascript:void(0)">还没注册，立即注册</a></div>
             <div id="forget-password"><a href="">忘记密码</a></div>
           </div>
           
           <div style="margin:20px">合作账号登录</div>
           <div id="more-login">
             <a href=""><img src="/static/assets/qq.jpg" width="50" height="50"></a>
             <a href=""><img src="/static/assets/weixin.jpg" width="50" height="50" style="margin: 0 72px"></a>
             <a href=""><img src="/static/assets/weibo.jpg" width="50" height="50"></a>
           </div>


      </form>
  </normal-dialog>
  </div>
</template>

<script>
import normalDialog from "./normalDialog.vue"

export default {
    name : 'login',
    data:function(){
        return{
           username: "",
           password: "",
           checkcode: "",
           username_error: "",
           password_error: "",
           checkcode_error: "",
           isShowCheckcode: false,
           error_num: 0
        }
    },
    components:{
      normalDialog: normalDialog
    },
    methods : {
    hide:function(){
        this.$emit("off");
    },
    sub:function(){
         
          if( this.checkUsername() && this.checkPassword()){
             if(this.isShowCheckcode){
                if(this.checkCode()){
                    document.forms[0].submit();
                }else{
                    this.error_num++;
                    alert("信息填写不完整或错误!");
                }
             }else{
                document.forms[0].submit();
             }
              
          }else{
              this.error_num++;
              alert("信息填写不完整或错误!");
          }
        
       },
      checkUsername:function(){
          this.username_error = "";
          if(this.username.trim()==""){
            this.username_error="用户名不能为空";
            return false;
          }
          else{
            if(!/[^\s]{6,18}/.test(this.username)){
               this.username_error = "用户名出错"
               return false;
            }
            return true;
          }
      },
      checkPassword:function(){
         this.password_error = "";
         if(this.error_num>0)this.isShowCheckcode = true;
         if(this.password.trim()==""){
            this.password_error="密码不能为空"
            return false;
         }
         else{

            if(!/[\d|\w]{6,18}/.test(this.password)){
                 this.password_error = "密码出错"
                 this.password = "";
                 return false;
              }
              return true;

          }
      },
      checkCode:function(){
          this.checkcode_error = "";
          if(this.checkcode.trim()==""){
              this.checkcode_error="验证码不能为空";
              return false;
          }else{
              if(!/^\d{4}$/.test(this.checkcode)){
                this.checkcode_error="验证码错误";
                this.checkcode = "";
                return false;
              }
              return true;
          }
      }


    }
}

</script>

<style scoped>
 
    h3{
        width: 100px;
        margin: 0 auto;
        margin-top: -30px;
        margin-bottom: 10px;
    }
    .wrapper{
      height: 60px;
      padding-right: 30px;
    }
    form span{
       opacity: 0.7;
       display: inline-block;
    }
    .errortip{
       margin-left: 80px;
       color:#f00;

    }
    .phonetip{
       color: #fff;
       background-color: rgb(255,0,0);
       display: inline-block;
       line-height: 30px;
       padding: 3px 7px;
       border-radius: 3px;
       border: none;
       outline: none;

    }
    .phonetip:hover{
      background-color: rgba(255,0,0,0.8);
    }

  input{
      padding-left: 5px;
      width: 250px;
      border: 1px solid #049cdb;
      height: 36px;
      font-size: 14px;
      font-family: "Microsoft YaHei",Arial;
  }
  input:focus{
    border: 2px solid #049cdb;
    opacity: 0.8;
  }
  input[type=button]{
     display: inline-block;
     margin-left: 75px;
     padding: 5px 20px;
     border:none;
     outline: none;
     border-radius: 5px;
     background-color: #049cdb;
     color: #fff;
     border: none;
     outline: none;
  }
  input[type=button]:hover{
     opacity: .9;
  }

  .f{
     display: inline-block;
     text-align: center;
     min-width: 70px;
     margin-top: 20px;
  }
  #other{
    margin-left: 75px;
    font-size: 12px;
    height: 30px;
  }
  #other #go-enroll{
    float:left;
  }
  #other #forget-password{
    float: right;
    margin-right: 30px;
  }
  #more-login{
    padding-left: 20px;

  }
  #more-login a:hover{
      opacity: .8;
  }

  /*input{
     padding-left: 2px;
  }
  input[type=submit]{
     display: inline-block;
     margin-left: 70px;
     padding: 5px 20px;
     border:none;
     outline: none;
     border-radius: 5px;
     background-color: #000;
     opacity: 0.7;
     color: #fff;
     -webkit-transition: opacity .5s linear;
     -o-transition: opacity .5s linear;
     transition: opacity .5s linear;
  }
  input[type=submit]:hover{
     opacity: .9;
  }

  .f{
     display: inline-block;
     text-align: center;
     min-width: 70px;
     margin-top: 20px;
  }*/


</style>
