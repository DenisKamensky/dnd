/*
 *
 * MainPage reducer
 *
 */

import { fromJS } from 'immutable';
import * as types from './constants';

const blocks = [
  {
    id: 1,
    bgc: '#F8BBD0',
    top: 0,
    left: 0,
  },
  {
    id: 2,
    bgc: '#E1BEE7',
    top: 0,
    left: 120,
  },
  {
    id: 3,
    bgc: '#42A5F5',
    top: 0,
    left: 240,
  },
];

export const initialState = fromJS({
  blocks,
});

function mainPageReducer(state = initialState, action) {
  switch (action.type) {
    case types.DEFAULT_ACTION:
      return state;
    case types.SAVE_NEW_POSITION:
      return state.merge({
        blocks: action.payload,
      });
    default:
      return state;
  }
}

export { blocks };
export default mainPageReducer;
