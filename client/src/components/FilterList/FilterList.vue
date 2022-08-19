<template>
  <div class="space-y-3">
    <UiFilter title="Опции тарифа" :options="options" />
    <UiFilter
      title="Авиакомпании"
      :options="airlineOptions"
      :onCheck="toggleAirline"
    />
    <button
      class="text-xs text-[#7284e4] border-b border-[#7284e4] border-dashed"
    >
      Сбросить все фильтры
    </button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import UiFilter from "@/components/Ui/UiFilter/UiFilter.vue";

const store = useStore();

const options = [
  {
    label: "Только прямые",
    checked: false,
  },
  {
    label: "Только с багажом",
    checked: false,
  },
  {
    label: "Только возвратные",
    checked: false,
  },
];

const airlineOptions = computed(() => {
  return Object.entries(store.state.airlines).map(([code, name]) => ({
    code: code,
    label: name,
    checked: store.state.selectedAirlines.has(code),
  }));
});

const toggleAirline = ({ code }) => {
  store.dispatch("toggleAirline", code);
};
</script>
