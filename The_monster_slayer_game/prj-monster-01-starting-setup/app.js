

function randomValue(min,max){
     // return this.randomNumber =  Math.random() * (max - min ) + min;
    return Math.floor(Math.random() * (max - min ) + min);
}



const app = Vue.createApp({
    data(){
        return{
            playerHealth:100,
            monsterHealth:100,
            currentRound:0
         }
    },
    computed:{
        mosnterBarStyles(){
          return   {width: this.monsterHealth + '%'}
        },
        playerBarStyles(){
          return   {width: this.playerHealth + '%'}
        },
        mayUseSpecialAttack(){
            return this.currentRound % 3 !== 0;
        }
    },
    methods:{
        attackMonster(){
            this.currentRound++;
            const attackValue = randomValue(5,12);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        attackPlayer(){
            const attackValue = randomValue(8,15);
            this.playerHealth -= attackValue;
        },
        specialAttackMonster(){
            this.currentRound++;
            const attackValue = randomValue(10,25);
            this.monsterHealth -= attackValue;
            this.attackPlayer();
        },
        healPlayer(){
            const healValue = randomValue(8,20);
            if(this.playerHealth + healValue > 100 ){
                this.playerHealth = 100;
            }else{
                this.playerHealth += healValue;
            }
        }
    }

});
app.mount('#game');