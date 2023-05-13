/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { useForm } from 'react-hook-form';
import './PostForm.css';

function PostForm({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const handleFormSubmit = (data) => {
    const newData = { ...data, userId: parseInt(data.userId, 10) };
    onSubmit(newData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)}>
      <div>
        <label htmlFor="userId">ID de usuario:</label>
        <input
          id="userId"
          name="userId"
          type="text"
          {...register('userId', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="userName">Nombre de usuario:</label>
        <input
          id="userName"
          name="userName"
          type="text"
          {...register('userName', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="title">Título:</label>
        <input
          id="title"
          name="title"
          type="text"
          {...register('title', { required: true })}
        />
      </div>
      <div>
        <label htmlFor="body">Contenido:</label>
        <textarea id="body" name="body" {...register('body', { required: true })} />
      </div>
      <button type="submit">Crear post</button>
    </form>
  );
}

export default PostForm;
