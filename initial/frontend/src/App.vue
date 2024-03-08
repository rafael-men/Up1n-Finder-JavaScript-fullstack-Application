<template>
  <div id="app" :class="{'hide-menu' : !Visible}">
    <Header  :hideToggle="!user" :hideUserDropdown="!user"/>
    <Menu v-if="user"/>
    <Loading v-if="validatingToken"/>
    <Content v-else/>
    <Footer/>
  </div>
</template>

<script>
import axios from "axios"
import { mapState} from 'vuex'
import { baseApiUrl, userKey } from "@/global"
import Header from './components/template/Header.vue'
import Menu from './components/template/Menu.vue'
import Content from './components/template/Cont.vue'
import Footer from './components/template/Footer'
import Loading from './components/template/Loading.vue'

export default {
  name:'App',
  components: {Header, Menu,Content,Footer,Loading},
  computed: mapState(['Visible','user']),
  data: function() {
		return {
			validatingToken: true
		}
  },
  methods: {
		async validateToken() {
			this.validatingToken = true

			const json = localStorage.getItem(userKey)
			const userData = JSON.parse(json)
			this.$store.commit('setUser', null)

			if(!userData) {
				this.validatingToken = false
				this.$router.push({ name: 'auth' })
				return
			}

			const res = await axios.post(`${baseApiUrl}/validateToken`, userData)

			if (res.data) {
				this.$store.commit('setUser', userData)
				
				if(this.$mq === 'xs' || this.$mq === 'sm') {
					this.$store.commit('toggleMenu', false)
				}
			} else {
				localStorage.removeItem(userKey)
				this.$router.push({ name: 'auth' })
			}

			this.validatingToken = false
		}
	},
	created() {
		this.validateToken()
	}
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Kode+Mono:wght@400..700&display=swap');

* {
  font-family: 'Kode Mono',monospace;
}

body {
  margin:0;
}
#app {
  height: 100vh;
  display: grid;
  grid-template-rows: 60px 1fr 40px;
  grid-template-columns: 300px 1fr;
  grid-template-areas: 'header header' 'menu content' 'menu footer';
}
#app.hide-menu {
  grid-template-areas: 'header header' 'content content' 'footer footer';
}
</style>