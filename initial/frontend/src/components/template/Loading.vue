<template>
    <div class="loading">
        <img src="@/assets/WMDx.gif" alt="Loading">
    </div>
</template>

<script>
export default {
    name: 'AppLoading'
}
</script>

<style>
    .loading {
        grid-area: content;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>