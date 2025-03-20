const app = Vue.createApp({

    data(){
        return{
            userInputA:'',
            userInputB:'',
            toggleValue:true
        }
    },

    computed:{
       paraClasses(){
        return {
            user1: this.userInputA === 'user1',
            user2: this.userInputA === 'user2',
            visbile:this.toggleValue,
            hidden:!this.toggleValue
        }
       }
    },

    methods:{

        toggleBtn(){
            this.toggleValue = !this.toggleValue;
        }
        
    }
    

});

app.mount('#assignment')