<template>
  <div class="row recently">
    <h4 :style="{color:titleColor}">文章点击量排行</h4>
    <div class="rencently-rank" v-for="(rencent,index) in recentlyList " :key="rencent.idblog" @click="getDetail(rencent.idblog)">
      <span
        class="h4"
        :class="{'rencently-rank-1':index ==0,'rencently-rank-2':index ==1,'rencently-rank-3':index ==2,
       }"
      >{{index+1}}</span>
      <span class="rencently-title">{{rencent.title.slice(0,23)}}...</span>
      <span class="views" >点击量:{{rencent.views}}</span>
    </div>
  </div>
</template>
<script>
import { setInterval } from "timers";
import axios from 'axios';
export default {
  data() {
    return {
      recentlyList: [
        {
          id: 10001,
          title: "闭包全方位讲解，深度排雷！",
          views:213
        },
        {
          id: 10002,
          title: "最近更新javascript入门基础",
            views:213
        },
        {
          id: 10003,
          title: "jquery框架剖析，写出自己的jquery!"
        },
        {
          id: 10004,
          title: "linux--centos服务器，手把手教你部署网站！"
        },
        {
          id: 10005,
          title: "ES6之什么是语法糖~"
        }
      ],
      colorArr: [0, 166, 124]
    };
  },
  computed: {
    titleColor() {
      return `rgb(${this.colorArr[0]},${this.colorArr[1]},${this.colorArr[2]})`;
    }
  },
  methods: {
    randomColor() {
      var arr = [];
      if (this.colorArr[0] < 200) {
        arr.push(++this.colorArr[0]);
      } else {
        arr.push(0);
      }
      if (this.colorArr[1] > 0) {
        arr.push(--this.colorArr[1]);
      } else {
        arr.push(255);
      }
      if (this.colorArr[2] < 200) {
        arr.push(++this.colorArr[2]);
      } else {
        arr.push(0);
      }
      this.colorArr = arr;
    },
     getDetail(idblog){
       this.$store.commit('pushTags');
   this.$router.push({
   name: 'detail',
   params: {
     id: idblog
   }
 })}
  },
  mounted() {
    setInterval(() => {
      this.randomColor();
    }, 100);
    axios.get('/getArticleRank').then(res => {
      this.recentlyList = res.data.data;
    })
  }
}
</script>
<style lang="less" scoped>
.row.recently {
  h4 {
    color: #00a67c;
    padding: 10px 0px;
    border-bottom: 2px solid #ccc;
  }
  .rencently-rank {
    cursor: pointer;
    .h4 {
      display: inline-block;
      border-radius: 2px;
      color: #fff;
      width: 30px;
      padding: 2px 0px;
      text-align: center;
      margin-right: 5px;
      background-color: #999999;
      vertical-align: 10px;
      font-size: 16px;
    }
    .rencently-rank-1 {
      background-color: #d56464;
    }
    .rencently-rank-2 {
      background-color: #6fc299;
    }
    .rencently-rank-3 {
      background-color: #81c1f2;
    }
    .rencently-title {
      display: inline-block;
      height: 30px;
      line-height: 30px;
      font-size: 15px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    .views{
     float:right;
     font-size:12px;
     color:#999;
     height: 41px;
     line-height: 41px;
    }
  }
}
</style>
