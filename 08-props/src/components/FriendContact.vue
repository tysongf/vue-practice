<template>
   <li>
      <h2>{{ name }} {{ isFav ? "(Favorite)" : "" }}</h2>
      <button @click="toggleFavorite">Toggle Fav</button>
      <button @click="toggleDetails">
         {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <ul v-if="detailsAreVisible">
         <li>
            <strong>Phone:</strong>
            {{ phoneNumber }}
         </li>
         <li>
            <strong>Email:</strong>
            {{ emailAddress }}
         </li>
      </ul>
   </li>
</template>

<script>
export default {
   props: {
      name: { type: String, required: true },
      phoneNumber: { type: String, required: true },
      emailAddress: {
         type: String,
         required: true,
         validator: function (value) {
            if (value == "friendo@gmail.com") return false;
            return true;
         },
      },
      isFavorite: { type: Boolean, required: false, default: false },
   },
   data() {
      return {
         detailsAreVisible: false,
         isFav: this.isFavorite,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.isFav = !this.isFav;
      },
   },
};
</script>
