<template>
  <div
    class="bg-white rounded overflow-hidden shadow-[0px_2px_4px_rgba(0,0,0,0.15)] grid grid-cols-[1fr_240px]"
  >
    <div class="pt-10 px-11 pb-4 flex flex-col justify-between">
      <div class="flex items-center">
        <div class="flex items-center space-x-3">
          <img
            class="h-5 block"
            :src="airline.logoSrc"
            :alt="airline.name"
            height="20"
            width="20"
          />
          <span class="font-semibold text-sm">{{ airline.name }}</span>
        </div>
        <div class="flex space-x-7">
          <time-stamp />
          <!-- <route-info /> -->
          <time-stamp />
        </div>
      </div>
      <div class="flex space-x-10 items-center">
        <div class="flex space-x-5 items-center">
          <button
            class="text-xs text-[#7284e4] border-b border-[#7284e4] border-dashed"
          >
            Детали перелета
          </button>
          <button
            class="text-xs text-[#7284e4] border-b border-[#7284e4] border-dashed"
          >
            Условия тарифа
          </button>
        </div>
        <div v-if="props.flight.refundable" class="flex items-center space-x-2">
          <img src="@/assets/icons/NonRefundeble.svg" />
          <span class="text-xs">невозвратный</span>
        </div>
      </div>
    </div>
    <div class="bg-[#f5f5f5] py-3 px-5 flex flex-col items-center space-y-3">
      <span class="text-2xl">{{ props.flight.price }} ₸</span>
      <ui-button class="self-stretch">Выбрать</ui-button>
      <span class="text-xs text-[#707276]">Цена за всех пассажиров</span>
      <div class="self-stretch flex justify-between items-center space-x-1.5">
        <span class="text-[#202123] text-xs">Нет багажа</span>
        <button
          class="bg-[#eaf0fa] rounded-[2px] py-1 px-2 text-xs text-[#5763b3]"
        >
          + Добавить багаж
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, computed } from "vue";
import { useStore } from "vuex";
import TimeStamp from "./TimeStamp.vue";
// import RouteInfo from "./RouteInfo.vue";
import UiButton from "@/components/Ui/UiButton.vue";

const store = useStore();
const props = defineProps({
  flight: Object,
});

const airline = computed(() => {
  const airlineCode = props.flight.validating_carrier;
  return {
    name: store.state.airlines[airlineCode],
    logoSrc: `https://aviata.kz/static/airline-logos/80x80/${airlineCode}.png`,
  };
});
</script>
