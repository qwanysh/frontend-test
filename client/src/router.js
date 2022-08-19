import { createRouter, createWebHashHistory } from "vue-router";
import SearchResultsView from "@/views/SearchResultsView";

const routes = [
  {
    path: "/",
    redirect: () => ({ name: "search-results" }),
  },
  {
    path: "/search/results",
    name: "search-results",
    component: SearchResultsView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
