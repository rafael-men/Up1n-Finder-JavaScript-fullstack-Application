<template>
  <aside class="menu" v-show="Visible"></aside>
</template>

<script>
import { mapState } from 'vuex'
export default {
    name:'AppMenu',
    computed: mapState(['Visible'])
}
</script>

<style>
.menu {
    grid-area: menu;
    background:linear-gradient(rgb(100, 99, 99),rgb(36, 36, 36));
    display:flex;
    flex-direction: column;
    flex-wrap: wrap;
}
</style>