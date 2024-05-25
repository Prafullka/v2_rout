import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    destinations: [
      { name: "brazil", path: "/brazil" },
      { name: "panama", path: "/panama" },
      { name: "hawaii", path: "/hawaii" },
      { name: "jamaica", path: "/jamaica" },
    ],
  }),
  // state(){
  //   return {
  //     destinations: [
  //       { name: "brazil", path: '"/brazil"' },
  //       { name: "panama", path: '"/panama"' },
  //       { name: "hawaii", path: '"/hawaii"' },
  //       { name: "jamaica", path: '"/jamaica"' },
  //     ],
  //   }
  // },
  getters: {
    destinations: (state) => ({
      ...state.destinations
    })
    // destinations(state){
    //   return state.destinations
    // }
  },
  mutations: {},
  actions: {},
  modules: {},
});
