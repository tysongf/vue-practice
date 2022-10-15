<template>
   <section>
      <h2>{{ teamName }}</h2>
      <ul>
         <user-item
            v-for="member in members"
            :key="member.id"
            :name="member.fullName"
            :role="member.role"
         ></user-item>
      </ul>
   </section>
   <p>
      <router-link to="/teams/t2">Arbitrary Link to test watcher</router-link>
   </p>
</template>

<script>
import UserItem from "../users/UserItem.vue";

export default {
   inject: ["teams", "users"],
   props: ["team_id"],
   components: {
      UserItem,
   },
   data() {
      return {
         members: [],
         teamName: "",
      };
   },
   watch: {
      $route(newValue) {
         this.loadTeamMembers(newValue.params.team_id);
      },
   },
   methods: {
      loadTeamMembers(team_id) {
         const selectedTeam = this.teams.find((team) => team.id === team_id);
         const members = selectedTeam.members;
         const selectedMembers = [];
         for (const member of members) {
            const selectedUser = this.users.find((user) => user.id === member);
            selectedMembers.push(selectedUser);
         }
         this.members = selectedMembers;
         this.teamName = selectedTeam.name;
      },
   },
   created() {
      this.loadTeamMembers(this.$route.params.team_id);
   },
};
</script>

<style scoped>
section {
   margin: 2rem auto;
   max-width: 40rem;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
   padding: 1rem;
   border-radius: 12px;
}

h2 {
   margin: 0.5rem 0;
}

ul {
   list-style: none;
   margin: 0;
   padding: 0;
}
</style>
