<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="luigino" />
  <button @click="handleClick">Click Me</button>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      title: "My first Vue Project",
    };
  },

  methods: {
    handleClick() {
      console.log(this.$refs.luigino);
      this.$refs.luigino.classList.add("active");
      this.$refs.luigino.focus();
      // "Refs" are used in Vue instead of querySelector in order to select and manipulate an element from the DOM.
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(8, 158, 8);
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid grey;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
