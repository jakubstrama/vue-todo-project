<template>
  <div class="todo-list-app">
    <div class="todo-form">
      <create-todo @on-new-todo="addTodo($event)" />
    </div>

    <div class="todo-list">
      <ul>
        <todo
          v-for="(todo, index) in filteredTodos"
          :key="index"
          :description="todo.description"
          :completed="todo.completed"
          @on-toggle="toggleTodo(todo)"
          @on-delete="deleteTodo(todo)"
          @on-edit="editTodo(todo, $event)"
        />
      </ul>
      <div class="list-buttons">
        <button @click="showAllItems()">All</button>
        <button @click="showActiveItems()">Active</button>
        <button @click="showCompletedItems()">Completed</button>
      </div>
    </div>
  </div> 
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  data() {
    return {
      todos: [],
      filteredTodos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      this.showAllItems();
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.showAllItems();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    },
    showAllItems() {
      this.filteredTodos = [...this.todos];
    },
    showCompletedItems() {
      this.filteredTodos = this.todos.filter(todo => todo.completed);
    },
    showActiveItems() {
      this.filteredTodos = this.todos.filter(todo => !todo.completed);
    }
  },
  components: { Todo, CreateTodo }
};
</script>

<style scoped lang="scss"></style>
