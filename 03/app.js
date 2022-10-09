const app = Vue.createApp({
   data() {
      return {
         output1: "",
         output2: "",
      };
   },
   methods: {
      showAlert() {
         alert("Vue is awesome!");
      },
      setOutput(event) {
         this.output1 = event.target.value;
      },
      enterOutput(event) {
         this.output2 = event.target.value;
      },
   },
}).mount("#assignment");
