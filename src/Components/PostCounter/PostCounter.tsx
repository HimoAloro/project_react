import { useEffect, useState } from "react";

export const PostCounter = () => {
  const [postNumber, setPostNumber] = useState(0);
  const GetPostNumber = async () => {
    try {
      const result = await fetch("https://dummyjson.com/posts");
      if (!result.ok) throw new Error("Cannot fetch posts!");
      const { total } = await result.json();
      setPostNumber(total);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    GetPostNumber();
  }, []);
  return <h2>Liczba dostępnych postów:{postNumber}</h2>;
};
