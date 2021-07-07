<template>
    <div class="block" v-if="showBlock" @click="stopTimer">
        clickME
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data() {
        return {
            showBlock: false,
            timer: null,
            reactionTime: 0
        }
    },

    mounted() {
        console.log("BLOCK is mounted")
        // show block based on the random delay time
        setTimeout(() => {
            this.showBlock = true
            // once block is shown, start timer
            this.startTimer()
        }, this.delay)
    },

    methods: {
        startTimer() {
            this.timer = setInterval(() => {
                this.reactionTime += 10
            }, 10)
        },

        stopTimer() {
            clearInterval(this.timer)
            console.log(this.reactionTime)
            this.$emit("endTimer", this.reactionTime)
        }
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius: 20px;
        background: #0faf87;
        color: white;
        text-align: center;
        padding: 100px 0;
        margin: 40px auto;
    }
</style>