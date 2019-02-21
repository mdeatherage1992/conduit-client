import article from './reducers/article';
import author from './reducers/author';
import articleList from './reducers/articleList';
import authorList from './reducers/authorList';
import auth from './reducers/auth';
import { combineReducers } from 'redux';
import common from './reducers/common';
import editor from './reducers/editor';
import home from './reducers/home';
import profile from './reducers/profile';
import settings from './reducers/settings';
import { routerReducer } from 'react-router-redux';

export default combineReducers({
  author,
  authorList,
  article,
  articleList,
  auth,
  common,
  editor,
  home,
  profile,
  settings,
  router: routerReducer
});
