const app = Vue.createApp({
    data(){
        return{
            friends:[
                { id:"manuel",name:'Manuel Lorenze', phone:'01234 5678 091', email:'manuel@gloc.com'},
                { id:"julie",name:'julie hehehe', phone:'052324 5278 011', email:'julie@gloc.com'},
            ]
        }
    },
    
});

app.component('friend-contact',{
  template:`
  <li v-for="friend in friends" :key="friend.id">
          <h2>{{friend.name}}</h2>
          <button @click="toggleDetails">{{detailsAreVisible ? 'Hide': 'Show'}} Details</button>
          <ul v-if="detailsAreVisible">
            <li><strong>Phone:</strong>{{friend.phone}}</li>
            <li><strong>Email:</strong>{{friend.email}}</li>
          </ul>
   </li>
  `,
    data(){
        return{
            detailsAreVisible:false
        };
    },
    methods:{
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible;
        }
    }
});

app.mount('#app');