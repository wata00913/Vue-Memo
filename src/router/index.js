import { createRouter, createWebHistory } from "vue-router";
import MemoListView from "../views/MemoListView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MemoListView,
    },
    {
      path: "/memo-list",
      name: "memoList",
      component: MemoListView,
    }
  ],
});

export default router;
