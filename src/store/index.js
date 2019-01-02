import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
    isSeen: false,
    dataItem:{}
}


const mutations = {
    changeSeen(state,changeSeen) {
        state.isSeen = changeSeen
    },
    changeItem(state,Item) {
        state.dataItem = Item
    }
}

const store = new Vuex.Store({
    state,
    mutations
})

export default store