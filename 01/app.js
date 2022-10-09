const app = Vue.createApp({
   data() {
      return {
         my_name: "Tyson Fritz",
         my_age: 40,
         image_url: "https://pngimg.com/uploads/pokemon/pokemon_PNG14.png",
      };
   },
   methods: {
      randomFloat() {
         return Math.random();
      },
   },
}).mount("#assignment");
