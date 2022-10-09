const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: "",
         full_name: "",
         confirmed_name: "",
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
      submitForm(event) {},
      confirmName() {
         this.confirmed_name = this.full_name;
      },
   },
});

app.mount("#events");
