/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import './ListPost.css';
import CardPost from '../CardPost/CardPost';


const ListPost = ({ posts, onDelete }) => {
  return (
    <div className="list-post">
       {posts.map((post) => (
        <CardPost key={post.id} post={post} onDelete={onDelete} />
      ))}
    </div>
  )
}

export default ListPost
