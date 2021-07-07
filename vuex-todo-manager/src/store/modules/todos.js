import axios from "axios"

const state = {
    todos: []
}

const getters = {
    // this getter will get all the todos defined in the state
    allTodos: (state) => state.todos
}

const actions = {

    // this is an asynchronous fn that will fetch our todos from an API and use the commit 
    async fetchTodos({ commit }) {
        const resp = await axios.get('https:/jsonplaceholder.typicode.com/todos')
        console.log(resp.data)

        commit('setTodos', resp.data)
    },

    async addTodo({ commit }, title) {
        const resp = await axios.post('https:/jsonplaceholder.typicode.com/todos', { title, completed: false })
        console.log(resp.data)

        commit('newTodo', resp.data)
    },

    async deleteTodo({ commit }, id) {
        await axios.delete(`https:/jsonplaceholder.typicode.com/todos/${id}`)

        commit('removeTodo', id)
    },

    async filterTodos({ commit }, e) {
        const limit = parseInt(e.target.options[e.target.options.selectedIndex].innerText)
        console.log(limit)

        const resp = await axios.get(`https:/jsonplaceholder.typicode.com/todos?_limit=${limit}}`)

        commit('setTodos', resp.data)
    },

    async updateTodo({ commit }, todo){

        // Get completed of the todo id
        const resp = await axios.put(`https:/jsonplaceholder.typicode.com/todos/${todo.id}`, todo) 

        console.log(resp.data)

        commit('updTodo', resp.data)
    } 
}

const mutations = {
    // this will set the todos in our state
    setTodos: (state, todos) => {
        state.todos = todos
    },

    newTodo: (state, todo) => {
        state.todos.unshift(todo)
    },

    removeTodo: (state, id) => {
        state.todos = state.todos.filter((todo) => {
            return todo.id !== id
        })
    },
    
    updTodo: (state, updTodo) => {
        const index = state.todos.findIndex(todo => todo.id === updTodo.id)

        if (index !== -1) {
            state.todos.splice(index, 1, updTodo)
        }
    }
}

export default {
    state, 
    getters,
    actions,
    mutations
}