const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      lastname:'',
      //fullname:''
    };
  },

  watch:{
    counter(value){
      if(value <= 0){
        this.counter = 0;
      }
    }
    // name(value){
    //   if(value === ''){
    //     this.fullname= '';
    //   }else{
    //     this.fullname = value + ' ' + this.lastname;
    //   }
    // },
    // lastname(value){
    //   if(value === ''){
    //     this.fullname= '';
    //   }else{
    //     this.fullname = this.name + ' ' + value;
    //   }
    // }
  },
  
  computed: {
    fullname() {
      if(this.name === '' || this.lastname === ''){
        return '';
      }
      return this.name + ' ' + this.lastname;
    }
  },

  methods: {
    confirmInput() {
      this.confirmedName = this.name;
    },

    add(num) {
      this.counter += num;
    },
    
    remove(num) {
      this.counter -= num;
    },

    setName(event) {
      this.name = event.target.value;
    },

    submitForm() {
      alert('submitted');
    },

    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
