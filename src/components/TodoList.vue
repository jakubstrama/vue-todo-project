<template>
  <div class="todo-list-app">
    <h2>{{ title }}</h2>
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
import { mapState } from 'vuex';


export default {
  props: {
    title: String
  },
  data() {
    return {
      todos: [],
      filteredTodos: []
    };
  },
  computed: mapState(['todosStore']),
  created() {
    this.unsubscribe = this.$store.subscribe((mutation, value) => {
      if (mutation.type === 'pushTodos') {
        this.todos = value.todosStore;
        this.showAllItems();
      }
    });
  },
  beforeDestroy() {
    this.unsubscribe();
  },
  methods: {
    pushList() {
      this.$store.dispatch('pushTodos', this.todos);
    },
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
      this.pushList();
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
      this.pushList();
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
      this.pushList();
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
      this.pushList();
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
