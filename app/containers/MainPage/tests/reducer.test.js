import { fromJS } from 'immutable';
import mainPageReducer, { blocks } from '../reducer';

describe('mainPageReducer', () => {
  it('returns the initial state', () => {
    expect(mainPageReducer(undefined, {})).toEqual(fromJS({ blocks }));
  });
});
