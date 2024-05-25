import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    destinations: [
      "brazil", 
      "panama", "hawaii", "jamaica"]
  }),
  getters: {},
  mutations: {},
  actions: {},
  modules: {},
});
