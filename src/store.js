import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: []
  },
  mutations: {
    ADD_USER(state, payload){

    }
  },
  actions: {
    saveUserInfo({state, commit}, payload){
      
    }
  }
})
