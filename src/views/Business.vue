<template>
  <div class="business">
       <h4>
    业务合作
    </h4>
    <h5>
      一、网站整站建设
    </h5>
    <p>
         网站仿制、各行业门户响应式网站建设、微信小程序、webApp开发、企业内部管理系统开发
    </p>
    <h5>
      二、项目合作
    </h5>
     <p>
       项目合作开发，独立承担具体模块开发，组件、插件开发、前端框架研发及项目辅导
    </p>
     <h5>
      三、项目辅导
    </h5>
     <p>
         项目指导、重点难点技术突破，框架学习，web学习辅导
    </p>
     <h5 style="background-color:rgba(213,100,100,1)">
      联系我
    </h5>
     <p>
        电话：1865430721
    </p>
    <p>
        微信：zhu281168749
    </p>
    <p>
       <img :src="weixin" alt="" srcset="">
    </p>
  </div>
</template>

<script>

export default {
    data() {
      return {
        weixin:require('../assets/images/weixin.jpg')
      }
    },
}
</script>
<style lang="less" scoped>
.business{
background-color: #fff;
  border-radius: 10px;
  padding: 10px;
  h4 {
    height: 50px;
    font-size: 22px;
    line-height: 50px;
    width: 100%;
    border-bottom: 1px solid #ddd;
    font-weight: 400;
  }
   h5{
    font-size:16px;
    text-align: center;
    background-color: #00a67c;
    height: 40px;
    line-height: 40px;
    color:#fff;
    border-radius: 5px;
  }
  p{
    padding:10px;
    font-size:14px;
    text-align: center;
  }
  }
</style>
