export default (posts = [], action) => {
  switch (action.key) {
    case 'FETCH_ALL':
      return posts;
    case 'CREATE':
      return posts;
    default:
      return posts;
  }
}