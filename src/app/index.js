import '../../src/styles/style.scss';
import Vue from 'vue/dist/vue.esm';
import App from './App.vue'



Vue.config.productionTip = true;

let vm = new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
});