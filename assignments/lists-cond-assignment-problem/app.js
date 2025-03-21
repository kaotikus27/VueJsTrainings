const app = Vue.createApp({
    data(){
       return{
        enteredValue:'',
        btnText: 'Hide',
        tasks:[],
        toggle:true
       }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredValue);
        },
        toggleBtn(){
            this.toggle = !this.toggle;
            this.btnText = 'Show List'
        }
    }
});

app.mount("#assignment");