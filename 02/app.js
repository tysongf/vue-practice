const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: "",
         full_name: "",
      };
   },
   methods: {
      addCount(amt) {
         this.counter += amt;
      },
      subCount(amt) {
         this.counter -= amt;
      },
      setName(event) {
         this.name = event.target.value;
      },
      setFullName(event, lastName) {
         this.full_name = event.target.value + " " + lastName;
      },
   },
});

app.mount("#events");
