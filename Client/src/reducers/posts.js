import { FETCH_ALL, CREATE, DELETE, UPDATE, LIKE} from '../actions/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [ ...posts, action.payload];
    case LIKE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return post.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};