import { Link } from "react-router-dom"

export const Nav = () => { 
    return <div>
        <Link to="/">HomePage</Link><br/>
        <Link to="/Login">Login</Link>
        <Link to="/NewPost">NewPost</Link>
        <Link to="/PostList">PostList</Link>
    </div>
}