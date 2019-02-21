import {
  AUTHOR_PAGE_LOADED,
  AUTHOR_PAGE_UNLOADED,

} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case AUTHOR_PAGE_LOADED:
      return {
        ...state,
        author: action.payload[0].author
      };
    case AUTHOR_PAGE_UNLOADED:
      return {};

      default: return state;

    }
};
