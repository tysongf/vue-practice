<template>
   <form @submit.prevent>
      <div>
         <label for="u_name"></label>
         <input id="u_name" type="text" v-model="userName" />
      </div>
      <div>
         <label for="u_name"></label>
         <input id="u_name" type="number" v-model="userAge" />
      </div>
      <div>
         <button @click="submit">Submit</button>
      </div>
   </form>
</template>

<script>
export default {
   data() {
      return {
         userName: "",
         userAge: 0,
      };
   },
   methods: {
      submit() {
         this.$emit("set-active-user", this.userName, this.userAge);
      },
   },
   emits: ["set-active-user"],
};
</script>
