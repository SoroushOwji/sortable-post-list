import { ref } from "vue";
import { Direction } from "@/types";

export const createTransitionText = (
  index: number,
  order: number,
  direction: Direction
): string => {
  switch (direction) {
    case Direction.Up:
      return `Moved post ${order + 1} from index ${index} to ${index - 1}`;
    case Direction.Down:
      return `Moved post ${order + 1} from index ${index} to ${index + 1}`;
    default:
      return "No move happened";
  }
};

export const createNewOrderList = (
  index: number,
  order: number,
  direction: Direction,
  orderList: number[]
): number[] => {
  const newOrderList = [...orderList];

  switch (direction) {
    case Direction.Up: {
      const upper = newOrderList[index - 1];
      newOrderList[index - 1] = order;
      newOrderList[index] = upper;
      return newOrderList;
    }
    case Direction.Down: {
      const lower = newOrderList[index + 1];
      newOrderList[index + 1] = order;
      newOrderList[index] = lower;
      return newOrderList;
    }
    default:
      return newOrderList;
  }
};

export function useOrderList() {
  const EXPECTED_LENGTH = 5;
  const defaultOrderList = Array.from(
    Array(EXPECTED_LENGTH),
    (_, index) => index
  );

  const orderList = ref(defaultOrderList);

  function updateOrderList(newOrderList: number[]) {
    orderList.value = newOrderList;
  }

  return {
    orderList,
    updateOrderList,
  };
}
