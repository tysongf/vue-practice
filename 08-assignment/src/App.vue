<template>
   <active-user
      v-if="activeUser"
      :name="activeUser.name"
      :age="activeUser.age"
   ></active-user>
   <user-data @set-active-user="setActiveUser"></user-data>
</template>

<script>
export default {
   data() {
      return {
         activeUser: null,
      };
   },
   methods: {
      setActiveUser(userName, userAge) {
         this.activeUser = {
            name: userName,
            age: userAge,
         };
      },
   },
};
</script>
