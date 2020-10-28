import {combineReducers} from 'redux'
import postsReducer from './postsReducer'
import userReducer from './userReducer'

export default combineReducers({
  // replaceMe: () => 10  //this is a dummy text to trick redux 
  posts: postsReducer,
  user: userReducer
});