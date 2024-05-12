import { useEffect, useState } from "react"

export const UserCounter=()=>{

const [userNumber, setUserNumber]= useState(0);
const GetUserNumber = async ()=>{
    try{
        const result = await fetch ('https://dummyjson.com/users');
        if(!result.ok) throw new Error ("Cannot fetch user");
        const {total}= await result.json();
        setUserNumber(total);
    } catch (error){
        console.log(error);
    }
};
useEffect(()=>{
    GetUserNumber();
},[]);

    return(
        <h2>Liczba dostępnych użytkowników:{userNumber}</h2>
    )
}