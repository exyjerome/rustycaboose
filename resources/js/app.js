window.Vue = require('vue');
window._ = require('lodash');

const VueResource = require('vue-resource').default;
const VueTimers = require('vue-timers').default;
const VueRouter = require('vue-router').default;

Object.filter = (obj, predicate) =>
  Object.keys(obj)
    .filter(key => predicate(obj[key]))
    .reduce((res, key) => (res[key] = obj[key], res), {});

Vue.use(VueTimers);
Vue.use(VueResource);
Vue.use(VueRouter);

const files = require.context('../../components/', true, /\.vue$/i)

files.keys().map(key => {
  return Vue.component(_.last(key.split('/')).split('.')[0], files(key))
})

const routes = [
  { path: '/', component: require('../../views/index.vue') },
  { path: '/vip', component: require('../../views/vip.vue') }
];

const router = new VueRouter({
  routes
});

const app = new Vue({
  el: '#app',
  router
});