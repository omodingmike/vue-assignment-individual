const {createApp} = Vue
createApp({
    methods:{
        toggleBulbState(){
            this.bulbOn = !this.bulbOn;
        }
    },
    data(){
        return{
            bulbOn:false
        }
    }
}).mount('#app')
