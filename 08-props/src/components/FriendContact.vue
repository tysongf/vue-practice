<template>
   <li>
      <h2>{{ name }} {{ isFavorite ? "(Favorite)" : "" }}</h2>
      <button @click="toggleFavorite">Toggle Fav</button>
      <button @click="toggleDetails">
         {{ detailsAreVisible ? "Hide" : "Show" }} Details
      </button>
      <button @click="$emit('delete-friend', id)">Delete</button>
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
      id: { type: String, required: true },
      isFavorite: { type: Boolean, required: false, default: false },
   },
   emits: ["toggle-favorite", "delete-friend"],
   // Custom emitter validation
   // emits: {
   //    "toggle-favorite": function (id) {
   //       return id ? true : false;
   //    },
   // },
   data() {
      return {
         detailsAreVisible: false,
      };
   },
   methods: {
      toggleDetails() {
         this.detailsAreVisible = !this.detailsAreVisible;
      },
      toggleFavorite() {
         this.$emit("toggle-favorite", this.id);
      },
   },
};
</script>
