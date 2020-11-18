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
    isTourComplete: false,
    currentRoute: null,
    skipped: false,
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
    setIsTourComplete(state) {
      state.isTourComplete = true;
      state.currentStep = 0;
      state.currentRoute = "/";
      state.currentContext = null;
      localStorage.isTourComplete = JSON.stringify(state.isTourComplete);
      localStorage.removeItem("currentStep");
      localStorage.removeItem("currentContext");
    },
    setIsTourCompleteMountedHook(state) {
      if (localStorage.isTourComplete) {
        state.isTourComplete = JSON.parse(localStorage.isTourComplete);
      } else {
        this.isTourComplete = this.$store.getters.getIsTourComplete; // response from API
      }
    },
    setSkipped(state) {
      state.skipped = true;
      localStorage.skipped = JSON.stringify(state.skipped);
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
    async setIsTourComplete(state) {
      state.commit("setIsTourComplete");
    },
    async setIsTourCompleteMountedHook(state) {
      state.commit("setIsTourCompleteMountedHook");
    },
    async setSkipped(state) {
      state.commit("setSkipped");
    },
  },
  getters: {
    getCurrentStep: (state) => state.currentStep || localStorage.currentStep,
    getCurrentRoute: (state) => state.currentRoute,
    getCurrentContext: (state) => state.currentContext,
    getIsTourComplete: (state) => state.isTourComplete,
    getAllSteps: (state) => state.allSteps,
  },
  modules: {},
});
