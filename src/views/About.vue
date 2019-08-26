<template>
  <div class="about">
     <h4>
      关于本站
    </h4>
    <p >
      本站全部内容为博主自主研发，其中大部分模仿WordPress欲思主题|前端采用bootstrap+vue单页面模式。
      <br>
      后端采用nodejs的express框架,
       <br>
      数据库采用MySQL。
      <br>
      博客的后台管理根据实际需求采用jQuery和Vue。
       <br>
      服务器采用Linux-centos7,腾讯云
      <br>
      代码已上传至gitHub可以@我要地址。
    </p>
    <hr />
    <h4>
      关于自己
    </h4>
    <p>
      个人简介
    </p>
    <div style="text-align:center">
      <img :src="myTx" alt="" srcset="">
    </div>
    <h5>
      我的技能树
    </h5>
    <h5 class="skill">
      前端：原生js、jQuery、Vue、React
    </h5>
      <h5 class="skill">
       微信小程序
    </h5>
      <h5 class="skill">
      后端：nodejs开发
    </h5>
      <h5 class="skill">
      数据库：MySQL
    </h5>
     <h5 class="skill">
      linux服务器：Centos7
    </h5>
       <h5 class="skill">
    photoShop
    </h5>
       <h5 class="skill">
         Axure RP 原型设计
    </h5>
      <h5>
      开发经验
    </h5>
    <h5 class="skill">
        网站平台搭建
    </h5>
     <h5 class="skill">
        webApp开发
    </h5>
      <h5 class="skill">
        AO系统开发
    </h5>
      <h5 class="skill">
        企业级官网
    </h5>
     <h5 class="skill">
       jQuery、Vue组件开发、React组件开发
    </h5>
     <h5 class="skill">
       ...更多技能领悟中...
    </h5>
     <h5>
       联系我
    </h5>
      <h5 class="skill">
     微信号：zhu2811698749
    </h5>
       <h5 class="skill">
     QQ：2811698749
    </h5>
  </div>
</template>
<style lang="less" scoped>
.about{
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
  h5.skill{
    background-color: #81C1F2;
  }
  p{
    text-align: left;
    font-size:16px;
    font-weight:500; 
    line-height: 40px;
    padding-left:10px;
  }
  div{
    padding:10px;
    text-align: center;
    background: #eee;
    img{
      width: 200px;
      height: 150px;
      border-radius: 50%;
    }
  }
}
 
</style>
<script>
export default {
  data(){
    return{
      myTx:require('../assets/images/tx.jpg')
    }
  }
}
</script>
