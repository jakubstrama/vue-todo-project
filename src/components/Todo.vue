<template>
  <li>
    <div class="todo-item">
      <div @click="$emit('on-toggle')">
        <span v-if="completed" class="todo-item-checked">&#x2714;</span>
        <span v-if="!completed" class="todo-item-unchecked"></span>
      </div>
      <div class="todo-item-input-wrapper">
        <form @submit.prevent="submitTodo()">
          <input
            type="text"
            v-model="description"
            @blur="submitTodo()"
            ref="newTodo"
          />
        </form>
      </div>
      <div class="item-remove" @click="$emit('on-delete')">&#x02A2F;</div>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    description: String,
    completed: Boolean
  },
  methods: {
    submitTodo() {
      this.$emit("on-edit", this.description);
    }
  }
};
</script>

<style lang="scss"></style>
