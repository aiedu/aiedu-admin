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
    /**
     * 问题
     */
    {
      path: '/problem/add',
      component ( resolve ){
        return require(["@/pages/problems/main"], resolve);
      }
    },
    {
      path: '/problem/edit/:id',
      component ( resolve ){
        return require(["@/pages/problems/main"], resolve);
      }
    },
    {
      path: '/problem/list',
      component ( resolve ){
        return require(["@/pages/problems/list"], resolve);
      }
    },
    /**
     * 课程
     */
    {
      path: '/lesson/add',
      component ( resolve ){
        return require(["@/pages/lessons/main"], resolve);
      }
    },
    {
      path: '/lesson/edit/:id',
      component ( resolve ){
        return require(["@/pages/lessons/main"], resolve);
      }
    },
    {
      path: '/lesson/list',
      component ( resolve ){
        return require(["@/pages/lessons/list"], resolve);
      }
    },
  ]
}); 