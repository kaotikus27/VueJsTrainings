const app = Vue.createApp({

    //data always return an object
    data(){
        return {
            courseGoalA:"finish the course ",
            courseGoalB:"learn vues",
            vueLink: 'https://vuejs.org/'
        };
    },

    methods:{
        outputGoal(){
            const randomNumber = Math.random();
            if(randomNumber < 0.5){
                return this.courseGoalA;
            }else{
                return this.courseGoalB;
            }
        }
    }

});


app.mount('#user-goal');