<template>
  <div class="comment">
    <h4>
      <span class="glyphicon glyphicon-leaf"></span>
      有
      <span>( {{ pageInit.totalCount }} )</span>个小伙伴在吐槽
    </h4>
    <div class="row" v-for="(comment,index) of commentsList" :key="index">
      <div class="row">
        <div class="col-xs-2 user-image">
          <img :src="comment.administor? masterImag : userImag" alt srcset />
        </div>
        <div class="col-xs-10 comment-content">
          <div>{{comment.commits}}</div>
          <div>
            {{ comment.user_name }}
            <span v-if="comment.parentName">
              <font color="#5fbaac">回复</font>
              {{ comment.parentName }}
            </span>
            {{ convertFormDate(comment. ctime * 1000) }}
            <button
              class="btn btn-link"
              @click="handleResponse(comment,$event)"
            >回复</button>
            <writeComments :type="idblog" :parentId="comment.id" v-if="comment.showRes" />
          </div>
        </div>
      </div>
    </div>
    <paging :pageInit="pageInit" v-on:getdata="getCommentsList" />
  </div>
</template>
<script>
import axios from "axios";
import paging from "../components/paging";
import writeComments from "../components/writerComments";
import { constants } from "crypto";
export default {
  props: ["idblog"],
  data() {
    return {
      userImag: require("../assets/images/user.png"),
      masterImag:require('../assets/images/tx.jpg'),
      writeShow: false,
      pageInit: {
        perCount:8,
        totalCount: 20,
        btnGroup: 5,
        activeIndex: 1,
        startIndex: 2
      },
      commentsList: [
        {
          commits: "123123",
          user_name: "fdsasf",
          ctime: 1564041671,
          showRes: false,
          parentName: ""
        }
      ]
    };
  },
  watch:{
   idblog(){
      this.getTotalCount();
      this.getCommentsList(1);
   }
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
    getCommentsList(activeIndex) {
      axios
        .get("getCommentsList", {
          params: {
            idblog: this.idblog,
            perCount: this.pageInit.perCount,
            activeIndex: activeIndex
          }
        })
        .then(res => {
          let data = res.data.map((item, index, self) => {
            item.showRes = false;
            item.administor = false;
            if(item.email == '2811698749@qq.com' && item.user_name == 'zhuyulin'){
              item.user_name = '博主';
                 item.administor = true;
            }
            item.parentName = "";
            return item;
          });
          for (let i = 0; i < data.length; i++) {
            if (data[i].parent_id) {
              axios
                .get("/getComentsById", {
                  params: {
                    id: data[i].parent_id
                  }
                })
                .then(res => {
                  let temp = data[i];
                  data[i].parentName = res.data[0].user_name;
                });
            }
          }
          this.commentsList = data;
        });
    },
    handleResponse(comment, event) {
      if (!comment.showRes) {
        comment.showRes = true;
        event.target.innerText = "关闭";
      } else {
        comment.showRes = false;
        event.target.innerText = "回复";
      }
    },
    getTotalCount() {
      axios
        .get("getCommentsCount", {
          params: {
            idblog: this.idblog
          }
        })
        .then(res => {
          this.pageInit.totalCount = res.data[0].sum;
        });
    }
  },
  created() {
    this.bus.$on("click", () => {
       this.getTotalCount();
      this.getCommentsList(1);
    });
  },
  mounted() {
    this.getTotalCount();
    this.getCommentsList(1);
  },
  components: {
    paging,
    writeComments
  }
};
</script>
<style lang="less" scoped>
.comment {
  margin-top: 10px;
  h4 {
    color: #5fbaac;
    font-size: 15px;
    span {
      margin-left: 5px;
    }
  }
  .row {
    margin-top: 10px;

    .user-image {
      text-align: center;
      height: 80px;
      img {
        width: 64px;
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
      }
    }
    .comment-content {
      padding-top: 10px;
      button {
        margin-left: 5px;
        vertical-align: -0.5px;
        font-size: 12px;
      }
    }
  }
}
</style>
