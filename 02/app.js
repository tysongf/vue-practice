const app = Vue.createApp({
   data() {
      return {
         counter: 0,
      };
   },
   methods: {
      addCount() {
         this.counter++;
      },
      subCount() {
         this.counter--;
      },
   },
});

app.mount("#events");
