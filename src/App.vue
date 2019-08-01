<template>
  <div id="app" class="container">
    <div class="row title">
      <h3>
        云智网络工作室
        <small>山东东营</small>
      </h3>
    </div>
    <div class="row welcome">
      <span class="glyphicon glyphicon-volume-up"></span>
      <span>欢迎来访~</span>
      <span>您的当位置: &nbsp;&nbsp;{{ $store.state.map }}</span>
    </div>
    <!-- 轮播区域 -->
    <my-slide :imgArr="imgArr" />
    <!-- 导航区域 -->
    <div class="row nav">
      <ul>
        <router-link tag="li" to="/home">首页</router-link>
        <router-link
          tag="li"
          class="pc-show"
          :to="{name:'article',params:{id:'javascript'}}"
        >Javascript</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article',params:{id:'html'}}">Html+css</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article',params:{id:'jquery'}}">jQuery</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article', params:{ id:'es6' }}">ES6/7</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article',params:{ id:'webpack' }}">Webpack</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article',params:{ id:'vue' }}">Vue</router-link>
        <router-link tag="li" class="pc-show" :to="{name:'article',params:{ id:'node' }}">Nodejs</router-link>
        <router-link
          tag="li"
          class="pc-show"
          :to="{name:'article',params:{ id:'centos' }}"
        >centos7建站</router-link>
        <router-link tag="li" :to="{name:'support'}">赞助作者</router-link>
        <router-link tag="li" to="/work">业务合作</router-link>
        <router-link tag="li" to="/about">关于</router-link>
        <router-link tag="li" class="pc-show" to="/msg">给我留言</router-link>
        <li class="phone-show phone-list" @click="showList">
          <span class="glyphicon glyphicon-list"></span>
          <dl v-if="showListFlag">
            <router-link tag="dd" :to="{name:'article',params:{id:'js'}}">Javascript</router-link>
            <router-link tag="dd" :to="{name:'article',params:{id:'html'}}">Html+css</router-link>
            <router-link tag="dd" :to="{name:'article',params:{id:'jquery'}}">jQuery</router-link>
            <router-link tag="dd" :to="{name:'article', params:{ id:'es6' }}">ES6/7</router-link>
            <router-link tag="dd" :to="{name:'article',params:{ id:'webpack' }}">Webpack</router-link>
            <router-link tag="dd" :to="{name:'article',params:{ id:'vue' }}">Vue</router-link>
            <router-link tag="dd" :to="{name:'article',params:{ id:'node' }}">Nodejs</router-link>
            <router-link tag="dd" :to="{name:'article',params:{ id:'centos' }}">centos7建站</router-link>
            <router-link tag="dd" to="/msg">给我留言</router-link>
          </dl>
        </li>
      </ul>
    </div>
    <div class="row">
      <div class="col-md-8">
        <transition name="fade">
          <keep-alive>
            <router-view></router-view>
          </keep-alive>
        </transition>
      </div>
      <div class="col-md-4">
        <!-- 排行 -->
        <recently></recently>
        <!-- 标签云 -->
        <div class="row search">
          <h4 class="search-title">随机标签云</h4>
          <ul>
            <li
              v-for="(tag,index) of randomTags"
              :key="index"
              :style="{color:randomRgb()}"
              @click="goToTags(tag)"
            >{{tag.tag}}</li>
          </ul>
        </div>
        <!-- 链接 -->
        <div class="row frendly">
          <h4>友情链接</h4>
          <ul>
            <li v-for="(friend) of friendlyList" :key="friend.id">
              <a :href="friend.link_url" target="_Blank">{{friend.link_text}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="row footer">
      <ul>
        <li>[站长统计]网站访问量：{{visitors}}</li>
        <li>本站采用技术框架 vue + bootstrap + nodejs +centos7服务器</li>
        <li>腾云云主机</li>
      </ul>
      <div
        class="footer-next"
      >Copyright © 2019-2022 云智网络工作室 &nbsp;&nbsp;&nbsp; 网站备案号： 鲁ICP备14017955号</div>
    </div>
  </div>
</template>
<style lang="less" scoped >
@import url("./assets/css/main.less");
</style>
<script>
import mySlide from "./components/mySlide";
import recently from "./components/rencently";
import axios from "axios";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      showListFlag: false,
      imgArr: [
        require("./assets/images/bander-1.jpg"),
        require("./assets/images//bander-2.jpg"),
        require("./assets/images/bander-3.jpg")
      ],
      tags: [],
      friendlyList: [],
      visitors:0
    };
  },
  computed: {
    ...mapGetters(["randomTags"])
  },
  components: {
    mySlide,
    recently
  },
  methods: {
    showList() {
      if (this.showListFlag) {
        setTimeout(() => {
          this.showListFlag = !this.showListFlag;
        }, 400);
      } else {
        this.showListFlag = !this.showListFlag;
      }
    },
    randomRgb() {
      return `rgb(${100 + parseInt(Math.random() * 150)},
      ${100 + parseInt(Math.random() * 150)},
      ${100 + parseInt(Math.random() * 150)})`;
    },
    goToTags(tag) {
      this.$router.push({
        name: "tags",
        params: {
          id: tag.tag
        }
      });
    }
  },
  mounted() {
    axios.get("/getFreidlyLinkList").then(res => {
      this.friendlyList = res.data.data;
    });
    this.$store.dispatch("getTags");
    axios.get('/getVisitTotalCount').then((res) => {
    this.visitors =  res.data && res.data[0] && res.data[0].sum;
  })
  }
};
</script>
