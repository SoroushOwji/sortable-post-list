import { ref } from "vue";
import type { Ref } from "vue";
import type { Post } from "@/types";

export const getFirstFivePost = (postList: Post[]): Post[] => {
  return postList.slice(0, 5);
};

export const getPostList = async (): Promise<Post[] | null> => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const postList: Post[] = await response.json();
    return postList;
  } catch (error) {
    console.log("Failed to get the post list", error);
    return null;
  }
};

export function usePostList() {
  const postList: Ref<Post[]> = ref([]);
  const hasError: Ref<boolean> = ref(false);

  function updatePostList(newPostList: Post[]) {
    postList.value = newPostList;
  }
  async function initializePostList() {
    const responsePostList = await getPostList();
    if (responsePostList != null) {
      updatePostList(getFirstFivePost(responsePostList));
      hasError.value = false;
    } else {
      hasError.value = true;
    }
  }

  return {
    postList,
    updatePostList,
    initializePostList,
    hasError,
  };
}
