import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentStep: 0,
    allSteps: [
      {
        route: "/territory",
      },
      {
        route: "/user",
      },
      { context: "territory", route: "/about" },
    ],
    isCompleted: false,
    currentRoute: null,
  },
  mutations: {
    setCurrentStep(state) {
      state.currentStep++;
    },
    setCurrentRoute(state) {
      state.currentRoute = state.allSteps[state.currentStep].route;
    },
  },
  actions: {
    async setCurrentStep(state) {
      state.commit("setCurrentStep");
    },
    async setCurrentRoute(state) {
      state.commit("setCurrentRoute");
    },
  },
  getters: {
    getCurrentStep: (state) => state.currentStep,
    getCurrentRoute: (state) => state.currentRoute,
    isCompleted: (state) => state.isCompleted,
  },
  modules: {},
});
