const {createApp} = Vue
createApp({
    methods: {
        toggleBulbState() {
            this.bulbOn = !this.bulbOn;
            this.imageSource = this.bulbOn ? 'assets/images/on.png' : 'assets/images/off.png';
            this.bulbButtonText = this.bulbOn ? "TURN OFF" : "TURN ON"
        },
        toggleTvState() {
            this.tvOn = !this.tvOn;
        }
    },
    data() {
        return {
            bulbOn: false,
            imageSource: 'assets/images/off.png',
            bulbButtonText: 'TURN ON',
            tvOn:false,
            showImage:false
        }
    }
}).mount('#app')
