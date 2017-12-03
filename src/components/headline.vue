<template>
    <div class="headline">{{ title }}</div>
</template>
<style lang="less" scoped>
.headline {
    margin-bottom: 50px;
    font-size: 16px;
    border-bottom: 1px solid #dbdbdb;
    padding: 10px 5px; 
    color: #666;
}
</style>
<script>
export default {
    props: {
        title: String
    }
}
</script>


