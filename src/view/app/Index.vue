<template>
    <div style="height:100%;">
        <keep-alive>
            <component v-bind:is="currentTabComponent"/>
        </keep-alive>
        <van-tabbar v-model="active">
            <van-tabbar-item icon="shop">商品</van-tabbar-item>
            <van-tabbar-item icon="chat" info="5">消息</van-tabbar-item>
            <van-tabbar-item icon="contact">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import Vue from 'vue';
    import ProductList from '@/view/goods/ProductList.vue'
    import UserMessage from '@/view/message/index.vue'
    import UserIndex from '@/view/user/index.vue'
    import { Tabbar, TabbarItem } from 'vant';
    Vue.use(Tabbar).use(TabbarItem);

    const pages = ['ProductList','UserMessage','UserIndex'];
    export default {
        name: "index",
        components: {
            ProductList,UserIndex,UserMessage
        },
        created: function() {
        },
        data() {
            return {
                active: 0,
                icon: {
                    normal: '//img.yzcdn.cn/icon-normal.png',
                    active: '//img.yzcdn.cn/icon-active.png'
                }
            }
        },
        computed: {
            currentTabComponent () {
                return pages[this.active]
            }
        },
        methods:{
        }
    }
</script>
<style>
    .view-box {
        position: absolute
    }
</style>