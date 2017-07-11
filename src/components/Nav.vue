<template>
<!-- 包围盒开始 -->
  <div id="wrapper">

    <router-link to="/home/myimg">               
        <div class="mybtn"  v-bind:style="{ backgroundColor: activeColor }">
          <i class="glyphicon glyphicon glyphicon-circle-arrow-right"></i><span>推荐</span>
        </div>    
    </router-link>


    <router-link to="/home/myzixun" >
        <div class="mybtn" v-bind:style="{ backgroundColor: activeColor1 }">
           <i class="glyphicon glyphicon glyphicon-circle-arrow-right"></i><span>图说</span>
        </div>
    </router-link>

  </div>
<!-- 包围盒结束 -->
</template>

<script>
export default {
  name: 'wrapper',
  data(){
    return{
      activeColor: '#337ab7',
      activeColor1: '#ccc'
    }
  },
  watch:{
     '$route':function(to,from){

         if(to.path=="/home" || to.path=="/" || to.path=="/home/myimg" ){
             this.activeColor =  '#337ab7';
             this.activeColor1 = '#ccc';
         }else if(to.path=="/home/myzixun"){
            this.activeColor =  '#ccc';
            this.activeColor1 =  '#337ab7';
         }else{
              this.activeColor =  '#337ab7';
              this.activeColor1 = '#ccc';
         }
     }
  },
  components: {
    
  }
}
</script>

<style scoped>
  .mybtn{
    background-color:#ccc;
    padding: 5px 10px;
    width: 60%;
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
     margin-left: 20px;
  }

</style>