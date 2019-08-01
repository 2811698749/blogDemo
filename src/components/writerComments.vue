<template>
  <div class="write-comment">
    <p v-if="parentId == undefined">
      <span class="user-pic"></span>
      <span>发表我的评论</span>
    </p>
    <div>
      您的评论：
    </div>
    <textarea cols="50" rows="5" placeholder="写点什么" v-model.lazy.trim="comments.commits" ></textarea>
    <div style="height:40px;line-height:40px">
      <strong>HI!</strong> 您需要填写邮箱、昵称及验证码:
    </div>
    <form class="form-horizontal" v-on:submit.prevent="onSubmit">
      <div class="form-group" :class="emailValid">
        <label for="comment-email" class="col-sm-2 control-label">
          邮箱
          <font color="red">*</font>
        </label>
        <div class="col-sm-10">
          <input type="email" class="form-control" id="comment-email" placeholder="请输入邮箱"
           v-model.lazy="comments.email" />
        </div>
      </div>
      <div class="form-group" :class="userNameValid">
        <label for="comment-name" class="col-sm-2 control-label">
          昵称
          <font color="red">*</font>
        </label>
        <div class="col-sm-10">
          <input type="text" class="form-control" id="inputPassword3" placeholder="请输入昵称" 
          v-model.lazy="comments.userName"/>
        </div>
      </div>
      <div class="form-group" :class="validClass">
        <label for="comment-valid" class="col-sm-2 control-label">
          验证码
          <font color="red">*</font>
        </label>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            id="comment-valid"
            v-model.trim="inputRandomText"
            placeholder="请输入验证码"
          />
        </div>
        <div class="col-sm-5" v-html="randomValid" @click="getValid"></div>
      </div>
      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button type="submit" class="btn btn-default">提交留言</button>
        </div>
      </div>
    </form>
  </div>
</template>
<style lang="less" scoped>
.write-comment {
  p {
    font-size: 16px;
    padding: 10px;
    span {
      vertical-align: middle;
    }
    .user-pic {
      display: inline-block;
      width: 28px;
      height: 28px;
      background-image: url("../assets/images/user.png");
      background-size: 100% 100%;
      margin-right: 20px;
    }
  }
  textarea {
    width: 100%;
    font-size: 14px;
  }
}
</style>
<script>
import axios from "axios";
export default {
  props: ["type",'parentId'],
  data() {
    return {
      randomValid: "",
      randomValue: "",
      inputRandomText: "",
      comments: {
        email: "",
        userName: "",
        commits: ""
      }
    };
  },
  computed: {
    validClass() {
      return {
        "has-error":
          this.inputRandomText.toLowerCase() != this.randomValue.toLowerCase()
      };
    },
    emailValid(){
      let exg = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
     return {
        "has-error":!exg.test(this.comments.email) 
     }
    },
    userNameValid(){
      return {
        "has-error":
          this.comments.userName.length == 0 
      };
    }
  },
  created(){
    console.log(this.type)
    console.log(this.parentId)
  },
  mounted() {
    this.getValid();
  },
  methods: {
    getValid() {
      axios.get("/getRandom").then(res => {
        this.randomValue = res.data.data.text;
        this.randomValid = res.data.data.data;
      });
      
    },
    onSubmit() {
     
      if(this.comments.commits.length == 0){
        alert('请输入评论内容！');
        return;
      }
        if(this.comments.commits.length > 128 ){
        alert('请输入评论内容超过128个字！');
        this.comments.commits = this.comments.commits.slice(0,128);
        return;
      }
      if(this.emailValid['has-error'] 
      || this.validClass['has-error']
      || this.userNameValid['has-error'] ){
        return;
      }
      axios.post('/comments/saveComment',{
        params:{
          ...this.comments,
          parentId:this.parentId,
          idblog:this.type
        }
      }).then(res=>{
          if(res.data && res.data.data && res.data.data.affectedRows ){
            alert('保存成功！');
            this.getValid();
             this.bus.$emit('click');
           for(var key in this.comments){
             this.comments[key] = '';
           }
          }else{
            alert('保存失败！');
          }
      })
    }
  }
};
</script>