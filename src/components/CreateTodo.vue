<template>
  <form @submit.prevent="addTodo()">
    <input
      v-model="newTodo"
      type="text"
      class="new-todo"
      placeholder="Enter new todo"
    />
  </form>
</template>

<script>
export default {
  data() {
    return {
      newTodo: ""
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.length > 0) {
        this.$emit("on-new-todo", this.newTodo);
      }
      this.newTodo = "";
    }
  }
};
</script>

<style lang="scss" scoped></style>
