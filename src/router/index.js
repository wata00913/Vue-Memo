import { createRouter, createWebHistory } from "vue-router";
import MemoListView from "../views/MemoListView.vue";
import MemoEditView from "../views/MemoEditView.vue";

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
    },
    {
      path: "/memo-list/:id",
      name: "memoEdit",
      component: MemoEditView,
    },
  ],
});

export default router;
