<template>
  <section>
    <nav-menu></nav-menu>
    <article>
        <div class="main">
            <headline :title="title"></headline>
            <el-table
                :data="tableData"
                border
                style="width: 1280px">
                <el-table-column    
                    prop="title"
                    label="题目"
                    width="260">
                </el-table-column>
                <el-table-column
                    prop="language"
                    label="语言"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="mode"
                    label="难度"
                    width="100">
                </el-table-column>
                <el-table-column
                    prop="description"
                    label="描述"> 
                </el-table-column>
                <el-table-column fixed="right" label="操作" width="100">
                    <template slot-scope="scope">
                        <el-button @click="edit(scope.row)" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table> 
        </div>
    </article>
  </section>
</template>
<style lang="less" scoped>
.main {
    width: 1280px; padding: 20px; font-size: 14px;
    margin: auto;
}
</style>
<script>
import axios from 'axios';
import navMenu from 'com/nav-menu';
import headline from 'com/headline';

export default {
    data(){
        return {
            title: '题目列表',
            tableData: []
        };
    },
    components: {
        navMenu,
        headline
    },
    created (){
        axios.post('/napi/problem/list').then(({ data }) => {
            this.tableData = data.data.rows;
        });
    },
    methods: {
        edit ({ id }){
            if( !id ) return this.$notify.error({ message: '无效数据!' });
            this.$router.push({ path: `/problem/edit/${id}` });
        }
    }
}
</script>

