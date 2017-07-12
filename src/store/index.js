import Vue from 'vue'
import Vuex from 'vuex'
import diary from './modules/diary'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    diary
  },
  state: {
    currentFolder: '',
    currentFolderName: '',
    currentCount:'',
    currentImg: '',
    userid:''
  },
  getters: {
        getUserid (state) {
      return state.userid
    },
    getCurrentFolder (state) {
      return state.currentFolder
    },
    getCurrentFolderName (state) {
      return state.currentFolderName
    },
    getCurrentCount (state) {
      return state.CurrentCount
    },
    getCurrentImg (state) {
      return state.currentImg
    }
  },
  mutations: {
       changeUserid (state, newUserid) {
      state.userid = newUserid;
    },
    changeCurrentFolder (state, newCurrentFolder) {
      state.currentFolder = newCurrentFolder
    },
    changeCurrentFolderName (state, newCurrentFolderName) {
      state.currentFolderName = newCurrentFolderName
    },
    changeCurrentCount (state, newCurrentCount) {
      state.CurrentCount = newCurrentCount
    },
    changeCurrentImg (state, newCurrentImg) {
      state.currentImg = newCurrentImg
    }
  }
})
