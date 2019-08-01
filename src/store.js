import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    map:'',
    tags:[]
  },
  getters:{
    randomTags(state){
      if(state.tags.length < 21){
        return state.tags;
      }
      let len = state.tags.length;
      let startIndex = 0;
    if(len > 20){
     startIndex = Math.floor( Math.random()*(len -20))
    }
    return state.tags.slice(startIndex,startIndex+21);
  },
  },
  mutations: {
    setMap(state,newMap){
      state.map = newMap;
    },
    setTags(state,tags){
      state.tags = tags;
    },
    pushTags(state){
      state.tags = state.tags.slice(0);
      }
  },
  actions: {
    getTags(context){
      axios.get('/getTags').then(res=>{
        // this.tags = res.data.data;
        context.commit('setTags',res.data.data)
       },err => console.log(err)) 
    }
 
  }
})
