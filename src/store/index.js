import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: () => ({
    destinations: [
      {
        name: "brazil", path: "/brazil",
        description: 'brazil description will go here',
        experiences:[
          {name:'hotel', description:'htel brazil expe'},
          {name:'motel', description:'motel brazil expe'},
          {name:'pub', description:'pub brazil expe'}
        ]
      },
      {
        name: "panama", path: "/panama",
        description: 'panama description will go here',
        experiences:[
          {name:'hotel', description:'htel panama expe'},
          {name:'motel', description:'motel panama expe'},
          {name:'pub', description:'pub panama expe'}
        ]
      },
      {
        name: "hawaii", path: "/hawaii",
        description: 'hawaii description will go here',
        experiences:[
          {name:'hotel', description:'htel hawaii expe'},
          {name:'motel', description:'motel hawaii expe'},
          {name:'pub', description:'pub hawaii expe'}
        ]
      },
      {
        name: "jamaica", path: "/jamaica",
        description: 'jamaica description will go here',
        experiences:[
          {name:'hotel', description:'htel jamaica expe'},
          {name:'motel', description:'motel jamaica expe'},
          {name:'pub', description:'pub jamaica expe'}
        ]
      },
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
    }),
    // destinations(state){
    //   return state.destinations
    // }
    destinationByName: (state) => (name) => state.destinations.find((item) => item.name == name)

  },
  mutations: {},
  actions: {},
  modules: {},
});
