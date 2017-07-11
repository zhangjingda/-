<template>
  <normal-dialog v-on:off="hide">
      <div>1&nbsp;淫秽色请</div>
      <div>2&nbsp;广告</div>
      <div>3&nbsp;不喜欢</div>
  </normal-dialog>
</template>

<script>
import normalDialog from "./normalDialog.vue"
export default {
    name : 'enroll',
    components:{
      normalDialog: normalDialog
    },
    methods : {
       hide:function(){
          this.$emit("off",2);
       }
      
    }
}

</script>
<style scoped>


</style>

