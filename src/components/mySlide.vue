<template>
  <div class="row slide">
    <a href="#" v-for="(imgSrc,index) in imgArr" :key="index" :style="{...slideStyle[index]}" @mouseenter="stopMove" @click.prevent="clickImg(index)" @mouseleave="startMove">
      <img class="slide-img" :src="imgSrc" alt="云智网络工作室"  /> 
    </a>
      <span class="glyphicon glyphicon-chevron-left"  v-show="showBtn" @click="clickLeft">
        </span>
         <span class="glyphicon glyphicon glyphicon-chevron-right" v-show="showBtn"  @click="clickRight" >
        </span>
  </div>
</template>
<style lang="less" scoped>
.row.slide {
  height: 260px;
  position: relative;
  .glyphicon{
      position: absolute;
      z-index: 999999;
      opacity: 0.3;
      font-size: 30px;
          top:45%;
          background-color: #fff
  }
  .glyphicon-chevron-left{
      left: 30%
  }.glyphicon-chevron-right{
   right: 30%
  }
  a {
    display: inline-block;
    position: absolute;
    left: 50%;
    top: 50%;
   transform:translate(-50%,-50%);
    width: 500px;
    height: 260px;
    .slide-img {
      width: 100%;
      height: 100%;
    }
  }
  
}
 @media screen  and (max-width: 750px){
  .row.slide{
    height: 150px;
a{
      height: 150px !important;
    }
  }  
   }
