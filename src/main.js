import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import store from './store'


import { Row, Cell, CellGroup ,Field,Button } from 'vant';


Vue.use(Row).use(Cell).use(CellGroup).use(Field).use(Button);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});



