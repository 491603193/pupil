import Vue from 'vue';
import routes from './config/routers'
import Router from 'vue-router';
import {getLocalStorage} from  './common/utils/Location.js'
Vue.use(Router);


// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({routes});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    const nextRoute = ['login', 'index']; //不需要过滤的
    let isLogin = getLocalStorage("isLogin");  // 是否登录
    // 未登录状态；当路由到nextRoute指定页时，跳转至login
    if (nextRoute.indexOf(to.name) < 0) {
        if (!isLogin) {
            router.push({name: 'login'});
            return;
        }
    }
    next();
});

export {
    router
};
