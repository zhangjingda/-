<template>
	<div id="normalDialog">
	   <div id="mask"></div>
	   <div id="content">
	      <div class="close" @click="hide">X</div>
	      <slot>在这里填充内容...</slot>
	   </div>
	</div>
</template>

<script>
	
export default{
   name: "normalDialog",
   methods:{
   	  hide:function(){
   	  	 this.$emit("off");
   	  }
   }
}

</script>

<style scoped>

  #normalDialog{
	
  }
  #mask{
    position: fixed;
    top:0;
    left:0;
    width: 100%;
    height: 100%;
    background-color: #000;
    opacity:0.6;
    z-index: 50;
  }
  #content{
     margin: 0 auto;
     position: fixed;
     left:50%;
     top:50%;
     -webkit-transform: translate(-50%, -50%);
     -moz-transform: translate(-50%, -50%);
     -ms-transform: translate(-50%, -50%);
     -o-transform: translate(-50%, -50%);
     transform: translate(-50%, -50%);
     padding: 50px;
     border-radius: 10px;
     box-shadow:  0 0 10px #000;
     background-color: #fff;
     z-index: 80;
  }
  
  .close{
    margin-right:3px;
    margin-top: 3px;
    position: absolute;
    padding: 5px;
    top:0;
    right: 0;
  }

</style>