

function randomValue(min,max){
     // return this.randomNumber =  Math.random() * (max - min ) + min;
    return Math.floor(Math.random() * (max - min ) + min);
}


const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
         }
    },
    computed:{
        mosnterBarStyles(){
          return   {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
          return   {width: this.playerHealth + '%'}
        }
    },
    methods:{
        attackMonster(){
            const attackValue = randomValue(7,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();

            console.log("clicked")
            console.log(attackValue)
        },
        attackPlayer(){
            const attackValue = randomValue(8,15);
            this.playerHealth -= attackValue;
        }
    }

});
app.mount('#game');