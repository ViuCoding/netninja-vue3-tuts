<template>
  <!-- @click.self allows us to close the modal ONLY if we click on the element itself and not on anything inside of it -->
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{ sale: theme === 'sale' }">
      <slot>Default Content </slot>
      <div class="actions">
        <slot name="links"> </slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["theme"],
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style>
.modal {
  width: 500px;
  padding: 2rem;
  margin: 100px auto;
  background: white;
  border-radius: 10px;
}

.backdrop {
  top: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
}

.modal.sale {
  background: crimson;
  color: white;
}

.modal.sale h1 {
  color: aqua;
}

.modal .actions{
  text-align: center;
  margin: 30px 0 10px 0;
  color: #333;

}
.modal .actions a{
  margin: 10px;
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
  text-decoration: none;
  color: #333;

}
</style>
