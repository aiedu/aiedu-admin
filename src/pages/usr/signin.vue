<template>
    <section class="wrapper">
        <el-row>
            <el-col :span="8" :offset="8" class="content">
                <el-form ref="form" :model="form">
                    <el-form-item>
                        <h2 class="title">AI EDU</h2>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.phone" 
                            icon="my-user">
                        </el-input>
                    </el-form-item>
                    <el-form-item>  
                        <el-input type="password" 
                            v-model="form.certificate" 
                            icon="my-key">
                        </el-input> 
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" 
                            @click="onSubmit">登陆
                        </el-button>
                    </el-form-item>
                </el-form>
            </el-col>
        </el-row>
    </section>
</template>
<style lang="less" scoped>
    body {
        background-color: #eee;
    }
    .wrapper {
        margin: 35px 25px;
    }
    .content {
        box-shadow: 2px 1px 5px #ccc; 
        padding: 25px;
        border-radius: 3px;
        background-color: #ffffff;
    }
    .title {
        font-size: 18px; font-weight: bold;
        color: #666;
    }
</style>
<script>
    import store from 'store';
    import stream from 'util/stream';

    export default {
        name: 'signin',
        data (){
            return {
                form: {
                    phone: '',
                    certificate: ''
                }
            };
        },
        methods: {
            onSubmit (){
                stream.send('/usr/signin', this.form).then(({ data }) => {
                    if( data.message === "usr or pwd error" ){
                        alert('用户名或密码错误!');
                        return;
                    }
                    //存入localstorage
                    store.set('usr_info', data);
                    //跳转至首页
                    location.href = '/';
                }).catch( e => {
                });
            }
        }   
    };
</script>