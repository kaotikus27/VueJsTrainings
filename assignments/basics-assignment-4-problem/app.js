const app = Vue.createApp({

    data(){
        return{
            userInputA:'',
            userInputB:'',
            class1:false,
            class2:false,
            toggleValue:true
        }
    },

    computed:{
       
    },

    methods:{

        classSelected(classType){
            if(classType === 'user1'){
                this.class1 = !this.class1;
            }else if (classType === 'user2'){
                this.class2 = !this.class2;
            }
        },

        toggleBtn(){
            this.toggleValue = !this.toggleValue;
        }
        
    }
    

});

app.mount('#assignment')