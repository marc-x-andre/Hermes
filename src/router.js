import Landing from "views/Landing/index.vue";
import Dashboard from "views/Dashboard/index.vue";
import NewEntry from "views/NewEntry/index.vue";
import Settings from "views/Settings/index.vue";
import * as VueRouter from "vue-router";

const routes = [
  { path: "/", component: Landing },
  { path: "/dash", component: Dashboard },
  { path: "/new", component: NewEntry },
  { path: "/settings", component: Settings },
];

export default VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes,
});
