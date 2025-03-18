const app = Vue.createApp({

    data(){
        return{
            alertData: "this is task 1",
            usersInput:'',
            usersInputB:'',
            confirmUserInput:'',
            confirmUserInputB:''
        }
    },
    methods:{
        showAlert(){
            alert(this.alertData);
        },
        setInput(event){
           this.usersInput = event.target.value;
        },
        setInputB(event){
            this.usersInputB = event.target.value;
         },
        confirmInput(){
            this.confirmUserInput = this.usersInput;
        },
        confirmInputB(){
            this.confirmUserInputB = this.usersInputB;
        }

    }

});

app.mount('#assignment')