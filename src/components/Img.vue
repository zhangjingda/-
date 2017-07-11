<template>

	<div id="singleimg">

        <span v-for="(item,key) in img">
            <span v-if=" key<3 ">
               <router-link to="/bigimg">
                 <img :src="item" alt="" width="200px" height="150px" @click="showBigImg(id, $event)">
               </router-link>
            </span>
        </span>

        <span v-show="showimg">
          <span v-for="(item,key) in img">
              <span v-if=" key>=3 ">
                 <router-link to="/bigimg">
                   <img :src="item" alt="" width="200px" height="150px" @click="showBigImg(id, $event)">
                </router-link>
              </span>
          </span>
        </span>


        <span class="moreimg" v-on:click="showImg" :style="{top: setImgTop +'px'}">
            <a href="javascript:void(0)" v-html="f1"></a>
        </span>
        <h4>这是标题文字</h4>
        <p>{{content | substr_longtext(num)}}<span class="more">
        <a href="javascript:void(0)" v-on:click="changeNum" v-html="f"></a></span></p>

        <div class="message">
             <span>来源 :</span>
             <a href="" ><img src="/static/assets/weixin.jpg" width="30" height="30"/>
             <span>千山幻影</span></a>

             <a href="javascript:void(0)"  @click="good" style="margin-left:70px;">
                <span class="good"></span>
                <span :style="{color:goodnum1color}" class="good-wrapper">
                    <span class="glyphicon glyphicon-thumbs-up" id="goodicon" :style="{color: mycolor}"></span>
                    <span id="goodnum" :style="{color: mycolor}">{{ goodnum1 }}</span>
                </span>
               
             </a>

            <a href="" id="zanshang"> 
            <img src="/static/assets/zanshang.png" width="20" height="20" style="opacity:.8" /><span>赞赏</span>
            </a>

        </div>
        
        <div class="wrapper">
          
        
        <span class="readnum">阅读数:</span><span class="read">{{readnum}}</span>
        <span class="commentnum">评论:</span><span class="comment"><a href="">{{commentnum}}</a></span>
        <span class="share">分享</span>
        <span class="glyphicon glyphicon-share" ></span>
        <a href=""><img src="/static/assets/weixin.jpg" width="20px" height="20px" @click.once="share('weixin',$event)"></a>
        <a href=""><img src="/static/assets/qq.jpg" width="20px" height="20px" @click.once="share('qq',$event)">
        </a>
       <a href=""> <img src="/static/assets/weibo.jpg" width="20px" height="20px" @click.once="share('weibo',$event)"></a>
       <span style="position:relative">
          <a href="javascript:void(0)" @click="moreShare($event)">
             <span class="caret"></span>
          </a>
       </span>
       <!-- <span class="glyphicon glyphicon-arrow-down"></span> -->
        <span class="store">收藏: </span>
        <span class="glyphicon glyphicon-heart heart" :style="{color: heartColor}" @click.once="changColor">
            
        </span>

        <a href="javascript:void(0)"><span class="jubao" @click="black">举报</span></a>

        <span class="time">{{time}}</span>

        </div>
       
      <span v-if="isshowblack"> 
          <Black @off="offblack"></Black>
      </span>

      <input type="hidden" :value="id">
       
     
	</div>


</template>

