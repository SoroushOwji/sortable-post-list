<script setup lang="ts">
import type { TimeTravel } from "@/types";
import TimeTravelItem from "./TimeTravelItem.vue";
defineProps<{
  timeLine: TimeTravel[];
}>();
const emits = defineEmits<{
  (e: "time-travel", timeTravel: TimeTravel, index: number): void;
}>();

const handleTimeTravel = (timeTravel: TimeTravel, index: number) => {
  emits("time-travel", timeTravel, index);
};
</script>

<template>
  <div class="bg-gray-100 border border-gray-200 rounded-md shadow m-8">
    <h3 class="bg-white p-4 rounded-t-md">List of actions committed</h3>
    <div class="p-4">
      <div
        v-if="timeLine.length"
        class="flex flex-col-reverse divide-y divide-y-reverse shadow border border-gray-200 rounded-md bg-white"
      >
        <transition-group name="fade" class="relative">
          <time-travel-item
            :key="timeTravel.id"
            v-for="(timeTravel, index) in timeLine"
            :index="index"
            @time-travel="handleTimeTravel"
            :time-travel="timeTravel"
          ></time-travel-item>
        </transition-group>
      </div>
      <p class="text-gray-400 text-sm text-center" v-else>
        Make changes and your history will appear here
      </p>
    </div>
  </div>
</template>
