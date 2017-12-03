<template>
<section>
    <nav-menu></nav-menu>
    <article>
        <div class="main">
            <headline :title="title"></headline>
            <el-form label-position="right" label-width="80px" :model="formLabel">
                <el-form-item label="标题">
                    <el-input v-model="formLabel.title"></el-input>
                </el-form-item>
                <el-form-item label="描述">
                    <el-input type="textarea" 
                        v-model="formLabel.description"
                        :autosize="{ minRows: 4 }"></el-input>
                </el-form-item>
                <el-form-item label="语言">
                    <el-select v-model="formLabel.language">
                        <el-option labe="Javascript" value="javascript"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="困难度">
                    <el-select v-model="formLabel.mode">
                        <el-option label="简单的" value="easy"></el-option>
                        <el-option label="中等的" value="middle"></el-option>
                        <el-option label="困难的" value="diffcult"></el-option>
                        <el-option label="令人发狂的" value="crazy"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="测试用例">
                    <el-input type="textarea" 
                        :autosize="{ minRows: 10 }"
                        v-model="formLabel.cases">
                    </el-input>
                </el-form-item>
                <el-form-item label="默认模版">
                    <el-input type="textarea" 
                        :autosize="{ minRows: 5 }"
                        v-model="formLabel.template">
                    </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="success" @click="submit">提交</el-button>
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
                title: '',
                description: '',
                template: '',
                cases: '',
                language: 'javascript',
                mode: 'easy'
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
        this.pid = this.$route.params.id;
        this.isEditMode = !!this.pid;
        this.title = this.isEditMode ? '编辑题目' : '创建题目';

        if( this.isEditMode ){
            axios.post('/napi/problem/search', {
                id: this.pid
            }).then(({ data }) => {
                this.formLabel = Object.assign(this.formLabel, {}, data.data);
            }).catch( e => {
                this.$notify.error({
                    title: '消息',
                    message: '获取内容失败，请重试!'
                });
            });
        }
    },
    methods: {
        submit (){
            axios.post('/napi/problem/upsert', Object.assign({
                id: this.pid
            }, this.formLabel)).then(({ data }) => {
                if( data.status === "failure" ){
                    this.$notify.error({
                        title: '消息',
                        message: data.data
                    });
                    return;
                }
                this.$notify.success({
                    title: '消息',
                    message: (this.isEditMode ? '更新' : '创建') + "成功"
                });
            });
        }
    }
}
</script>
