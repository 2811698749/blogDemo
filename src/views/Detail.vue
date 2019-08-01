<template>
<div class="detail">
  <div
    v-html="article.content"
    class="markdown-body editormd-preview-container"
    previewcontainer="true"
  ></div>
  <div>
   <writeComments :type="id" />
    <showComments :idblog='id' />
  </div>
</div>

</template>
<script>
import axios from "axios";
import writeComments from "../components/writerComments";
import showComments from "../components/showComments";
export default {
  props: ["id"],
  data() {
    return {
      article: {}
    };
  },
  watch: {
    id() {
      this.getDetail();
    }
  },
  mounted() {
    this.getDetail();
  },
  methods: {
    getDetail() {
      axios
        .get("/getArticle", {
          params: {
            idblog: this.id
          }
        })
        .then(res => {
          this.article = res.data.data[0];
        });
    }
  },
  components:{
     writeComments,
     showComments
  }
};
</script>
<style  src='../assets/css/editormd.css'>
</style>




