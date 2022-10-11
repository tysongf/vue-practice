<template>
   <the-header title="Remember Me"></the-header>
   <stored-resources :resources="storedResources"></stored-resources>
</template>

<script>
import StoredResources from "./components/learning-resources/StoredResources.vue";
import TheHeader from "./components/layout/TheHeader.vue";
export default {
   components: {
      TheHeader,
      // "stored-resources": StoredResources, //explicit
      StoredResources, //shorthand
   },
   data() {
      return {
         storedResources: [
            {
               id: "official-guide",
               title: "Official Guide",
               description: "The official Vue.js documentation.",
               link: "https://vuejs.org",
            },
            {
               id: "google",
               title: "Google",
               description: "A heavily censored search engine.",
               link: "https://google.com",
            },
         ],
      };
   },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap");

* {
   box-sizing: border-box;
}

html {
   font-family: "Roboto", sans-serif;
}

body {
   margin: 0;
}
</style>
