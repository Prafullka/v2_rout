import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    beforeRouteEnter(to, from, next) {
      console.log("beforeRouteEnter :", to, from, next);
      next()
      // called before the route that renders this component is confirmed.
      // does NOT have access to `this` component instance,
      // because it has not been created yet when this guard is called!
    },
    beforeRouteUpdate(to, from, next) {
      console.log("beforeRouteUpdate :", to, from, next);
      next()
      // called when the route that renders this component has changed.
      // This component being reused (by using an explicit `key`) in the new route or not doesn't change anything.
      // For example, for a route with dynamic params `/foo/:id`, when we
      // navigate between `/foo/1` and `/foo/2`, the same `Foo` component instance
      // will be reused (unless you provided a `key` to `<router-view>`), and this hook will be called when that happens.
      // has access to `this` component instance.
    },
    beforeRouteLeave(to, from, next) {
      console.log("beforeRouteLeave :", to, from, next);
      next()
      // called when the route that renders this component is about to
      // be navigated away from.
      // has access to `this` component instance.
    }
  },
  {
    path: "/destination/:name",
    name: "DestinationDetails",
    props: true,
    component: () => import(/* webpackChunkName: "about" */ "../views/DestinationView.vue"),
    children: [
      {
        path: ":experiences",
        name: "DestinationExperiencesDetails",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/DestinationExperiencesDetails.vue"),
      },
    ]
  }, {
    path: "/brazil",
    name: "brazil",
    component: () => import(/* webpackChunkName: "about" */ "../views/BrazilView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () => import(/* webpackChunkName: "about1" */ "../views/PanamaView.vue"),
  }, {
    path: "/hawaii",
    name: "hawaii",
    component: () => import(/* webpackChunkName: "about" */ "../views/HawaiiView.vue"),
  }, {
    path: "/jamaica",
    name: "jamaica",
    component: () => import(/* webpackChunkName: "about" */ "../views/JamaicaView.vue"),
  },
  // ==========================
  {
    path: "*",
    name: "NotFound0",
    component: () => import(/* webpackChunkName: "Page Not Found" */ "@/views/pages/NotFound.vue"),
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound1',
    component: () => import(/* webpackChunkName: "Page Not Found" */ "@/views/pages/NotFound.vue"),
  },




];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition){
    console.log("scrollBehavior :", to, from, savedPosition);
    // if (to.hash) {
    //   return {
    //     selector: to.hash,
    //     behavior: 'smooth',
    //   }
    // }
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ x: 0, y: 100000 })
      }, 1500)
    })
    // return desired position
  }
});

// ==================== Navigation Guards
// =================Global Before Guards
router.beforeEach((to, from, next) => {
  console.log("beforeEach :", to, from, next);
  next()
  // if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  // else next()
})
// =================Global After Hooks
router.afterEach((to, from) => {
  console.log("afterEach :", (to, from));
  // ...
})
// router.scrollBehavior=  (to, from, savedPosition)=> {
//   console.log("scrollBehavior :", to, from, savedPosition);
//   // if (to.hash) {
//   //   return {
//   //     selector: to.hash,
//   //     behavior: 'smooth',
//   //   }
//   // }
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({ x: 0, y: 100000 })
//     }, 1500)
//   })

//   // return desired position
// }

export default router;
