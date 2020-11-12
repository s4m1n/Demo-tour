<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ step }}</h1>
    <button @click="nextStep">Next Step</button>
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
      this.$router.push(`${this.route}`);
    },
  },
  computed: {
    step() {
      return this.$store.getters.getCurrentStep;
    },
    route() {
      return this.$store.getters.getCurrentRoute;
    },
  },
  mounted() {},
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
