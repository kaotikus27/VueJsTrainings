const app = Vue.createApp({


    data(){
        return{
            detailsAreVisible:false,
            friends:[
                { id:"manuel",name:'Manuel Lorenze', phone:'01234 5678 091', email:'manuel@gloc.com'},
                { id:"julie",name:'julie hehehe', phone:'052324 5278 011', email:'julie@gloc.com'},
            ]
        }
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }

});

app.mount('#app');