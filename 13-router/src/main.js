import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";

const app = createApp(App);
const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/teams", component: TeamsList },
      { path: "/teams/:team_id", component: TeamMembers },
      { path: "/users", component: UsersList },
   ],
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active",
});

app.use(router);

app.mount("#app");
