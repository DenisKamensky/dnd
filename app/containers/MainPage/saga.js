import { fork, takeEvery, put } from 'redux-saga/effects';
import * as types from './constants';
import * as actions from './actions';

const { log } = console;

function* calculateBlockPosition(action) {
  const [elProps, newPos, blocks] = action.payload;
  const newTop = elProps.top + newPos.y;
  const newLeft = elProps.top + newPos.x;
  const changedBlock = Object.assign({}, elProps, {
    top: newTop,
    left: newLeft,
  });
  log(
    `block has changed: {id:${changedBlock.id}, top:${changedBlock.top}, left:${
      changedBlock.left
    }}`,
  );
  const changeIdx = blocks.findIndex(el => el.id === changedBlock.id);
  blocks[changeIdx] = changedBlock;
  yield put(actions.saveBlockPosition(blocks));
}
// Individual exports for testing
export default function* mainPageSaga() {
  yield [
    fork(takeEvery, types.CALCULATE_BLOCK_NEW_POSITION, calculateBlockPosition),
  ];
}
