import {
  FC,
  PropsWithChildren,
  createContext,
  useEffect,
  useState,
} from "react";
import { PostItem } from "../Components/PostButtons/PostButtons";

type PostContextType = {
  posts: PostItem[];
  postCount: number;
  ThumbsUp: (id: number) => void;
};

export const PostContext = createContext<PostContextType>(
  {} as PostContextType
);

export const PostContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [posts, setPosts] = useState<PostItem[]>([]);
  const [postCount, setPostCount] = useState(0);

  const getPosts = async () => {
    try {
      const res = await fetch("https://dummyjson.com/posts");

      if (!res.ok) throw new Error("Cannot fetch posts!");

      const { total, posts } = await res.json();

      if (posts) {
        setPosts(posts.map((post : any) => ({...post, likes: 0})))
      };
      if (total) setPostCount(total);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  const ThumbsUp = (id: number) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  return (
    <PostContext.Provider
      value={{
        posts,
        postCount,
        ThumbsUp
      }}
    >
      {children}
    </PostContext.Provider>
  );
};
