import * as actions from '../actions';
import * as types from '../constants';

describe('MainPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: types.DEFAULT_ACTION,
      };
      expect(actions.defaultAction()).toEqual(expected);
    });
  });

  describe(`has a type of ${types.CALCULATE_BLOCK_NEW_POSITION}`, () => {
    const expected = {
      type: types.CALCULATE_BLOCK_NEW_POSITION,
      payload: ['arg1', 'arg2'],
    };
    expect(actions.calculateBlockPosition(...expected.payload)).toEqual(
      expected,
    );
  });

  describe(`has a type of ${types.SAVE_NEW_POSITION}`, () => {
    const expected = {
      type: types.SAVE_NEW_POSITION,
      payload: ['arg1', 'arg2'],
    };
    expect(actions.saveBlockPosition(expected.payload)).toEqual(expected);
  });
});
