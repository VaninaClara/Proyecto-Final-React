/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import "./App.css";
import ListPost from "./ListPost/ListPost";
import PostForm from "./PostForm/PostForm";

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setPosts(data);
    };

    fetchPosts();
  }, []);

  const deletePost = (postId) => {
    setPosts(posts.filter((post) => post.id !== postId));
  };

  const addPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  console.log(posts);

  return (
    <>
      <div>
      <h1>Posts</h1>
      <PostForm onSubmit={addPost} />
      <ListPost posts={posts} onDelete={deletePost} />
      </div>
      
    </>
  )
}

export default App
