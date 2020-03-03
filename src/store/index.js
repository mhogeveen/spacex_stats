import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dragonsAPI: []
  },
  mutations: {
    saveDragons (state, dragons) {
      state.dragonsAPI = dragons
    }
  },
  actions: {
    loadDragons ({ commit }) {
      Vue.axios.get('https://api.spacexdata.com/v3/dragons').then(response => {
        commit('saveDragons', response.data)
      }).catch(error => {
        throw new Error(`API ${error}`)
      })
    }
  },
  modules: {
  }
})
