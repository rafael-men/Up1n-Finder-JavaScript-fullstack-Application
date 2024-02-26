<template>
  <div class="footer">
    <span>Copyright <strong>Rafaell</strong> @2023 - 2028</span>
  </div>
</template>

<script>

export default {
    name:'AppFooter'
}
</script>

<style>
.footer {
    grid-area: footer;
    background-color: #ddd;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 10px;
}
</style>