<script>
import Black from "./Black.vue"	
export default {
    name: "singleimg" ,
    props:['id','mainimg','maincontent','fnum', 'readnum', 'commentnum','textid','goodnum','time'],
    data(){
    	return {
      		img: this.mainimg,
      		content: this.maincontent,
      		num: this.fnum,
          num_temp: this.fnum,
      		f: "更多&gt;&gt;",
      		heartColor: "#000",
          showimg: false,
          setImgTop: 180,
          addTmgTop: 170,
          f1:"",
          goodnum1: this.goodnum,
          goodnum1color: "#000",
          isshowblack: false,
          mycolor: ""

    	}
    },
    created:function(){
       
    },
    mounted:function(){
        if(this.content.length<=this.num){
            this.f = "";
        }
        this.f1 =  "<span class='glyphicon glyphicon-arrow-down'>"+
               "</span>更多图片,共<span style='color:#f00'>"+this.img.length+"</span>张图片";
        if(this.img.length<=3){
               this.f1 = "";
        }
    },
    computed:{

    },
    methods:{
       changeNum:function(){
	        if(this.num!=this.content.length)this.num = this.content.length;
	       	else this.num = this.num_temp;
	       	if(this.f=="更多&gt;&gt;")this.f="折起";
	       	else this.f="更多&gt;&gt;";
       },
       changColor:function(){
       	   this.heartColor  = "#f00"
           var that  = this;
           this.$emit("mystore",that.textid);
       },
       showImg:function(){
           this.showimg = !this.showimg;

           var temp = Math.ceil(this.img.length/3);
           if(this.setImgTop == 180*temp-20){
               this.setImgTop = 180;
               this.f1 = "<span class='glyphicon glyphicon-arrow-down'>"+
               "</span>更多图片,共<span style='color:#f00'>"+this.img.length+"</span>张图片";
            }else{

               this.setImgTop = 180*temp-20;
               this.f1 = "<span class='glyphicon glyphicon-arrow-up'></span>收起图片";
           } 
       },
       share:function(message,event){
           var that  = this;
           this.$emit("share",that.textid,message);
       },
       moreShare:function(event){
           if(document.getElementById("temp-box")){
              var y = event.pageY;
              var node = document.getElementById("temp-box");
              var y1 = node.offsetTop;
              if(Math.abs(y1-y)>40){
                 document.body.removeChild(document.getElementById("temp-box"));
              }
              else{
                 node.style.display = "none";
              }
           } 
           if(!document.getElementById("temp-box")) {
               var box = document.createElement("div");
               box.id="temp-box";
               // box.style.width = "200px";
               // box.style.height = "200px";
               box.style.boxShadow= "0 0 5px #666";
               box.style.borderRadius = "5px"
               box.style.position = "absolute";
               box.style.backgroundColor ="#fff"
               var x = event.pageX;
               var y = event.pageY;
               box.style.top = y+20+"px";
               box.style.left = x-80+"px";
               box.style.padding="10px"
               box.innerHTML = "<a href=''><img src='/static/assets/weibo.jpg' width='50' height='50'/></a>"+
               "<a href=''><img src='/static/assets/weixin.jpg' width='50' height='50'/></a>"+
               "<a href=''><img src='/static/assets/qq.jpg' width='50' height='50'/></a>";
               document.body.appendChild(box);
           }
         
 

       },
       good:function(){
           if(this.mycolor.trim()=="#f00"){
              alert("你已经赞过了");
              return;
           }
           else this.mycolor = "#f00";
           this.goodnum1 = this.goodnum1+1;
           this.goodnum1color = "#f00";
           var that  = this;
           this.$emit("good",that.textid);
          
       },
       black:function(){
          this.isshowblack = true;
       },
       offblack:function(){
          this.isshowblack = false;
          var that  = this;
          this.$emit("black",that.textid,arguments[0])
       },
       showBigImg:function(id, event){
          this.$emit("bigimg",id);
       }
    },
    filters:{
       substr_longtext:function(value,num){
       	return value.substr(0,num);
       }
    },
    components:{
        Black:Black
    }
}

</script>
<style scoped>
 img:hover{
   opacity: .8;
 }
	#singleimg{
        width: 710px;
        border: 1px solid #eee;
        padding: 10px;
        margin-bottom: 50px;
        border-radius: 10px;
        box-shadow: 0 0 5px rgba(0, 0 , 235 , 0.1);
        position: relative;

	}
    .moreimg{
        position: absolute;
        right:30px;
    }
     .moreimg a{
         color: #000;
         font-size: 12px;
     }
	img {
		display: inline-block;
		margin-left: 20px;
    margin-top: 20px;
		
	}
  h4{
    margin: 20px 20px 0px 20px;
    padding-bottom: 0;
    font-weight: bold;
    /*border:1px solid #f00;*/
  }
	p{
		margin: 10px 20px 0px 20px;
		overflow:hidden;
		line-height: 1.5em;
		/*text-indent: 2em;*/
		/*white-space:nowrap; */
		/*text-overflow: ellipsis;*/
	}
    a:link{
       text-decoration: none; 
       color:#000;
    }
    a:visited{
        text-decoration: none;
    }
    a:hover{
        text-decoration: none;
    }
    
	a:active{
        text-decoration: none;
    }
	.more{
	   padding-left: 7px;
	}
	.more a{
		text-decoration: none;
		color:#f00;
	}

  .message{
    min-height: 50px;
    margin: 10px 20px 0px 20px;
    width: 90%;
    padding: 10px;
    font-size: 12px;
  }
  .message img{
     display: inline-block;
     vertical-align: -8px;
     margin:0;
     padding:0;
     margin-left: 5px;
  }
  .message a{
    color: #000;
  }
  .message a:hover{
    opacity: .8;
  }
  .message .good-wrapper{

  }

  .message #goodicon{
      color: #666;
      font-size: 20px;
  }
  .message #goodnum{
     color: #666;
     font-size: 14px;
  }
  .message #goodicon:hover{
      color: #f00;
  }
  .message #goodnum:hover{
      color: #f00;
  }
  
  #zanshang{
    margin-left: 120px;
  }
  #zanshang img{
    display: inline-block;
    vertical-align: -4px;
    margin-right: 2px;
  }
  #zanshang span:hover{
    color: #0f0;
  }

	.wrapper{
        margin: 20px;
        margin-bottom: 0;
        font-size: 12px;
        color: #666;
        opacity: .8;
	}
	.wrapper .read{
        display: inline-block;
        margin-right: 25px;
	}
	.wrapper .comment{
        display: inline-block;
        margin-right: 25px;
        color:#f00;
	}
  .wrapper .comment a{
    color: #666;
  }
  .wrapper .comment a:hover{
    color: #f00;
  }
	.wrapper img{
		margin-left: 0;
		border: none;
        margin-top: 0;
	}
	.wrapper .store{
		margin-left: 25px;
	}
	.wrapper .good{
		margin-left: 30px;
	}

	.wrapper .jubao{
		margin-left: 20px;
	}
	.wrapper .time{
		margin-left: 25px;
	}
    .wrapper .heart{
        font-size: 14px;
    }
	.wrapper .heart:hover{
		cursor: pointer;
	}


</style>