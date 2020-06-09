<template>
    <div id="root">
        <todo-list title="Todo list 1"/>
    </div>
</template>

<script>
    import TodoList from "./components/TodoList.vue";

    export default {
        name: "App",
        components: {
            TodoList
        }
    };
</script>

<style lang="scss">
    @import "style.scss";
</style>
