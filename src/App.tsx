import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './Pages/HomePage/HomePage';
import { Login } from './Pages/Login/Login';
import { NewPost } from './Pages/NewPost/NewPost';
import { NotFound } from './Pages/NotFound/NotFound';
import { Post } from './Pages/Post/Post';
import { PostList } from './Pages/PostList/PostList';
import { Nav } from './Components/Nav/Nav';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
         <Route path="/" element={<HomePage />} />
         <Route path="/Login" element={<Login />} />
         <Route path="/NewPost" element={<NewPost />} />
         <Route path="/*" element={<NotFound />} />
         <Route path="/Post/:postId" element={<Post />} />
         <Route path="/PostList" element={<PostList />} />
      </Routes>
    </div>
  );
}

export default App;
