import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'

Vue.use(Vuex);

const state = {
  pos:{x:0,y:0},
  imgdata: {}
};

export default new Vuex.Store({
  state,
  mutations,
  actions
})

