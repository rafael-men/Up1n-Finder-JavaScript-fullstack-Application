<template>
  <div id="app">
    <Header title="UP1N FINDER" :hideToggle="false"/>
    <Menu/>
    <Content/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/template/Header.vue'
import Menu from './components/template/Menu.vue'
import Content from './components/template/Cont.vue'
import Footer from './components/template/Footer'

export default {
  name:'App',
  components: {Header, Menu,Content,Footer}
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
</style>