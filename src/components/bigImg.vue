<style scoped>
    a{
    	color: #000;
    	text-decoration: none;
    }
    a:hover{
    	text-decoration: none;
    	color: #08c;
    }
    img:hover{
    	opacity: .8;
    }
	.wrapper{
		position: absolute;
		left: 10%;
		height: 400px;
		margin-top: -35px;
		width: 600px;
		float: left;
	}
	#showbigimg{
		/*transition: all .5s;*/
		position: relative;
		/*animation: imgAnimation .5s linear forwards;*/
	}
	.image-animation{
		animation: imgAnimation  .5s ;
	}
	@keyframes imgAnimation{
		0%{
           /*opacity: 0*/
           height: 0;
		}
		
		100%{
           /*opacity: 1.0;*/
		}
	}
	#smallimg-wrapper{
		width: 600px;
		height: 90px;
		display: flex;
		flex-wrap: nowrap;
		justify-content: space-between;
		padding:10px 0px;
		margin-left: 4px;
		margin-right: -3px;
		overflow: hidden;
		position: relative;
		border:1px solid rgba(0,0,0,0);

	}
	#smallimg-wrapper img{
		padding-right: 2px;
		
	}
	.small-img{
		width: 116px;
		height: 78px;
	}
	#leftArrow{
		position:absolute;
		margin-top:10px;
		left:0;
		opacity: .4;
		z-index: 100;
	}
	#leftArrow:hover{
		cursor: pointer;
		opacity: .8;
	}
	#rightArrow{
		position:absolute;
		margin-top:10px;
		right:0;
		opacity: .4;
		z-index: 100;
	}
	#rightArrow:hover{
		cursor: pointer;
		opacity: .8;
	}
	#img-wrapper{
		position: absolute;
		transition: left .5s;
		left: 0;
		right: 0;
	}

	#rigwrapper{
        width: 400px;
        height:500px;
        float: right;
        margin-top: -35px;
        padding-left: 20px;
        overflow-x: hidden;
        overflow-y: auto;
        position: relative;

	}
	#rigwrapper button{
	   float: right;
	}
	#rigwrapper .more{
		border: none;
		outline: none;
		padding:0;
		background-color: #fff;
		height: 14px;
		font-size: 10px;
		color: #f00;
		position: absolute;
		display: inline-block;
		left: 220px;
		width:25px;
	}
	#rigwrapper .author{
		margin-left: 12px;
		display: inline-block;
		vertical-align: 5px;
		position: relative;
	}
	#rigwrapper .author-abstract{
       position: absolute;
       top:20px;
       left:0;
       font-size: 10px;
       width: 220px;
       height: 14px;
       overflow: hidden;
       text-overflow: ellipsis;
       white-space: nowrap;
	}
	#rigwrapper .morediv{
       position: absolute;
       width: 235px;
       min-height: 100px;
       border:1px solid #ccc;
       left: 75px;
       border-radius: 5px;
       box-shadow: 0 0 10px #ccc;
       padding:5px;
       font-size: 10px;
       background-color: #fff;
	}
	#rigwrapper .content-abstract{
		width: 100%;
		margin-top: 30px;
	}
	#rigwrapper .content-abstract h4{
		padding-left:5px;
		border-left:3px solid #f00;
	}
	#rigwrapper .content-abstract p{
		line-height: 1.5em;
		text-indent: 2em;
		font-size: 12px;
		font-family: "Microsoft YaHei", "arial";
	}
    .author-more-icon{
       float: right;
    }
	.author-more-wrapper{
		width: 100%;
		margin-top:10px;
		overflow: hidden;
	}
	.author-more-wrapper img{
		float: left;
		width: 70px;
		padding: 0 10px 10px 0;
	}
	.author-more-wrapper h5{
		font-weight: bold;
		margin:0;
		margin-bottom: 5px;
		width:280px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.author-more-wrapper p{
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		width:280px;
		text-indent: none;
	}
	#gotop{
		position: fixed;
		width: 40px;
		height: 40px;
		bottom: 30px;
		right: 10px;
		text-align: center;
		line-height: 40px;
		border-radius: 50%;
		background-color: #ccc;
	}
	#gotop:hover{
		cursor: pointer;
		opacity: .8;
	}




