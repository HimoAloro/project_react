import { useContext, useEffect, useState } from "react";
import { PostContext } from "../../Context/PostContext";

export const PostCounter = () => {
  // counter teraz w context
  // const [postNumber, setPostNumber] = useState(0);
  const { postCount } = useContext(PostContext);

  // To też jest w kotekscie!
  // const GetPostNumber = async () => {
  //   try {
  //     const result = await fetch("https://dummyjson.com/posts");
  //     if (!result.ok) throw new Error("Cannot fetch posts!");
  //     const { total } = await result.json();
  //     setPostNumber(total);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // W kontekście
  // useEffect(() => {
  //   GetPostNumber();
  // }, []);
  return <h2>Liczba dostępnych postów:{postCount}</h2>;
};
