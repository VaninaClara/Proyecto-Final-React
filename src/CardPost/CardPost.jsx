/* eslint-disable react/prop-types */

import "./CardPost.css";

// eslint-disable-next-line react/prop-types
function CardPost({ post, onDelete }) {
  return (
    <div className="card-post">
      <h3>{post.title}</h3>
      <p>Usuario: {post.userId}</p>
      <p>Nombre de Usuario: {post.userName}</p>
      <p>{post.body}</p>
      <button className="delete-button" onClick={() => onDelete(post.id)}>Eliminar</button>
    </div>
  );
}

export default CardPost;
