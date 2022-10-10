<template>
   <form @submit.prevent>
      <div>
         <label for="f_name">Name:</label>
         <input id="f_name" type="text" v-model="newFriend.name" />
      </div>
      <div>
         <label for="f_email">Email:</label>
         <input id="f_email" type="text" v-model="newFriend.email" />
      </div>
      <div>
         <label for="f_phone">Phone:</label>
         <input id="f_phone" type="text" v-model="newFriend.phone" />
      </div>
      <div>
         <label for="f_favorite">Favorite:</label>
         <input id="f_favorite" type="checkbox" v-model="newFriend.fav" />
      </div>
      <div>
         <button @click="createFriend">Submit</button>
      </div>
   </form>
</template>

<script>
export default {
   methods: {
      createFriend() {
         this.$emit("create-friend", {
            name: this.newFriend.name,
            email: this.newFriend.email,
            phone: this.newFriend.phone,
            fav: this.newFriend.fav,
         });
      },
   },
   data() {
      return {
         newFriend: {
            name: "",
            email: "",
            phone: "",
            fav: false,
         },
      };
   },
   emits: ["create-friend"],
};
</script>

<style>
#app input {
   font: inherit;
   padding: 0.15rem;
}
#app label {
   font-weight: bold;
   margin-right: 1rem;
   width: 7rem;
   display: inline-block;
}
#app form div {
   margin: 1rem 0;
}
</style>
