const {createApp} = Vue
createApp({
    methods: {
        toggleBulbState() {
            this.bulbOn = !this.bulbOn;
            this.imageSource = this.bulbOn ? 'assets/images/on.png' : 'assets/images/off.png'
        }
    },
    data() {
        return {
            bulbOn: false,
            imageSource: 'assets/images/off.png'
        }
    }
}).mount('#app')
