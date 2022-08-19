<template>
  <div class="py-3 bg-[#f5f5f5] rounded space-y-3">
    <div class="px-3 flex justify-between items-center">
      <h3 class="font-bold text-sm">{{ props.title }}</h3>
      <button>
        <img src="@/assets/icons/CloseFilter.svg" />
      </button>
    </div>
    <div v-if="props.options.length" class="flex flex-col">
      <UiFilterOption
        v-for="(option, idx) in props.options"
        :key="idx"
        :label="option.label"
        :checked="option.checked"
        :onCheck="() => onCheck(option)"
      />
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import UiFilterOption from "./UiFilterOption.vue";

const props = defineProps({
  title: String,
  options: Array,
  onCheck: Function,
});
</script>
