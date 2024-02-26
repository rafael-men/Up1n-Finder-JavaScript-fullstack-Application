import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        ismenuVisible:true 
    },
    mutations : {
        toggleMenu(state,isVisible) {
            if(isVisible === undefined) {
                state.ismenuVisible = !state.ismenuVisible
            }
            else {
                state.ismenuVisible = isVisible
            }
            console.log('toggleMenu = ' + state.ismenuVisible)
        }
    }
})
