<template>
  <div class="content">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    name:'AppContent'
}
</script>

<style>
.content {
    grid-area: content ;
    padding:20px;
    background-color: rgb(194, 194, 194);
}
</style>