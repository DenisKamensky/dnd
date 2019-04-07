import { fromJS } from 'immutable';
import mainPageReducer, { blocks } from '../reducer';
import * as actions from '../actions';

describe('mainPageReducer', () => {
  it('returns the initial state', () => {
    expect(mainPageReducer(undefined, {})).toEqual(fromJS({ blocks }));
  });

  it('handels save new position', () => {
    expect(
      mainPageReducer(undefined, actions.saveBlockPosition(blocks)),
    ).toMatchSnapshot();
  });
});
