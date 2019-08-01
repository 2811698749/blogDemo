<template>
  <div class="msg">
    <h4>给我留言</h4>
    <writeComments :type="999999999" />
    <showComments :idblog='999999999' />
  </div>
</template>
<script>
import writeComments from "../components/writerComments";
import showComments from "../components/showComments";
export default {
  created(){
    
  },
  methods:{
    refreshData(){

    }
  },
  components: {
    writeComments,
    showComments
  }
};
</script>
<style lang="less" scoped>
.msg {
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
}
</style>
