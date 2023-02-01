<script setup lang="ts">
import { onMounted } from "vue";
import type { Direction } from "@/types";
import { usePostList } from "@/service/postList";
import { createNewOrderList, createTransitionText } from "@/service/orderList";
import PostItem from "./PostItem.vue";

const { postList, initializePostList, hasError } = usePostList();

const props = defineProps<{
  orderList: number[];
}>();

const emits = defineEmits<{
  (e: "post-order-change", order: number[], text: string): void;
}>();

function handleMove(index: number, order: number, direction: Direction) {
  const newOrderList = createNewOrderList(
    index,
    order,
    direction,
    props.orderList
  );
  const transitionText = createTransitionText(index, order, direction);
  emits("post-order-change", newOrderList, transitionText);
}

onMounted(() => {
  initializePostList();
});
</script>

<template>
  <div class="m-8">
    <h3 class="text-white text-lg tracking-widest">Sortable Post List</h3>
    <div
      v-if="hasError"
      class="mt-4 p-4 shadow border-gray-200 bg-neutral-50 rounded text-gray-600 italic text-center"
    >
      <p>Something went wrong. Please try again later</p>
    </div>
    <transition-group v-else name="fade" class="relative">
      <post-item
        v-for="(order, index) in orderList"
        :order="order"
        :index="index"
        :key="order"
        :length="orderList.length"
        :post="postList?.[order]"
        @move-down="handleMove"
        @move-up="handleMove"
      ></post-item>
    </transition-group>
  </div>
</template>
