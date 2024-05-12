import { useParams } from "react-router-dom"
import { PostItem } from "../../Components/PostButtons/PostButtons";
import { useEffect, useState } from "react";

export const Post=()=>{

    const {postId}=useParams();
    const[post,setPost]=useState<PostItem>({} as PostItem);
    const GetPost = async ()=>{
        try{
            const result = await fetch (`https://dummyjson.com/post/${postId}`);
            if(!result.ok) throw new Error ("Cannot fetch user");
            const postResult= await result.json();
            setPost(postResult);
        } catch (error){
            console.log(error);
        }
    };
    useEffect(()=>{
        GetPost();
    },[]);
    
    return(
        <>
        <h1>{post.title}</h1>
        <h2>{post.body}</h2>
        </>
    )
}