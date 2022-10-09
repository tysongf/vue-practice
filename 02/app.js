const app = Vue.createApp({
   data() {
      return {
         counter: 0,
         name: "",
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
   },
});

app.mount("#events");
