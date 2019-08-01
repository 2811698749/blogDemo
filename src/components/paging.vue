<template>
  <ul class="pagination">
    <li>
      <span @click="leftClick">&laquo;</span>
    </li>
    <li>
      <span :class="{active:1 == pageInit.activeIndex}"  @click="pageClick(1)">1</span>
    </li>
    <li v-for="(text,index) of btnTextArr" 
     v-if="text =='...'|| text < totalPage+1"
     @click="pageClick(text)"
    :key="index">
      <span :class="{active:text == pageInit.activeIndex}">{{text}}</span>
    </li>
    <li>
      <span @click="rightClick">&raquo;</span>
    </li>
    <li class="paging-des">
      当前第&nbsp;&nbsp;
      <font color="#00a67c">{{ pageInit.activeIndex }}</font>&nbsp;&nbsp;页
      共&nbsp;&nbsp;
      <font color="#00a67c">{{ totalPage }}</font>&nbsp;&nbsp;页
      共有&nbsp;&nbsp;
      <font color="#00a67c">{{ pageInit.totalCount }}</font>&nbsp;&nbsp;条数据
    </li>
  </ul>
</template>
<script>
export default {
  props: ["pageInit"],
  data() {
    return {
    
    };
  },
  computed: {
    totalPage() {
      return Math.ceil(this.pageInit.totalCount / this.pageInit.perCount);
    },
    btnTextArr() {
      let arr = [];
      for (var i = 0; i < this.pageInit.btnGroup - 1; i++) {
        if (this.pageInit.startIndex > 2 && i == 0) {
          arr.push("...");
        } else {
          arr.push(this.pageInit.startIndex + i);
        }
      }
      return arr;
    }
  },
  methods: {
    leftClick() {
      if (this.pageInit.startIndex > 2) {
        this.pageInit.startIndex--;
      }
    },
    rightClick() {
      if (this.pageInit.startIndex+this.pageInit.btnGroup < (this.totalPage+2)) {
        this.startIndex++;
      }
    },
    pageClick(index){
        if(index== '...' || index == this.pageInit.activeIndex){return;}
        
        this.$emit('getdata',index);
        this.pageInit.activeIndex = index;
        if(index == 1){
            this.pageInit.startIndex = 2;
        }
      }
  }
};
</script>
<style lang="less" scoped>
ul.pagination {
  margin-top: 5px;
  li {
    display: inline-block;
    width: 40px;
    height: 40px;
    cursor: pointer;
    span.active {
      color: #fff;
      background-color: #4286c2;
    }
    span {
      width: 40px;
      display: inline-block;
      text-align: center;
    }
  }
  li.paging-des {
    cursor: default;
    vertical-align: 18px;
    width: 300px;
    height: 40px;
    margin-left: 10px;
    font-size: 15px;
  }
}
</style>
