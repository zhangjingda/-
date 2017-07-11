<template>
  <div class="container" >

   <template v-for="i in 7" >
     <div class="wrapper">
        <img src="/static/assets/1_1.jpg" width="30" height="30" alt="error"/>
        <div class="content">
            <div class="good">
               <a href="javascript:void(0)"><img src="/static/assets/dianzan.png" ><span class="goodnum">1234</span></a>
            </div>
            <h5> 这个家伙很懒</h5>
            <p>这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下</p>
            <div>
               <a href="javascript:void(0)"><span class="ret" @click="ret($event)">共5条回复</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href=""><span>回复</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="">举报</a></span>
               &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="time">
               2017-07-04 19:06:32
               </span>
            </div>
            <div class="more-comment">
                <div class="more-comment-wrapper">
                  <span class="username">这是用户1：</span>
                  <span>这是用户1的评论内容这是用户1的评论内容</span>
                </div>
                <div class="more-comment-wrapper">
                  <span class="username">这是用户1：</span>
                  <span>这是用户1的评论内容这是用户1的评论内容这是用户1的评论内容这是用户1的评论内容</span>
                </div>
                <div class="more-comment-wrapper">
                  <span class="username">这是用户1：</span>
                  <span>这是用户1的评论内容这是用户1的评论内容</span>
                </div>
            </div>


        </div>
     </div>

 </template>


     <div id="more-comment-div" >

         <div class="pre" @click="pre($event)"><a href="javascript:void(0)">&lt;</a></div>

         <div class="wrapper">
             <div class="one-comment" style="border-bottom:1px solid #ccc">
               <img src="/static/assets/1_1.jpg" width="30" height="30" alt="error" style="margin-left:5px;" />

               <div class="content" style="padding-left:20px;">
                 <div class="good" style="margin-right:35px;">
                    <a href="javascript:void(0)">
                       <img src="/static/assets/dianzan.png" ><span class="goodnum">1234</span>
                    </a>
                 </div>
	             <h5> 这个家伙很懒</h5>
	             <p>这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下
                 
	             </p>

                  <a href=""><span>回复</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="">举报</a></span>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="time">2017-07-04 19:06:32</span>
               </div>
             </div>


             <div class="one-comment">
               <img src="/static/assets/1_1.jpg" width="30" height="30" alt="error" style="margin-left:5px;" />

               <div class="content" style="padding-left:20px;">
                 <div class="good" style="margin-right:35px;">
                    <a href="javascript:void(0)">
                       <img src="/static/assets/dianzan.png" ><span class="goodnum">1234</span>
                    </a>
                 </div>
	             <h5> 这个家伙很懒</h5>
	             <p>这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下这是我发表的一些评论，没有什么特别的意义，纯粹是为了测试一下
                 
	             </p>

                  <a href=""><span>回复</span></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span><a href="">举报</a></span>
                   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="time">2017-07-04 19:06:32</span>
               </div>
             </div>

         </div>   
      
     </div>






</div>
</template>
<script>
	
     export default {
     	name: "comment",
     	data:function(){
     		return{
               scrollY: 0
     		}
     	},
     	methods:{
     		ret:function(e){
                var y = e.target.offsetTop;
                this.scrollY = Math.round(y);
                this.$emit("totop");
                var node =  document.getElementById("more-comment-div");
                node.style.animation = "swiper  1s forwards";
	            
     		},
     		pre:function(e){
     			var y = this.scrollY;
     			this.$emit("huifu", y);
     			document.getElementById("more-comment-div").style.animation = "swiper1  1s forwards";
     		}
     	}


     }


</script>
<style scoped>
	*{
		margin:0;
		padding:0;
	}
	a{
		color: #08c;
		text-decoration: none;
	}
	a:hover{
		text-decoration: none;
		opacity: .8;
	}
         .container{
              padding: 10px;
              font-family: "Times New Roman",Georgia,Serif;
              position: relative;
              width: 460px;
         } 
         .wrapper{
             margin-bottom: 40px;
         }
         .wrapper img{
         	float: left;
         }
         .wrapper .content{
         	margin-left: 20px;
         	width: 400px;
         	/*height: 200px;*/
         	font-size: 10px;
         	padding-left: 25px;
         	padding-right: 25px;
         }
         .wrapper .content .good{
         	position: absolute;
         	right: 100px;

         }
         .wrapper .content .good img{
         	width: 25px;
         	height: 25px;
         	display: inline-block;
         	margin-top: -8px;
         }
         .wrapper .content .good .goodnum{
         	display: inline-block;
         	margin-right: 4px;
         
         }
         .wrapper .content h5{
         	margin-top:0;
         	margin-bottom: 5px;
         	font-weight: bold;
         }
         .wrapper .content p{
         	line-height: 1.5em;
         	margin-bottom: 15px;
         	width: 85%;
         	
         }
         .content .more-comment{
         	margin-top:10px;
         }
         .content .more-comment .more-comment-wrapper{
            margin-bottom:10px;
            width: 270px;
            padding-left: 10px;
         }
         .content .more-comment .username{
            color: #f09;  
         }
         #more-comment-div{
         	width: 500px;
         	position: absolute;
         	top:0px;
         	left: 500px;
         	background-color: #eee;
         	font-size: 24px;
         }
         #more-comment-div .pre{
         	background-color: #eee;
         	padding: 3px 10px;
         	border-bottom: 2px solid #ccc;
         	margin-bottom: 10px;
         }
         .one-comment{
         	margin-bottom: 20px;
         }
      
         @keyframes swiper{
         	0%{}
         	100%{
         		left: 0px;
         	}
         }
         @keyframes swiper1{
         	0%{left: 0px}
         	100%{
         		left: 500px;
         	}
         }


</style>