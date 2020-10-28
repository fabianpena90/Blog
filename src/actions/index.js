import _ from 'lodash';
import jsonplaceholder from '../apis/jsonplaceholder'; 
//this is the way to do a call when using redux thunk

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts());
  const userIds = _.uniq(_.map(getState().posts, 'userId'))
  userIds.forEach(id => {dispatch(fetchUser(id))})
}

export const fetchPosts = () => async dispatch => {
    const res = await jsonplaceholder.get('/posts')
    dispatch({type: 'FETCH_POSTS', payload: res.data})
};


export const fetchUser = id => async dispatch => {
  const res = await jsonplaceholder.get(`/users/${id}`);
  dispatch({type: 'FETCH_USER', payload: res.data})
};


// export const fetchUser = id => dispatch => {_fetchUser(id, dispatch)};
// const _fetchUser = _.memoize(async(id, dispatch) => {
//   const res = await jsonplaceholder.get(`/users/${id}`);
//   dispatch({type: 'FETCH_USER', payload: res.data})
// });