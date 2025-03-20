const app = Vue.createApp({

    data(){
        return{
            inputClass:'',
            toggleValue:true,
            inputBackgroundColor:''
        }
    },

    computed:{
       paraClasses(){
        return {
            user1: this.inputClass === 'user1',
            user2: this.inputClass === 'user2',
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