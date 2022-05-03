import * as types from './types';

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POSTS_SUCCESS: {
      console.log(action.type);
      return { ...state, posts: action.payload, loading: false };
    }
    case types.POSTS_LOADING: {
      console.log(action.type);
      return { ...state, loading: true };
    }
  }

  console.log('Não encontrei a action', action.type);
  return { ...state };
};
