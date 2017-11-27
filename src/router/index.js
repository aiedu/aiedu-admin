import Vue from 'vue';
import Router from 'vue-router';

Vue.use( Router );

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/signin',
      component ( resolve ){
        return require(["@/pages/usr/signin"], resolve);
      }
    },
    {
      path: '/',
      component ( resolve ){
        return require(["@/pages/categroy/list"], resolve);
      }
    },
    {
      path: '/lang/manage',
      component ( resolve ){
        return require(["@/pages/langs/lang"], resolve);
      }
    }
  ]
});