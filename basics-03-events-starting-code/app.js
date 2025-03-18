const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      confirmedName: ''
    };
  },
  
  computed: {
    fullname() {
      if(this.name === ''){
        return '';
      }
      return this.name ? this.name + ' Halaman' : '';
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
