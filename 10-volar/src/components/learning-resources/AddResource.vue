<template>
   <base-card>
      <form @submit.prevent="submitForm">
         <div class="form-control">
            <label for="title">Title</label>
            <input id="title" name="title" type="text" ref="res_title" />
         </div>
         <div class="form-control">
            <label for="description">Description</label>
            <textarea
               id="description"
               name="description"
               rows="3"
               ref="res_description"
            ></textarea>
         </div>
         <div class="form-control">
            <label for="link">Link</label>
            <input id="link" name="link" type="url" ref="res_link" />
         </div>
         <div class="form-control">
            <base-button type="submit">Add Resource</base-button>
         </div>
      </form>
   </base-card>
</template>

<script>
export default {
   data() {
      return {
         res_title: "",
         res_description: "",
         res_link: "",
      };
   },
   inject: ["addResource"],
   methods: {
      submitForm() {
         this.addResource(
            this.$refs.res_title.value,
            this.$refs.res_description.value,
            this.$refs.res_link.value
         );
      },
   },
};
</script>

<style scoped>
label {
   font-weight: bold;
   display: block;
   margin-bottom: 0.5rem;
}

input,
textarea {
   display: block;
   width: 100%;
   font: inherit;
   padding: 0.15rem;
   border: 1px solid #ccc;
}

input:focus,
textarea:focus {
   outline: none;
   border-color: #3a0061;
   background-color: #f7ebff;
}

.form-control {
   margin: 1rem 0;
}
</style>
