import { useEffect, useState } from "react";
import { PostButtons, PostItem } from "../../Components/PostButtons/PostButtons";


export const PostList = () => {
  const [postItems, setPostItems] = useState<PostItem[]>([]);

  const GetPostItems = async () => {
    try {
      const result = await fetch("https://dummyjson.com/posts");
      if (!result.ok) throw new Error("cannot fetch posts");
      const { posts } = await result.json();
      setPostItems((prev) => [...posts, ...prev]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    GetPostItems();
  }, []);

  return (
  <>
    {postItems.map((item)=>{
        return (
            <>
            <PostButtons id={item.id} title={item.title} userId={item.userId}></PostButtons>
            </>
    )
    })}
  </>);
};
