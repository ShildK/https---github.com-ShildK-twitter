import { create } from "zustand";

export const usePosts = create((set) => ({
  posts: [],
  push: (creatorId, postText, authorName) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          postId: new Date().getTime(),
          creatorId: creatorId,
          postText: postText,
          authorName: authorName,
          publishTime: new Date().toDateString(),
        },
      ],
    }))
}));