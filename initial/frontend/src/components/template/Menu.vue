<template>
  <aside class="menu" ></aside>
</template>

<script>

export default {
    name:'AppMenu'
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