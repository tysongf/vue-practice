const app = Vue.createApp({
   data() {
      return {
         counter: 0,
      };
   },
   methods: {
      addCount(amt) {
         this.counter += amt;
      },
      subCount(amt) {
         this.counter -= amt;
      },
   },
});

app.mount("#events");
