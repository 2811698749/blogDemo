<template>
  <div class="home">
    <article-list
      v-for="(article,index) in articleList"
      :key="article.idblog"
      :article="article"
      :index='(pageInit.activeIndex-1)*pageInit.perCount +index+1'
    />
    <paging :pageInit="pageInit" v-on:getdata="getArticleList"/>
  </div>
</template>

<script>
import axios from "axios";
import articleList from "../components/articleList";
import paging from '../components/paging'
export default {
  props:['id'],
  data() {
    return {
      articleList: [
        {
          idblog: 10001,
          title: "滑动验证码的原理并利用 Vue 实现滑动验证码",
          cdate: "2019-6-27 9:00",
          views: 121,
          content:
            "  做网络爬虫的同学肯定见过各种各样的验证码，比较高级的有滑动、点选等样式，看起来好像挺复杂的，但实际上它们的核心原理还是还是很清晰的，本文章大致说明下这些验证码的原理以及带大家实现一个滑动验证码。 我之前做过 Web 相关开发，尝试对接过 Lavavel 的极验验证，当时还开发了一...",
          type_name: "JavaScript",
          comments: "166"
        },
        {
          id: 10002,
          title: "Python 深度学习脚手架 ModelZoo",
          cdate: "2019-6-27 9:00",
          views: 124,
          content:
            "  想必大家都或多或少听过 TensorFlow 的大名，这是 Google 开源的一个深度学习框架，里面的模型和 API 可以说基本是一应俱全，但 TensorFlow 其实有很多让人吐槽的地方，比如 TensorFlow 早期是只支持静态图的，你要调试和查看变量的值的话就得一个个... 我之前做过 Web 相关开发，尝试对接过 Lavavel 的极验验证，当时还开发了一, 做网络爬虫的同学肯定见过各种各样的验证码，比较高级的有滑动、点选等样式，看起来好像挺复杂的，但实际上它们的核心原理还是还是很清晰的，本文章大致说明下这些验证码的原理以及带大家实现一个滑动验证码。 我之前做过 Web 相关开发，尝试对接过 Lavavel 的极验验证，当时还开发了一...",
          type_name: "Html+css",
          comments: "166"
        },
        {
          id: 10003,
          title: " 机器学习算法二之逻辑回归的推导及实战 ",
          cdate: "2019-6-27 9:00",
          views: 123,
          content:
            " 在线性回归模型中，我们实际上是建立了一个模型来拟合自变量和因变量之间的线性关系，但是在某些时候，我们要做的可能是一个分类模型，那么这里就可能用到线性回归模型的变种——逻辑回归，本节我们就逻辑回归来做一个详细的说明。 实例引入 我们还是以上一节的例子为例，张三、李四、王五、赵六都要...",
          type_name: "jQuery",
          comments: "167"
        }
      ],
      pageInit: {
        perCount:8,
        totalCount: 20,
        btnGroup: 5,
        activeIndex: 1,
        startIndex: 2
      }
    }
  },
  watch:{
    id(){
     this.getArticleList(this.pageInit.activeIndex);
        this.getSum();
    }
  },
  mounted() {
    this.getArticleList(1);
    this.getSum();
  },
    components: {
    articleList,
    paging
  },
  methods: {
    convertFormDate: function(num) {
      function dFormat(i) {
        return i < 10 ? "0" + i : i;
      }
      var date = new Date(num);
      return (
        date.getFullYear() +
        "-" +
        dFormat(date.getMonth() + 1) +
        "-" +
        dFormat(date.getDate())
      );
    },
    getArticleList: function(activeIndex) {
      if(activeIndex == '...'){return};
      var self = this;
      axios
        .get("/getArticleListByTag", {
          params: {
            perCount: self.pageInit.perCount,
            activeIndex: activeIndex,
            id:this.id
          }
        })
        .then(function(res) {
          var reg =/<\/?.+?\/?>/g;
         for(var i = 0;i< res.data.data.length;i++){
           res.data.data[i].content =  res.data.data[i].content.replace(reg,'').slice(0,300)+'......';
         }
          self.articleList = res.data.data;
        });
    },
    getSum(){
      axios.get('/getTotalCountByTag',{
        params:{
          id:this.id
        }
      }).then(res =>{
        this.pageInit.totalCount = res.data.data[0].sum;
      })
    },
    getDetail(idblog){
      console.log(idblog);
    }
  }
};
</script>