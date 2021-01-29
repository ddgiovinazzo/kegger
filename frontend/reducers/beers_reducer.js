import { RECEIVE_ALL_BEERS ,RECEIVE_BEER } from '../actions/beer_actions';

const beersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_ALL_BEERS:
      return action.beers;
      
    case RECEIVE_BEER:
      return Object.assign({}, state, { [action.beer.id]: action.beer });

    default:
      return state;
  }
};

export default beersReducer;