import Vue from "vue";


export const mutations = {
    pushTodos(state, todos) {
        // state.todosStore = [...todos]
        Vue.set(state, 'todosStore', todos);
    }
}