</style>
<template>
  <div id="bigimg">
    
    <div id="return" @click="ret"><a href="javascript:void(0)">返回</a></div>
    <!-- 包围盒开始 -->
    <div class="wrapper" id="wrapper">
        <img :src="imgdata.img[2]" alt="error" height="400" width="600" id="showbigimg"/><br/>
        <div id="smallimg-wrapper">
            <img src="/static/assets/weixin.jpg" id="leftArrow" width="30" height="60" @click="left">
            <img src="/static/assets/weixin.jpg" id="rightArrow" width="30" height="60" @click="right">
            <div id="img-wrapper">
	        	<img :src="item" alt="error" class="small-img" v-for="(item,i) in imgdata.img"/>
        	</div>
        </div>

     <!--  <div class="content-abstract">
      	<h4>内容概要</h4>
      	<p>
      		{{imgdata.content}}
      	</p>
      </div> -->


    </div>
    <!-- 包围盒结束 -->
    <div id="rigwrapper">
      <img src="/static/assets/1_1.jpg" width="40" height="40"/>
      <span class="author">千山萧瑟<span class="author-abstract">
      	著名旅行家，26年来走遍了世界的每个角落，去过最低哇出，也去过世界最高处，享受旅行，享受生活
      </span>
      <button class="more" type="button" @click="more" v-if="moreAuthorMes">更多</button>
      </span>
      <button type="button" class="btn btn-primary">关注</button>
      <div class="morediv" v-if="moredivstate">
         <div class="close" style="padding:0px 3px 3px 3px" @click="setMoredivState">x</div>
         <h5>千山萧瑟</h5>
         <h6>用户简介:</h6>
         <p>千山萧瑟,真实姓名,刘和章,著名旅行家，26年来走遍了世界的每个角落，去过最低哇处，也去过世界最高处，享受旅行，享受生活</p>
      </div>

      <div class="content-abstract">
      	<h4>内容概要</h4>
      	<p>
      		{{imgdata.content}}
      	</p>
      </div>
     

      <div class="content-abstract" style="position: relative">
        <div class="author-more-icon"><a href="">更多&gt;&gt;</a></div>
      	<h4>作者发布</h4>
      	
      	<div class="author-more-wrapper" style="margin-top:20px;">
      		<a href=""><img src="/static/assets/1_2.jpg"/></a>
      		<a href=""><h5>{{imgdata.id}}</h5></a>
      		<a href=""><p style="text-indent:0">这是简单的内容介绍这是简单的内容介绍</p></a>
      	</div>
      	<div class="author-more-wrapper">
      		<a href=""><img src="/static/assets/1_2.jpg"/></a>
      		<a href=""><h5>{{imgdata.id}}</h5></a>
      		<a href=""><p style="text-indent:0">这是简单的内容介绍这是简单的内容介绍</p></a>
      	</div>
      	<div class="author-more-wrapper">
      		<a href=""><img src="/static/assets/1_2.jpg"/></a>
      		<a href=""><h5>{{imgdata.id}}</h5></a>
      		<a href=""><p style="text-indent:0">这是简单的内容介绍这是简单的内容介绍</p></a>
      	</div>

      </div>

      <div class="content-abstract">
      	<h4>精彩评论</h4>
      	<mycomment @totop="toTop" @huifu="huifu" id="mycom"></mycomment>
      </div>

      <div id="gotop" @click="gotop">Top</div>

      <div class="content-abstract">
      	<h4>系统推荐</h4>
      	<p>
      		{{imgdata.content}}
      	</p>
      </div>


    </div>
    
  </div>
