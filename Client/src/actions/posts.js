import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE} from './actionTypes';

import * as api from '../api/index.js';

// Action Creators
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();

    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message)
  }
};