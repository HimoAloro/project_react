import { useContext, useEffect, useState } from "react";
import { PostButtons, PostItem } from "../../Components/PostButtons/PostButtons";
import { PostContext } from "../../Context/PostContext";


export const PostList = () => {
  const {posts}=useContext(PostContext);
  // const [postItems, setPostItems] = useState<PostItem[]>([]);

  // const GetPostItems = async () => {
  //   try {
  //     const result = await fetch("https://dummyjson.com/posts");
  //     if (!result.ok) throw new Error("cannot fetch posts");
  //     const { posts } = await result.json();
  //     setPostItems((prev) => [...posts, ...prev]);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   GetPostItems();
  // }, []);

  return (
  <>
    {posts.map((item)=>{
        return (
            <>
            <PostButtons id={item.id} title={item.title} likes={item.likes} userId={item.userId}></PostButtons>
            </>
    )
    })}
  </>);
};
