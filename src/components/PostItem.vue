<script setup lang="ts">
import { computed } from "vue";

import { Direction, type Post } from "@/types";
import ChevronDown from "@/components/icons/chevron-down.vue";
import ChevronUp from "@/components/icons/chevron-up.vue";

const props = defineProps<{
  post?: Post;
  index: number;
  order: number;
  length: number;
}>();

const emits = defineEmits<{
  (e: "move-up", index: number, order: number, direction: Direction): void;
  (e: "move-down", index: number, order: number, direction: Direction): void;
}>();

const isNotFirst = computed(() => props.index !== 0);
const isNotLast = computed(() => props.index !== props.length - 1);

const moveUp = () => {
  emits("move-up", props.index, props.order, Direction.Up);
};
const moveDown = () => {
  emits("move-down", props.index, props.order, Direction.Down);
};
</script>

<template>
  <div
    class="h-20 my-4 bg-white flex border border-gray-200 rounded-md shadow px-4"
  >
    <div v-if="post" class="flex-grow flex flex-wrap content-center">
      {{ post.title }}
    </div>
    <div class="flex-grow flex flex-wrap content-center" v-else>
      <div class="animate-pulse flex">
        <div class="grid gap-4 w-56">
          <div class="h-2 bg-slate-200 rounded col-span-2"></div>
          <div class="h-2 bg-slate-200 rounded col-span-1"></div>
        </div>
      </div>
    </div>
    <div class="flex flex-col justify-evenly">
      <div v-if="isNotFirst">
        <button data-test="move-up" @click="moveUp" class="post-item__button">
          <chevron-up class-name="w-3"></chevron-up>
        </button>
      </div>
      <div v-if="isNotLast">
        <button
          data-test="move-down"
          @click="moveDown"
          class="post-item__button"
        >
          <chevron-down class="w-3"></chevron-down>
        </button>
      </div>
    </div>
  </div>
</template>
