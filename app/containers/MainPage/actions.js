/*
 *
 * MainPage actions
 *
 */

import * as types from './constants';

export function defaultAction() {
  return {
    type: types.DEFAULT_ACTION,
  };
}

export function calculateBlockPosition(...args) {
  return {
    type: types.CALCULATE_BLOCK_NEW_POSITION,
    payload: args,
  };
}

export function saveBlockPosition(payload) {
  return {
    type: types.SAVE_NEW_POSITION,
    payload,
  };
}
