const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: '',
      lastname:'',
      fullname:''
    };
  },

  watch:{
    name(value){
      if(value === ''){
        this.fullname= '';
      }else{
        this.fullname = value + ' ' + "Halaman";
      }
      
    }
  },
  
  computed: {
    // fullname() {
    //   if(this.name === ''){
    //     return '';
    //   }
    //   return this.name ? this.name + ' Halamans' : '';
    // }
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
