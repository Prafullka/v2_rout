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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/destination/:name",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/DestinationView.vue"),
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
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/BrazilView.vue"),
  },
  {
    path: "/panama",
    name: "panama",
    component: () =>
      import(/* webpackChunkName: "about1" */ "../views/PanamaView.vue"),
  }, {
    path: "/hawaii",
    name: "hawaii",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HawaiiView.vue"),
  }, {
    path: "/jamaica",
    name: "jamaica",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/JamaicaView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
