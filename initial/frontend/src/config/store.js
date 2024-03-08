import Vue from 'vue'
import axios from 'axios'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        Visible: false,
        user:null
    },
    mutations: {
        toggleMenu(state, isVisible){
            if(!state.user) {
                state.Visible = false
                return
            }

            if(isVisible === undefined) {
                state.Visible = !state.Visible
            } else {
                state.Visible = isVisible
            }
        },
        setUser(state, user) {
            state.user = user

            if(user) {
                axios.defaults.headers.common['Authorization'] = `bearer ${user.token}`
                state.Visible = true
            } else {
                delete axios.defaults.headers.common['Authorization']
                state.Visible = false
            }
        }

    }
})