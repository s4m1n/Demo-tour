<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="finished">Finish Tour</button>
    <p>{{ tourIsComplete }}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  computed: {
    tourIsComplete() {
      return this.$store.getters.getIsTourComplete;
    },
    step() {
      return this.$store.getters.getCurrentStep;
    },
    context() {
      return this.$store.getters.getCurrentContext;
    },
    route() {
      return this.$store.getters.getCurrentRoute;
    },
  },
  methods: {
    finished() {
      this.$store.dispatch("setIsTourComplete");
      this.$router.push(`${this.route}`);
    },
  },
  mounted() {
    if (this.tourIsComplete == false) {
      this.visible = true;
    }
    // if (localStorage.currentStep) {
    //   this.currentStep = JSON.parse(localStorage.currentStep);
    // };
    // this.checkContext();
  },
  // checkContext() {
  //   if (localStorage.currentContext != this.context) {
  //     alert("hi");
  //   }
  // },
};
</script>

<style></style>
