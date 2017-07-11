<template>

  <normal-dialog v-on:off="hide">
         <h3>欢迎注册</h3>
         <form id="form" action="" method="post" autocomplete="off" > 
           
           <div class="wrapper">  
             <span class="f">电话</span> 
             <input type="text" name="phone" placeholder="请输入你的电话号码" v-model="phone" @blur="checkPhone">
             <button  type="button" class="phonetip" disabled="disabled" id="phonetip" @click="getCheckCode">{{btnText}}</button><br>
             <div class="errortip">{{phone_error}}</div>
           </div>
           
           <div class="wrapper"> 
             <span class="f">验证码</span><input type="text" name="checkcode" placeholder="输入验证码" style="margin-left:4px;width:100px;" v-model="checkcode" @blur="checkCode">
             <div class="errortip">{{checkcode_error}}</div>
           </div>
          
           <div class="wrapper">
             <span class="f">用户名</span> <input type="text" name="username" placeholder="请输入用户名6-18位" 
             v-model="username" @blur="checkUsername">
             <div class="errortip">{{username_error}}</div>
           </div>
           
           <div class="wrapper">
             <span class="f">密码</span> <input type="password" name="password" placeholder="请输入密码6-18位" v-model="password" @blur="checkPassword">
             <div class="errortip">{{password_error}}</div>
           </div>
           
           <div class="wrapper">
           <span class="f">确认密码</span> <input type="password" name="cpassword" placeholder="请确认密码" 
           v-model="password1" @blur="checkPassword1">
           <div class="errortip">{{password1_error}}</div><br><br>
           </div> 

           <div class="wrapper" v-show="use_default_img">
           <span class="f">头像</span> <input type="file" name="file">
           <span class="f1">支持.jpg / .png ，大小小于1M</span>
           
           </div> 

           
           <div class="errortip" style="margin-left:75px;">
           <input type="checkbox" name="default_img" id="default_img" v-model="default_img">
             <span>使用默认图像</span>
           </div>

            
           <input type="checkbox" name="protocol" id="protocol" checked>同意<a href="">图舍</a><a href="">&lt;&lt;注册协议&gt;&gt;</a>
           <a href="">&lt;&lt;隐私协议&gt;&gt;</a>
           <br> 
           <input type="button" id="sub" @click="sub" value="注册">

        </form>
  </normal-dialog>


</template>
<script>
import normalDialog from "./normalDialog.vue"
export default {
        name : 'enroll',
        data:function(){
           return{

               phone: "",
               checkcode: "",
               username: "",
               password: "",
               password1: "",
               default_img: "",
               use_default_img: true,

               phone_error: "",
               checkcode_error: "",
               username_error: "",
               password_error: "",
               password1_error: "",
               default_img_error: "",

               btnText: "获取验证码",
               interval: null
            }
        },
        watch:{
           default_img:function(newval, oldvalue){
                if(newval){
                   this.use_default_img = false;
                }else{
                  this.use_default_img = true;
                }
           }
        },
        components:{
           normalDialog: normalDialog
        },
        methods : {
           hide:function(){
              this.$emit("off");
           },
           getCheckCode:function(){
               var node =  document.getElementById("phonetip")
              
                if(/^1[\d]{10}$/.test(this.phone)){
                    this.btnText ="60s后重试";
                    if(node.getAttribute("enabled"))node.removeAttribute("enabled");
                    if(!node.getAttribute("disabled"))node.setAttribute("disabled","disabled");
                    this.interval = setInterval(function(){
                       this.btnText = parseInt(this.btnText.trim())-1+"s后重试";
                       if(parseInt(this.btnText.trim())-1==0){
                             var node =  document.getElementById("phonetip")
                             if(!node.getAttribute("enabled"))node.setAttribute("enabled","enabled");
                             if(node.getAttribute("disabled"))node.removeAttribute("disabled");
                             this.btnText="获取验证码";
                             clearInterval(this.interval);
                       }
                    }.bind(this),1000)
                }else{
                    if(this.phone.trim()=="") this.phone_error = "电话号码不能为空";
                    else {
                       this.phone_error = "电话号码出错，请检查";
                    }

                }
           },
           sub:function(){
              if(this.checkPhone() && this.checkUsername() && this.checkPassword() && this.checkPassword1() && 
                this.checkCode()){

                if(document.getElementById("protocol").checked){
                    document.forms[0].submit();
                }else{
                  alert("请先同意注册协议和隐私协议")
                }

              }else{
                  alert("信息填写不完整或错误!");
              }
            
           },
           checkPhone:function(){

              var node =  document.getElementById("phonetip")
              if(/^1[\d]{10}$/.test(this.phone)){
                  
                  this.phone_error = "";
                  if(this.btnText.trim()!="获取验证码"){
                     return true;
                  }
                  if(node.getAttribute("disabled")){
                     node.removeAttribute("disabled");
                  }
                  if(!node.getAttribute("enabled"))
                  node.setAttribute("enabled","enabled");
                  return true;
                
              }else{
                 
                  this.phone_error = "";

                  if(this.phone.trim()=="") this.phone_error = "电话号码不能为空";
                  else {
                    this.phone_error = "电话号码出错，请检查";
                  }
                  if(this.btnText.trim()!="获取验证码"){
                     return false;
                  }

                  if(node.getAttribute("enabled"))node.removeAttribute("enabled");
                  if(!node.getAttribute("disabled"))node.setAttribute("disabled","disabled");
                  return false;

              }
              return false;
           },
           checkCode:function(){
               this.checkcode_error = "";
               if(this.checkcode.trim()==""){
                 this.checkcode_error="验证码不能为空";
                 return false;
               }
               else{
                  if(!/^\d{4}$/.test(this.checkcode)){
                     this.checkcode_error = "验证码错误";
                     return false;
                  }
                  return true;
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
           checkPassword1:function(){
              this.password1_error = "";
              if(this.password1.trim()==""){
                this.password1_error="密码不能为空";
                return false;
              }
              else{
                if(this.password!==this.password1){
                  this.password1_error = "密码和原密码不同，请检查";
                  this.password1 = "";
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
     margin-left: 70px;
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
  .f1{
     margin-left: 5px;
     font-size: 10px;
     color: #f00;

  }
  #default_img{
    width: 15px;
    height: 15px;
  }
  #protocol{
     width: 15px;
     height: 15px;
     margin-left: 75px;
     display: inline-block;
  }
  input[type=file]{
    width: 180px;
    height: 30px;
    display: inline-block;
  }


</style>
