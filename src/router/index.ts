import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import CanvasView from "../views/canvas-view.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: CanvasView,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
