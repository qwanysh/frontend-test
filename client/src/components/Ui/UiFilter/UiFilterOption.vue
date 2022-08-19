<template>
  <button
    class="py-2 px-3 flex items-center space-x-3 hover:bg-[#ebebeb]"
    @click="onCheck"
  >
    <img width="12" :src="iconSrc" />
    <span class="text-xs">{{ props.label }}</span>
  </button>
</template>

<script setup>
import { defineProps, computed } from "vue";
import CheckboxIcon from "@/assets/icons/Checkbox.svg";
import CheckboxCheckedIcon from "@/assets/icons/CheckboxChecked.svg";

const props = defineProps({
  checked: Boolean,
  label: String,
  onCheck: Function,
});

const iconSrc = computed(() => {
  return props.checked ? CheckboxCheckedIcon : CheckboxIcon;
});
</script>
