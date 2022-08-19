<template>
  <div class="space-y-3">
    <flight-card v-for="flight in flights" :key="flight.id" :flight="flight" />
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import FlightCard from "./FlightCard/FlightCard.vue";

const store = useStore();

const flights = computed(() => {
  return store.state.flights;
});
</script>
