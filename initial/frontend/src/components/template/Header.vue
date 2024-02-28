<template>
  <header class="header">
        <a class="toggle" @click="toggleMenu">
            <i class="fa fa-lg" :class="icon"></i>
        </a>
        <div class="title">
        <router-link to="/"><img src="@/assets/image.png" class="logo"></router-link>
        </div>
        <UserDropdown v-if="!hideUserDropdown"/>
    </header> 
</template>

<script>
import UserDropdown from './UserDropdown.vue'

export default {
    name: 'AppHeader',
    components:{UserDropdown},
    props: {
        title: String,
        hideToggle: Boolean,
        hideUserDropdown:Boolean
    },
    computed: {
        icon() {
            return this.$store.state.Visible ? "fa-angle-left" : "fa-angle-right"
        }
    },
    methods: {
        toggleMenu() {
            this.$store.commit('toggleMenu')
        }
    }
}
</script>

<style>
.header {
    grid-area: header;
    background-color: rgb(26, 26, 26);
    display: flex;
    justify-content: center;
    align-items: center;
}

.logo {
        width:300px;
        height: 60px;
        text-align: center;
}

    header.header > a.toggle {
        width: 60px;
        height: 100%;
        color: #fff;
        text-decoration: none;

        display: flex;
        justify-content: center;
        align-items: center;
    }

</style>