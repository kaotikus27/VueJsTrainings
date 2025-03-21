const app = Vue.createApp({

    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
         }
    },
    computed:{

    },
    methods:{
        attactMonster(){
            // return this.randomNumber =  Math.random() * (max - min ) + min;
            const attackValue = Math.floor(Math.random() * (12 - 5 ) + 5);
            this.monsterHealth -= attackValue;
        },
        attackPlayer(){
            const attackValue = Math.floor(Math.random() * (15 - 8 ) + 8);
            this.playerHealth -= attackValue;
        }
    }

});

app.mount('game');