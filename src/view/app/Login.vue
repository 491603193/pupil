<template>
    <div>
        <h3>登陆</h3>
        <van-cell-group>
            <div></div>
            <van-field v-model="loginName" placeholder="请输入用户名" />
            <van-field v-model="phone" placeholder="请输入账号" />
        </van-cell-group>
        <button @click="login">登陆</button>
    </div>
</template>

<script>
    import {getLocalStorage, setLocalStorage} from '../../common/utils/Location.js'
    export default {
        name: "login",
        data() {
            return {
                loginName: '',
                phone: ''
            }
        },
        methods: {
            login() {
                console.log(getLocalStorage('isLogin'));
                setLocalStorage('isLogin', true);
                setLocalStorage('loginName', this.loginName);
                setLocalStorage('phone', this.phone);
                this.$router.push({name: 'index'});
            }
        }
    }
</script>

<style scoped>
 h3{
     text-align: center;
 }
</style>