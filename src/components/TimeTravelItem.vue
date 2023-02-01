<script setup lang="ts">
import type { TimeTravel } from "@/types";
const props = defineProps<{
  timeTravel: TimeTravel;
  index: number;
}>();
const emits = defineEmits<{
  (e: "time-travel", timeTravel: TimeTravel, index: number): void;
}>();

const handleTimeTravel = () => {
  emits("time-travel", props.timeTravel, props.index);
};
</script>

<template>
  <div class="p-4 flex flex-wrap align-baseline">
    <div class="flex-grow py-2">{{ timeTravel.text }}</div>
    <button
      @click="handleTimeTravel"
      class="bg-secondary py-2 px-4 rounded-md hover:bg-secondary-light active:bg-secondary-dark transition duration-200 ease-in-out"
    >
      Time travel
    </button>
  </div>
</template>

<style scoped></style>
