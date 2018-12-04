<template>
    <div>
        <h3>登陆</h3>
        <van-cell-group>
            <van-field v-model="userName" placeholder="请输入姓名"></van-field>
            <van-field v-model="phone" placeholder="请输入手机号"></van-field>
        </van-cell-group>
        <van-button style="margin-top: 20px" size="large" @click="login">登陆</van-button>
    </div>
</template>

<script>
    import {getLocalStorage, setLocalStorage} from '../../common/utils/Location.js'

    export default {
        name: "login",
        data() {
            return {
                userName: '',
                phone: '',
            }
        },
        methods: {
            login() {
                console.log(getLocalStorage('isLogin'));
                setLocalStorage('isLogin', true);
                setLocalStorage('userName', this.userName);
                setLocalStorage('phone', this.phone);
                this.$router.push({name: 'index'});
            }
        }
    }
</script>

<style scoped>
    h3 {
        text-align: center;
    }
</style>