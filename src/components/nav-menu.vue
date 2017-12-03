<template>
    <div>
        <el-menu theme="dark" :default-active="activeIndex" 
            :router="true"
            class="el-menu-demo" mode="horizontal" @select="handleSelect">
            <el-menu-item index="1">AI.EDU后台管理系统</el-menu-item>
            <el-submenu index="2">
                <template slot="title">题目管理</template>
                <el-menu-item index="/problem/list">
                    题目列表
                </el-menu-item>
                <el-menu-item index="/problem/add">
                    添加题目
                </el-menu-item>
            </el-submenu>
            <el-submenu index="3">
                <template slot="title">课程管理</template>
                <el-menu-item index="/lesson/list">
                    课程列表
                </el-menu-item>
                <el-menu-item index="/lesson/add">
                    添加课程
                </el-menu-item>
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