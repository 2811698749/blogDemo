<template>
  <transition name="fade">
  <div class="article-list">
    <div class="article-list-top" @click="getDetail(article.idblog,article.tags)">
      <span class="article-list-type">
        <i class="article-list-num">{{ index }}</i> {{ article.type }}
        </span>
      <h4 class="article-list-title"> {{article.title}} <small >&nbsp;标签:{{article.tags}}</small></h4>
    </div>
    <p
      class="article-list-content" v-html="article.content">
      </p>
    <div class="article-list-bottom">
        <span style="color:#00a67c">{{article.comments||0 }}人评论</span>
      <span class="glyphicon  glyphicon-pencil"></span>
     <span >{{article.views }}人浏览</span>
       <span class="glyphicon glyphicon-eye-open" ></span>
      <span class="article-list-date">{{ transformDate( article.ctime) }}</span>
        <span class="glyphicon glyphicon-time"></span>
    </div>
  </div>
  </transition>
</template>
<script>
export default {
  props:['article','index'],
data() {
  return {
  }
},
methods: {
 transformDate(time){
    let date = new Date(time*1000);
    return `${date.getFullYear()}-${this.formatNum( date.getMonth()+1)}
    -${ this.formatNum(date.getDate())} ${this.formatNum(date.getHours())}
    :${this.formatNum(date.getMinutes())}
    :${this.formatNum(date.getSeconds())}`;
 } ,
 formatNum(i){
   return i > 9?  i : ('0'+ i); 
 },
 getDetail(idblog,tags){
  this.$store.commit('pushTags');
   this.$router.push({
   name: 'detail',
   params: {
     id: idblog
   }
 })
 }
}
};
</script>
<style lang="less" scoped>
.article-list {
  width: 100;
  background-color: #fff;
  margin-top:10px;
  border-radius: 5px;
  padding: 0px 5px; 
  border-bottom:5px solid #ddd; 
  .article-list-top {
    cursor: pointer;
    height: 50px;
    line-height: 50px;
    width: 100%;
    white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      .article-list-type{
          display: inline-block;
          width: 120px;
          height: 30px;
            color:#fff;
          line-height: 30px;
          text-align: center;
          background-image: url('../assets/images/tag.png');
          background-size:100% 100%; 
          .article-list-num{
            float: left;
            margin-left:22px; 
            margin-bottom: 2px;
          }
      }
      h4{
        display: inline-block;
        color: #00a67c;
        cursor: pointer;
        margin-left:10px
      }
  }
  .article-list-content{
      text-indent:2em;
  }
   .article-list-bottom::after{
     content: '';
     clear: both;
     display: block;
   }
  .article-list-bottom{
    span{
      float: right;
      padding: 0px 5px;
    }
    .glyphicon{
       margin-right: 2px;
       color: #999;
    }
  }
}
</style>
