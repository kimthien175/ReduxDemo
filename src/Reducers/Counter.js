import * as ActionType from '../Actions/Type';

const initialState = {count: 0};

const Counter = (state=initialState, action) => {
  switch (action.type) {
    case ActionType.INCREASE:
      return {count: state.count + 1};

    case ActionType.DECREASE:
      return {count: state.count - 1};

    default:
        return state;
  }
};

export default Counter;
