import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import TeamsList from "./components/teams/TeamsList.vue";
import TeamMembers from "./components/teams/TeamMembers.vue";
import UsersList from "./components/users/UsersList.vue";
import NotFound from "./components/nav/NotFound.vue";

const app = createApp(App);
const router = createRouter({
   history: createWebHistory(),
   routes: [
      { path: "/", redirect: "/teams" },
      { path: "/teams", component: TeamsList },
      { path: "/teams/:team_id", component: TeamMembers, props: true },
      { path: "/users", component: UsersList },
      { path: "/:notFound(.*)", component: NotFound },
   ],
   linkActiveClass: "active",
   linkExactActiveClass: "exact-active",
});

app.use(router);

app.mount("#app");
