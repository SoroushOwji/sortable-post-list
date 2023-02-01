import { ref, type Ref } from "vue";
import type { TimeTravel } from "@/types";

export function useTimeTravel() {
  const timeLine: Ref<TimeTravel[]> = ref([]);
  const counter = ref(0);

  function makeNewTimeTravel(order: number[], text: string) {
    timeLine.value = timeLine.value.concat({
      order,
      text,
      id: counter.value,
    });
    counter.value++;
  }

  function handleTimeTravel(timeTravel: TimeTravel, index: number): number[] {
    timeLine.value = timeLine.value.slice(0, index);
    return timeTravel.order;
  }

  return { timeLine, makeNewTimeTravel, handleTimeTravel };
}
