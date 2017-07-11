<template>

	<div id="myimg">
    
     <template v-for="(item,key,index) in mydata">
         <Img1 
             :id = "item.id"
             :mainimg="item.img"  
             :maincontent="item.content"  
             :fnum="item.fnum"
             :readnum="item.readnum" 
             :commentnum="item.commentnum" 
             :textid="item.id"
             :goodnum="item.goodnum"
             :time="item.time"

             @share="share"
             @mystore="mystore"
             @good="good"
             @off="off"
             @bigimg="bigimg">
         </Img1> 
     </template>
      
    
	</div>


</template>

<script>
import Img1 from "./Img.vue"	
export default {
    name: "myimg" ,
    data(){
    	return {
    	   mydata:[{
            'id': 13765,
            'readnum': 231,
            'commentnum': 100,
            'goodnum': 123,
            'fnum': 82,
            'title': "这是一个标题1",
            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描",
            'img':["/static/assets/1_2.jpg","/static/assets/1_3.jpg","/static/assets/1_2.jpg"],
            'time': "2017-04-12 13:34:27"
           },{
             'id': 14791,
            'readnum': 121,
            'commentnum': 10,
            'goodnum': 13,
            'fnum': 82,
            'title': "这是一个标题2",
            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本",
            'img':["/static/assets/1_3.jpg","/static/assets/1_2.jpg","/static/assets/1_1.jpg",
                   "/static/assets/1_3.jpg",
                   "/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",
                   "/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",],
             'time': "2017-01-19 19:38:47"
           },{
             'id': 12763,
            'readnum': 131,
            'commentnum': 101,
            'goodnum': 131,
            'fnum': 172,
            'title': "这是一个标题3",
            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本",
            'img':["/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",
                   "/static/assets/1_3.jpg"],
             'time': "2017-05-18 19:38:47"
           },{
            'id': 14741,
            'readnum': 121,
            'commentnum': 10,
            'goodnum': 13,
            'fnum': 82,
            'title': "这是一个标题4",
            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本",
            'img':["/static/assets/1_2.jpg","/static/assets/1_3.jpg","/static/assets/1_1.jpg",
                   "/static/assets/1_3.jpg","/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",
                   "/static/assets/1_3.jpg","/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",
                   "/static/assets/1_3.jpg"],
             'time': "2017-05-18 19:38:49"
           },{
            'id': 14742,
            'readnum': 121,
            'commentnum': 10,
            'goodnum': 13,
            'fnum': 82,
            'title': "这是一个标题5",
            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本",
            'img':["/static/assets/1_3.jpg","/static/assets/1_1.jpg","/static/assets/1_2.jpg",
                   "/static/assets/1_3.jpg","/static/assets/1_2.jpg"],
             'time': "2017-05-18 19:38:49"
           }

           ]
    	}
    },
    computed:{

    },
    methods:{
      share:function(id,message){
         // var id = arguments[0];
         // var message = arguments[1];

      },
      mystore:function(id){
        
      },
      good:function(id){
         
         
      },
      off:function(){
         
      },
      bigimg:function(id){
         var that = this;
         this.mydata.forEach(function(item,i){
             if(item.id == id){
                 that.$store.dispatch("getImgData",item)
             }
         })
      }
    },
    components:{
       Img1: Img1
    }
  
}

</script>
<style scoped>



</style>