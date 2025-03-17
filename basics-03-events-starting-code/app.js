const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name:'',
      confirmedName:''
    };
  },
  
  methods:{

    confirmInput(){
      this.confirmedName = this.name;
    },

    add(num){
      return this.counter = this.counter + num;
    },
    
    remove(num){
      return this.counter = this.counter- num;
    },

    setName(event,lastName){
      this.name = event.target.value + ' ' + lastName;
    },

    submitForm(event){
      // event.preventDefault();
      alert('submitted');
    }
  }

});

app.mount('#events');
