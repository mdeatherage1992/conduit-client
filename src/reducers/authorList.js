import {
  SET_PAGE,
  HOME_PAGE_LOADED,
  HOME_PAGE_UNLOADED,
  AUTHOR_TAB

} from '../constants/actionTypes';

export default (state = {}, action) => {
  switch (action.type) {
    case SET_PAGE:
      return {
        ...state,
        authors: action.payload.authors,
        authorsCount: action.payload.authorsCount,
        currentPage: action.page
      };
    case HOME_PAGE_LOADED:
      return {
        ...state,
        pager: action.pager,
        tags: action.payload[0].tags,
        authors: action.payload[1].authors,
        authorsCount: action.payload[1].authorsCount,
        currentPage: 0,
        tab: action.tab
      };
    case HOME_PAGE_UNLOADED:
      return {};
    case AUTHOR_TAB:
      return {
        ...state,
        pager: action.pager,
        authors: action.payload,
        authorsCount: action.payload,
        tab: action.tab,
        currentPage: 0,
        tag: null
      };
    default:
      return state;
  }
};
