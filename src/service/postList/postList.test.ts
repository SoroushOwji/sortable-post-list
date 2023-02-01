import { getFirstFivePost } from "@/service/postList";
import { postList, firstFivePostList } from "../__mock__";

import { describe, it, expect } from "vitest";

describe("post list functions", () => {
  it("successfully returns the first five posts", () => {
    expect(getFirstFivePost(postList)).toHaveLength(5);
    expect(getFirstFivePost(postList)).toEqual(firstFivePostList);
  });
});
