import { create } from "zustand";
import uuid from 'react-uuid';

export const usePosts = create((set) => ({
  posts: [],
  push: (creatorId, postText, authorName) =>
    set((state) => ({
      posts: [
        ...state.posts,
        {
          postId: uuid(),
          creatorId: creatorId,
          postText: postText,
          authorName: authorName,
          publishTime: new Date().toDateString(),
        },
      ],
    }))
}));