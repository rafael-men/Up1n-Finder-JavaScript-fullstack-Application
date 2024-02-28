import Vue from 'vue'
import Vuex from 'vuex'
 
Vue.use(Vuex)
 
export default new Vuex.Store({
    state: {
        Visible: true,
        user: {
            name:'User Mock',
            email:'Mock@coder.com.br'
        }
    },
    mutations: {
        toggleMenu(state, isVisible){
            if(isVisible === undefined) {
                state.Visible = !state.Visible
            }
            else{
                state.Visible = isVisible
            }
        }
    }
})