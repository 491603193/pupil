import './common/rem';
import Vue from 'vue';
import App from './App.vue';
import {router} from './router';
import store from './store'
import './style/base.css'

import { Row, Cell, CellGroup ,Field,Button,Icon  } from 'vant';


Vue.use(Row).use(Cell).use(CellGroup).use(Field).use(Button).use(Icon);

new Vue({
  router,
  store,
  el: '#app',
  render: h => h(App)
});



