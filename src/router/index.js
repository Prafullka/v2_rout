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
    ],
    beforeEnter: (to, from, next) => {
      console.log("beforeEnter = to, from, next:", to, from, next);
      // ...
     
      next()
    }

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
    path: "/404",
    alise: "*",
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
