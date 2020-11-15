<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ currentStep }}</h1>
    <button @click="nextStep">Start tour</button>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      context: "territory",
    };
  },
  methods: {
    nextStep() {
      this.$store.dispatch("setCurrentRoute");
      this.$store.dispatch("setCurrentStep");
      this.$store.dispatch("setCurrentContext");
      this.$router.push(`${this.route}`);
    },
  },
  // watch: {
  //   currentContext(currentContext) {},
  // },
  computed: {
    currentStep() {
      return this.$store.getters.getCurrentStep;
    },
    currentContext() {
      return this.$store.getters.getCurrentContext;
    },
    route() {
      return this.$store.getters.getCurrentRoute;
    },
    allSteps() {
      return this.$store.getters.getAllSteps;
    },
  },
  // checkContext() {
  //   if (localStorage.currentContext != this.context) {
  //     alert("hi");
  //   }
  // },
  mounted() {
    if (localStorage.currentStep) {
      this.$store.dispatch("setStepMountedHook");
      this.$router.push(`${this.allSteps[this.currentStep - 1].route}`);
    }
    // this.checkContext();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
