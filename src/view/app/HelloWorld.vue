<template>
    <div class="hello">
        <h1>欢迎</h1>
        <router-link to="/index">Go to index</router-link>
        <br/>
        <br/>
        <a @click="outLogin">退出登陆</a>
    </div>
</template>

<script>
    import {setLocalStorage} from  '../../common/utils/Location.js'
    export default {
        name: 'HelloWorld',
        props: {
            msg: String
        },
        methods: {
            outLogin(){
                setLocalStorage('isLogin',false);
                this.$router.push({name:'login'});
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    h3 {
        margin: 40px 0 0;
    }

    ul {
        list-style-type: none;
        padding: 0;
    }

    li {
        display: inline-block;
        margin: 0 10px;
    }

    a {
        color: #42b983;
    }
</style>
