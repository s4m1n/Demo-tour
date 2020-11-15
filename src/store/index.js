import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentStep: 0,
    currentContext: null,
    allSteps: [
      {
        context: "territory",
        route: "/territory",
      },
      {
        context: "user",
        route: "/user",
      },
      { context: "about", route: "/about" },
    ],
    isCompleted: false,
    currentRoute: null,
  },
  mutations: {
    setCurrentStep(state) {
      if (localStorage.currentStep) {
        state.currentStep == JSON.parse(localStorage.currentStep);
      }
      state.currentStep++;
      localStorage.currentStep = JSON.stringify(state.currentStep);
    },
    setCurrentContext(state) {
      state.currentContext = state.allSteps[state.currentStep - 1].context;
      localStorage.currentContext = JSON.stringify(state.currentContext);
    },
    setCurrentRoute(state) {
      state.currentRoute = state.allSteps[state.currentStep].route;
    },
    setStepMountedHook(state) {
      state.currentStep = JSON.parse(localStorage.currentStep);
    },
  },
  actions: {
    async setCurrentStep(state) {
      state.commit("setCurrentStep");
    },
    async setCurrentRoute(state) {
      state.commit("setCurrentRoute");
    },
    async setCurrentContext(state) {
      state.commit("setCurrentContext");
    },
    async setStepMountedHook(state) {
      state.commit("setStepMountedHook");
    },
  },
  getters: {
    getCurrentStep: (state) => state.currentStep || localStorage.currentStep,
    getCurrentRoute: (state) => state.currentRoute,
    getCurrentContext: (state) => state.currentContext,
    isCompleted: (state) => state.isCompleted,
    getAllSteps: (state) => state.allSteps,
  },
  modules: {},
});
