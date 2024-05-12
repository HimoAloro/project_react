import { PostCounter } from "../../Components/PostCounter/PostCounter"
import { UserCounter } from "../../Components/UserCounter/UserCounter"
import { Welcome } from "../../Components/Welcome/Welcome"

export const HomePage=()=>{
    return(
        <>
        <h1>HOMEPAGE</h1>
        <Welcome message="Dzień dobry!"></Welcome>
        <PostCounter></PostCounter>
        <UserCounter></UserCounter>
        </>
    )
}