</style>
<script>
export default {
  props: ["imgArr"],
  data() {
    return {
      curIndex: 1,
      slideStyle: [
        {
          left: "15%",
          zIndex: 10,
          opacity: 0.5,
          width: "30%",
          height: "180px",
        },
        {
          width: "50%",
          height: "260px",
          left: "50%",
          zIndex: 100,
          opacity: 1,
        },
        {
          left: "85%",
          zIndex: 10,
          opacity: 0.5,
          width: "30%",
          height: "180px"
        }
      ],
      timer: null,
      direct: "nomal",
      moving: [false,false,false],
      showBtn:false,
      showTimer:null
    };
  },
  methods: {
    move(dir) {
      if(dir == 'left'){
          this.timer = setInterval(()=>{
             for(var i = 0 ; i < this.moving.length;i++){
                 if(this.moving[i]){
                     return;
                 }
             }
               this.moving =this.moving.map(ele => {
                  return true
              });
              this.slideStyle.forEach(ele => {
                  if(ele.left == '15%'){
                      this.animate(ele,'right');
                  }else if(ele.left == '85%'){
                      this.animate(ele,'middle');
                  } else{
                       this.animate(ele,'left');
                  }
              });
          },4000)
      }else{
             this.timer = setInterval(()=>{
             for(var i = 0 ; i < this.moving.length;i++){
                 if(this.moving[i]){
                     return;
                 }
             }
               this.moving =this.moving.map(ele => {
                  return true
              });
              this.slideStyle.forEach(ele => {
                  if(ele.left == '15%'){
                      this.animate(ele,'middle');
                  }else if(ele.left == '85%'){
                      this.animate(ele,'left');
                  } else{
                       this.animate(ele,'right');
                  }
              });
          },4000)
      }
    },
    animate(sty, dir) {
      if (dir == "left" || dir == "right") {
        sty.zIndex = 10;
        var timer = setInterval(() => {
          var moving = true;
          for (var key in sty) {
            if (key == "opacity") {
              if (sty[key] > 0.5) {
                sty[key] =
                  (sty[key] * 100 - Math.ceil((sty[key] * 100 - 50) / 10)) / 100;
                moving = false;
              }
            } else if (key == "width") {
              var curWidth = parseInt(sty[key]);
              if (curWidth > 30) {
                moving = false;
                sty[key] = curWidth - Math.ceil((curWidth - 30) / 10) + "%";
              }
            } else if (key == "height") {
              var curHeight = parseInt(sty[key]);
              if (curHeight > 180) {
                moving = false;
                sty[key] = curHeight - Math.ceil((curHeight - 180) / 10) + "px";
              }
            } else if (key == "left") {
              var curLeft = parseInt(sty[key]);
              if (dir == "right") {
                if (curLeft < 85) {
                  moving = false;
                  sty[key] = curLeft - Math.floor((curLeft - 85) / 10) + "%";
                }
              } else {
                if (curLeft != 15) {
                  moving = false;
                  sty[key] = curLeft - Math.ceil((curLeft - 15) / 10) + "%";
                }
              }
            } else {
            }
          }
          if (moving == true) {
            clearInterval(timer);
            if(dir =='left'){
                this.moving[0] =false;
            }else{
                 this.moving[1] =false;
            }
          }
        }, 30);
      } else {
        var timer = setInterval(() => {
          sty.zIndex = 999;
          var moving = true;
          for (var key in sty) {
            if (key == "opacity") {
              if (sty[key] != 1) {
                sty[key] =
                 parseInt( (sty[key] * 100) - Math.floor((sty[key] * 100 - 100) / 10)) /
                  100;
                moving = false;
              }
            } else if (key == "width") {
              var curWidth = parseInt(sty[key]);
              if (curWidth != 50) {
                moving = false;
                sty[key] = curWidth - Math.floor((curWidth - 50) / 10) + "%";
              }
            } else if (key == "height") {
              var curHeight = parseInt(sty[key]);

              if (curHeight != 260) {
                moving = false;
                sty[key] =
                  curHeight - Math.floor((curHeight - 260) / 10) + "px";
              }
            } else if (key == "marginTop") {
              var curTop = parseInt(sty[key]);

              if (curTop != -130) {
                moving = false;
                sty[key] = curTop - Math.ceil((curTop + 130) / 10) + "px";
              }
            } else if (key == "marginLeft") {
              var curmLeft = parseInt(sty[key]);
              if (curmLeft != -250) {
                moving = false;
                sty[key] = curmLeft - Math.ceil((curmLeft + 250) / 10) + "px";
              }
            } else if (key == "left") {
              var curLeft = parseInt(sty[key]);
            
              if (curLeft != 50) {
                moving = false;
                if (curLeft < 50) {
                sty[key] = curLeft - Math.floor((curLeft - 50) / 10) + "%";
                }else{
                      sty[key] = curLeft - Math.ceil((curLeft - 50) / 10) + "%";
                }
              }
            } else {
            }
          }
          if (moving == true) {
            clearInterval(timer);
            this.moving[2] = false; 
          }
        }, 30);
      }
    },
    stopMove(){
        this.showBtn = true;
        clearInterval(this.timer);
        clearTimeout(this.showTimer)
    },
    startMove(){ 
        this.showTimer = setTimeout(()=>{
            this.showBtn = false;
        },300) 
        this.move('left');
    },
    clickLeft(){
             for(var i = 0 ; i < this.moving.length;i++){
                 if(this.moving[i]){
                     return;
                 }
             }
               this.moving =this.moving.map(ele => {
                  return true
              });
         this.slideStyle.forEach(ele => {
                  if(ele.left == '15%'){
                      this.animate(ele,'middle');
                  }else if(ele.left == '85%'){
                      this.animate(ele,'left');
                  } else{
                       this.animate(ele,'right');
                  }
              });
    },
    clickRight(){
             for(var i = 0 ; i < this.moving.length;i++){
                 if(this.moving[i]){
                     return;
                 }
             }
               this.moving =this.moving.map(ele => {
                  return true
              });
          this.slideStyle.forEach(ele => {
                  if(ele.left == '15%'){
                      this.animate(ele,'right');
                  }else if(ele.left == '85%'){
                      this.animate(ele,'middle');
                  } else{
                       this.animate(ele,'left');
                  }
              });
    },
    clickImg(index){
      if(index == 0 ){
       this.$router.push({ path: '/home' })
      }else if(index == 1){
         this.$router.push({ path: '/work' })
      }else{
         this.$router.push({ path: '/about' })
      }
    }
  },
  computed: {},
  mounted() {
  this. move('left')
  }
};
</script>