<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- <button v-if="!isTourComplete" @click="nextStep">Start tour</button> -->

    <modal v-if="!isTourComplete" modal-classes="modal-dialog-centered">
      <div class="py-3 text-center">
        <h1 class="mt-4 mb-4"><strong>Here's a quick demo</strong></h1>
        <p class="mb-5">
          It's the fastest way to get up to speed with your new tools.
        </p>
        <img
          src="https://static.hsappstatic.net/ui-images/static-2.363/optimized/crm.svg"
          class="mb-5"
        />
      </div>
      <div class="d-flex justify-content-center mb-4">
        <base-button @click.prevent="nextStep" type="primary"
          >Start Demo</base-button
        >
      </div>
      <template slot="footer">
        <base-button
          size="lg"
          type="link"
          class="ml-auto text-muted"
          @click="skipped"
        >
          Skip tour
        </base-button>
      </template>
    </modal>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {};
  },
  methods: {
    nextStep() {
      this.$store.dispatch("setCurrentRoute");
      this.$store.dispatch("setCurrentStep");
      this.$store.dispatch("setCurrentContext");
      this.$router.push(`${this.route}`);
    },
    skipped() {
      this.$store.dispatch("setSkipped");
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
    isTourComplete() {
      return this.$store.getters.getIsTourComplete;
    },
  },
  // checkContext() {
  //   if (localStorage.currentContext != this.context) {
  //     alert("hi");
  //   }
  // },
  mounted() {
    this.$store.dispatch("setIsTourCompleteMountedHook");
    if (localStorage.currentStep && !this.isTourComplete) {
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