</template>
<script >
import mycomment from "./comment.vue"	

	export default{
		data(){
			return{
				index: 2,
				moreAuthorMes:true,
				moredivstate:false,
                imgdata:{
	             'id': 14791,
	            'readnum': 121,
	            'commentnum': 10,
	            'goodnum': 13,
	            'fnum': 82,
	            'content': "这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本这是一些描述文本",
	            'img':["/static/assets/1_3.jpg","/static/assets/1_2.jpg","/static/assets/1_1.jpg",
	                   "/static/assets/1_3.jpg",
	                   "/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",
	                   "/static/assets/1_1.jpg","/static/assets/1_2.jpg","/static/assets/1_3.jpg",],
	             'time': "2017-01-19 19:38:47"
	           }
			}
		},
		
		mounted:function(){
			 this.imgdata = this.$store.state.imgdata;
			 var that = this;
             var node1 = document.querySelectorAll(".small-img"); 
             node1[2].style.border = "1px solid #f00";
             document.getElementById("img-wrapper").onclick = function(e){
                 var node = document.querySelectorAll(".small-img");
                 for(var i=0;i<node.length;i++){
			        node[i].style.border="none";
			     }
			     for(var i=0;i<node.length;i++){
                	if(node[i] == e.target){
                		e.target.style.border = "1px solid #f00";
                        that.index = i;
                        document.getElementById("showbigimg").src = ""
                        document.getElementById("showbigimg").src=that.imgdata.img[that.index];
                        
                	}
                 }


             }


           
		},
		components:{
           mycomment: mycomment
		},
	    // beforeRouteEnter (to, from, next) {
    
  
     //      next();
	    // },
	    // beforeRouteUpdate (to, from, next) {
	    // // 在当前路由改变，但是该组件被复用时调用
	    // // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
	    // // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
	    // // 可以访问组件实例 `this`
	    // },
	    // beforeRouteLeave (to, from, next) {
	    // // 导航离开该组件的对应路由时调用
	    // // 可以访问组件实例 `this`
	    //  next();
	    // },
	    methods:{
           ret:function(){
           	  this.$router.go(-1);
           },

           more:function(){
              this.moreAuthorMes = false;
              this.moredivstate = true;
           },
           setMoredivState:function(){
              this.moredivstate = false;
              this.moreAuthorMes = true;
           },
           toTop:function(){
           	
               document.getElementById("rigwrapper").scrollTop = 480;
           },
           gotop:function(){
               document.getElementById("rigwrapper").scrollTop = 480; 
           },
           huifu:function(y){
           	    var temp = document.getElementById("mycom").offsetTop;
           	    // alert(temp)
                document.getElementById("rigwrapper").scrollTop = temp+y-130;
           },
           left:function(){
           	   
               var node = document.getElementById("img-wrapper");
               var node1 = document.querySelectorAll(".small-img");
               
               if(!node.style.left){
                 	node.style.left = "0";  
               }
               for(var i=0;i<node1.length;i++){
               	  node1[i].style.border="none";
               }
               this.index++;
               if(this.index >= node1.length)this.index = node1.length-1;
               node1[this.index].style.border = "1px solid #f00";
               document.getElementById("showbigimg").src=this.imgdata.img[this.index];
               if(parseInt(node.style.left)<= -((node1.length-5)*124)){
                    return;
               }
               
               node.style.left = parseInt(node.style.left)-124+"px";
             
              

           },
           right:function(){
           	   var node = document.getElementById("img-wrapper");
           	   var node1 = document.querySelectorAll(".small-img");
               if(!node.style.left)node.style.left = "0";

               for(var i=0;i<node1.length;i++){
               	  node1[i].style.border="none";
               }
               this.index--;
               if(this.index<0)this.index = 0;
               node1[this.index].style.border = "1px solid #f00";
               document.getElementById("showbigimg").src=this.imgdata.img[this.index];

              
               if(parseInt(node.style.left)>=0){
                    return;
               }

               node.style.left = parseInt(node.style.left)+124+"px";
              
           

           }

	    }


	}

</script>
