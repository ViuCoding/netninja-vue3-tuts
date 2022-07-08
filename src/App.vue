<template>
  <h1 class="nino">{{ title }}</h1>
  <Modal :header="header" :text="text" theme="sale" />
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue Project",
      header: "Sign up for the GiveAway!",
      text: "Grab your Ninja Swag today!",
    };
  },

  methods: {},
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

.nino {
  border-bottom: 1px solid grey;
  display: inline-block;
  padding-bottom: 10px;
}
</style>
