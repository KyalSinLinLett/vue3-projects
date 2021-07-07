const app = Vue.createApp({
    data() {
        return {
            title: 'The final empire',
            author: 'Ernest hem',
            age: 45,

            showBook: true,

            x: 0,
            y: 0,   
        }
    },

    methods: {
        changeBookTitle() {
            this.title = 'Something else'
            console.log("Book title changed")
        },

        toggleBookTitle() {
            this.showBook = !this.showBook
        },
        handleEvent(e, param) {
            console.log(param)
        },
        handleMouseMove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount(
    '#app'
)

