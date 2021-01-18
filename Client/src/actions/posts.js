import { FETCH_ALL, CREATE, DELETE, UPDATE } from './actionTypes';

import * as api from '../api/index.js';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error)
  }
};

export const createPost = (post) => async (dispatch) => {
  console.log("create", post);
  try {
    console.log("api", await api.createPost(post));
    const { data } = await api.createPost(post);
    console.log("data", data);
    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    console.log("api", await api.updatePost(id, post))
    const { data } = await api.updatePost(id, post);
    console.log("data", data);
    dispatch({ type: UPDATE, payload: data});
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    
    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await await api.deletePost(id);

    dispatch({ type: DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};