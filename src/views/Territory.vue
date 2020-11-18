<template>
  <div>
    <p>{{ step }}</p>
    <el-popover
      placement="bottom"
      title="Title"
      width="200"
      trigger="manual"
      content="this is content, this is content, this is content"
      v-model="visible"
    >
      <el-button slot="reference">Content</el-button>
    </el-popover>
    <button @click="completed">Complete</button>
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
    completed() {
      this.$store.dispatch("setCurrentRoute");
      this.$store.dispatch("setCurrentStep");
      this.$store.dispatch("setCurrentContext", this.context);
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
