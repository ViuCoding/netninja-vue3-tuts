<template>
  <h1 class="nino">{{ title }}</h1>
  <p>Welcome...</p>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up now!!</a>
        <a href="#">More info!!</a>
      </template>

      <h1>{{ header }}</h1>
      <p>Grab your Ninja Swag today!</p>
    </Modal>
  </teleport>
  <button @click="toggleModal">Open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: { Modal },
  data() {
    return {
      title: "My first Vue Project",
      header: "Sign up for the Giveaway!",
      text: "Grab your Ninja Swag today!",
      showModal: false,
    };
  },

  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app,
.modals {
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
