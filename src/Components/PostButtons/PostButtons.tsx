import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { PostContext } from "../../Context/PostContext";

export type PostItem = {
  id: number;
  title: string;
  body: string;
  userId: number;
  likes: number;
};

type PostButtonsProps={
    id:number;
    title:string;
    likes:number;
    userId:number;
};

export const PostButtons = (props:PostButtonsProps) => {
    const { ThumbsUp } = useContext(PostContext);
    //const[likes,setLikes]=useState(0);
    const[favourite,setFavourite]=useState(false);

    // const ThumbsUp=()=>{
    //     setLikes((prev) => prev + 1);
    // }

    const ThumbsDown=()=>{
        //setLikes((prev)=> prev - 1);
    }

    const switchFavourite=()=>{
        setFavourite((prev)=>!prev)
    }
    
  return (
    <>
      <h1>{props.title}</h1>
      <h3>Ilość polubień:{props.likes}</h3>
      {favourite && <h5>W ulubionych</h5>}
      <button onClick={() => ThumbsUp(props.id)}>Łapka w góre</button>
      <button onClick={ThumbsDown}>Łapka w dół</button>
      <button onClick={switchFavourite}>Dodaj do ulubionych</button>
      <Link to={`/post/${props.id}`}>Przejdź do postu</Link>
    </>
  );
};
