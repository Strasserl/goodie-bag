import axios from 'axios';

//action types
const GETTING_CANDIES = 'GETTING_CANDIES';
const GOT_CANDIES = 'GOT_CANDIES';

//action creators
const gettingCandies = () => ({
  type: GETTING_CANDIES,
});

const gotCandies = data => ({
  type: GOT_CANDIES,
  candies: data,
});

//thunk
export const fetchCandies = () => {
  return async dispatch => {
    dispatch(gettingCandies());
    const candies = await axios.get('/api/candies');
    dispatch(gotCandies(candies));
  };
};

const initialState = {
  loading: false,
  candies: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GETTING_CANDIES:
      return { ...state, loading: true };
    case GOT_CANDIES:
      return { ...state, loading: false, candies: action.candies.data };
    default:
      return state;
  }
};

export default rootReducer;
