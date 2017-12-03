<template>
<section>
    <nav-menu></nav-menu>
    <article>
        <div class="main">
            <headline :title="title"></headline>
            <el-form label-position="right" label-width="80px" :model="formLabel">
                <el-form-item label="课程标题">
                    <el-input v-model="formLabel.title"></el-input>
                </el-form-item>
                <el-form-item label="课程描述">
                    <el-input type="textarea" 
                        v-model="formLabel.description"
                        :autosize="{ minRows: 4 }"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="submit">下一步</el-button>
                </el-form-item>
            </el-form>
        </div>
    </article>
</section>
</template>
<style lang="less" scoped>
.main {
    width: 800px; padding: 20px; font-size: 14px;
    margin: auto;
}
.editor-box {
    display: flex; margin: 20px 0;
    .sub-title {
        color: #5a5e66; font-size: 14px; text-align: right;
        flex: 0 0 70px; margin-right: 10px; 
    }
    .inline {
        flex: 1;
    }   
}

</style>
<script>
import axios from 'axios';
import navMenu from 'com/nav-menu';
import headline from 'com/headline';

export default {
    data(){
        return {
            formLabel: {
            },
            allowPublish: false,
            compiling: false,
            isEditMode: false,
            title: ''
        };
    },
    components: {
        navMenu,
        headline
    },
    created (){
        this.lid = this.$route.params.lid;
        this.isEditMode = !!this.lid;
        this.title = this.isEditMode ? '编辑课程' : '创建课程';

        if( this.isEditMode ){
            //todo, 未完成
            // axios.post('/napi/lesson/search', {
            //     id: this.lid
            // }).then(({ data }) => {
            //     this.formLabel = Object.assign(this.formLabel, {}, data.data);
            // }).catch( e => {
            //     this.$notify.error({
            //         title: '消息',
            //         message: '获取内容失败，请重试!'
            //     });
            // });
        }
    },
    methods: {
        submit (){
            // axios.post('/napi/lesson/upsert', Object.assign({
            //     id: this.lid
            // }, this.formLabel)).then(({ data }) => {
            //     if( data.status === "failure" ){
            //         this.$notify.error({
            //             title: '消息',
            //             message: data.data
            //         });
            //         return;
            //     }
            //     this.$notify.success({
            //         title: '消息',
            //         message: (this.isEditMode ? '更新' : '创建') + "成功"
            //     });
            // });
        }
    }
}
</script>
