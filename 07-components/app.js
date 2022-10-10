const app = Vue.createApp({
   data() {
      return {
         friends: [
            {
               id: 1,
               name: "Julie Jones",
               phone: "773-223-3214",
               email: "jjbawss@gmail.com",
            },
            {
               id: 2,
               name: "Maximilian Schwartzmueller",
               phone: "387-242-8489",
               email: "maximueller@gmail.com",
            },
         ],
      };
   },
   methods: {},
});

app.component("friend-contact", {
   template: `
   <li key="friend.id">
      <h2>{{friend.name}}</h2>
      <button @click="toggleDetails()">Show Details</button>
      <ul v-if="details_visible">
         <li><strong>Phone:</strong> {{friend.phone}}</li>
         <li><strong>Email:</strong> {{friend.email}}</li>
      </ul>
   </li>`,
   data() {
      return {
         friend: {
            id: 2,
            name: "Maximilian Schwartzmueller",
            phone: "387-242-8489",
            email: "maximueller@gmail.com",
         },
         details_visible: false,
      };
   },
   methods: {
      toggleDetails() {
         this.details_visible = !this.details_visible;
      },
   },
});

app.mount("#app");
