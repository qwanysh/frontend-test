<template>
  <div class="grid grid-cols-[240px_1fr] gap-5">
    <filter-list />
    <flight-list />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useStore } from "vuex";
import FilterList from "@/components/FilterList/FilterList.vue";
import FlightList from "@/components/FlightList/FlightList.vue";

const store = useStore();

onMounted(async () => {
  store.dispatch("load");
});
</script>
