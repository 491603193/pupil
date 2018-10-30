const routes = [
    {
        path: '*',
        redirect: '/goods'
    },
    {
        name: 'hello',
        component: () => import('../view/app/HelloWorld.vue'),
        meta: {
            title: '欢迎'
        }
    },
    {
        name: 'login',
        component: () => import('../view/app/Login.vue'),
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'index',
        component: () => import('../view/app/Index'),
        meta: {
            title: '首页'
        }
    },
    {
        name: 'user',
        component: () => import('../view/user'),
        meta: {
            title: '会员中心'
        }
    },
    {
        name: 'cart',
        component: () => import('../view/cart'),
        meta: {
            title: '购物车'
        }
    },
    {
        name: 'goods',
        component: () => import('../view/goods'),
        meta: {
            title: '商品详情'
        }
    }
];
export default routes