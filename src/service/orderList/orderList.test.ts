import { createNewOrderList, createTransitionText } from "@/service/orderList";
import { describe, it, expect } from "vitest";
import { Direction } from "@/types";

describe("Create New Order", () => {
  it("successfully reorder to lower", () => {
    expect(createNewOrderList(3, 3, Direction.Down, [0, 1, 2, 3, 4])).toEqual([
      0, 1, 2, 4, 3,
    ]);
  });
  it("successfully reorder to upper", () => {
    expect(createNewOrderList(3, 3, Direction.Up, [0, 1, 2, 3, 4])).toEqual([
      0, 1, 3, 2, 4,
    ]);
  });
});

describe("Create transition text", () => {
  it("successfully reorder to lower", () => {
    expect(createTransitionText(3, 3, Direction.Down)).toEqual(
      "Moved post 4 from index 3 to 4"
    );
  });
  it("successfully reorder to upper", () => {
    expect(createTransitionText(3, 3, Direction.Up)).toEqual(
      "Moved post 4 from index 3 to 2"
    );
  });
});
