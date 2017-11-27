<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">AI.EDU后台管理系统</el-menu-item>
            <el-submenu index="2">
                <template slot="title">分类管理</template>
                <el-menu-item index="2-1">语言管理</el-menu-item>
            </el-submenu>
        </el-menu>
        <br /><br /><br />
    </div>
</template>
<script>
    export default {
        name: 'nav-menu',
        props: {
            activeIndex: {
                type: String,
                default: '1'
            }
        },
        data (){
            return {
            };
        },
        methods: {
            handleSelect(key, keyPath) {
            }
        }
    }
</script>