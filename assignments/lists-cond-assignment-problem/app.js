const app = Vue.createApp({
    data(){
       return{
        enteredValue:'',
        tasks:[],
        toggle:true
       }
    },
    computed:{
        btnCaption(){
           return this.toggle ? 'Hide' : 'Show List';
        }
    },
    methods:{
        addTask(){
            this.tasks.push(this.enteredValue);
        },
        toggleBtn(){
            this.toggle = !this.toggle;
        }
    }
});

app.mount("#assignment");