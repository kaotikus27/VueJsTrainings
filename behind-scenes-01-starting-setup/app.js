const app = Vue.createApp({
  data() {
    return {
      currentUserInput: '',
      message: 'Vue is great!',
    };
  },
  methods: {

    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      // this.message = this.currentUserInput;
      this.message = this.$refs.userText.value
    },
  },
  
  beforeCreate(){
    console.log('beforeCreate()');
  },
  created(){
    console.log('created()');
  },
  beforeMounted(){
    console.log('Beforemounted()');
  },
  mounted(){
    console.log('mounted()');
  },
  beforeUpdate(){
   console.log('beforeupdate')   
  },
  updated(){
    console.log('updated')   
   },
});

app.mount('#app');
