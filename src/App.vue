<script setup lang="ts">
import PostList from "./components/PostList.vue";
import TimeTravelList from "./components/TimeTravelList.vue";
import { useOrderList } from "@/service/orderList";
import { useTimeTravel } from "@/service/timeTravelList";
import type { TimeTravel } from "./types";

const { orderList, updateOrderList } = useOrderList();
const { timeLine, makeNewTimeTravel, handleTimeTravel } = useTimeTravel();

function timeTravel(timeTravel: TimeTravel, index: number) {
  const newOrderList = handleTimeTravel(timeTravel, index);
  updateOrderList(newOrderList);
}
function changePostOrder(newOrderList: number[], text: string) {
  makeNewTimeTravel(orderList.value, text);
  updateOrderList(newOrderList);
}
</script>

<template>
  <header class="-z-10 relative h-56">
    <div class="header__background h-full bg-primary"></div>
  </header>

  <main class="main grid grid-cols-12 -mt-48">
    <section class="lg:col-start-2 lg:col-span-5 md:col-span-6 col-span-12">
      <post-list
        @post-order-change="changePostOrder"
        :order-list="orderList"
      ></post-list>
    </section>
    <section class="lg:col-span-5 md:col-span-6 col-span-12">
      <time-travel-list
        @time-travel="timeTravel"
        :time-line="timeLine"
      ></time-travel-list>
    </section>
  </main>
</template>

<style scoped>
.header__background {
  clip-path: polygon(0 0, 0 100%, 100% 0);
}
</style>
