<template>
  <div class="surppot">
    <h4>赞助作者</h4>
    <h5>如果您喜欢我的文章，感觉我的文章对您有帮助，不妨动动您的金手指给予小额赞助，予人玫瑰，手有余香，不胜感激。</h5>
    <h5 class="pay-style">赞助方式一</h5>
    <p>手机支付宝扫一扫</p>
    <div class="pay-pic">
      <span class="pay-png pay-bao"></span>
    </div>
    <h5 class="pay-style">赞助方式二</h5>
    <p>微信扫一扫</p>
    <div class="pay-pic">
      <span class="pay-wei pay-weixin1"></span>
      <span class="pay-wei pay-weixin2"></span>
      <span class="pay-wei pay-weixin3"></span>
      <span class="pay-wei pay-weixin4"></span>
    </div>
    <p  style="margin-top:50px">
      自从当了程序员就没再踢过球，有一天我终于可以踢球了！
    </p>
    <div class="pay-pic" style="margin-top:20px">
      <img :src="gaoxiao" alt="" srcset="">
    </div>
  </div>
</template>
<style lang="less" scoped>
.surppot {
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
  h5 {
    text-align: center;
    font-size: 17px;
    line-height: 1.5;
  }
  p {
    text-align: center;
    font-size: 15px;
  }
  .pay-pic {
    text-align: center;
    .pay-png {
      display: inline-block;
      width: 200px;
      height: 200px;
    }
    .pay-bao {
      background-image: url("../assets/images/bao-any.png");
      background-size: 100% 100%;
      border-radius: 5px;
    }
    .pay-wei {
    display: inline-block;
      width: 150px;
      height: 150px;
      margin: 10px;
      background-size: 100% 100%;
      border-radius: 5px;
    }
    .pay-weixin1 {
      background-image: url("../assets/images/wei-1.png");
    }
    .pay-weixin2 {
     background-image: url("../assets/images/wei-2.png");
    }
    .pay-weixin3 {
      background-image: url("../assets/images/weixin-5.png");
    }
    .pay-weixin4 {
      background-image: url("../assets/images/wei-any.png");
    }
  }
  .pay-pic::after{
    content: '';
    display: block;
    clear: both;
  }
}
</style>

<script>
export default {
  data() {
    return {
      gaoxiao:  require("../assets/images/gaoxiao.gif")
    };
  }
};
</script>