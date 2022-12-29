import { combineReducers } from 'redux';
import { IRestaurant } from '../../types/Restaurant';
import { STORE_RESTAURANTS } from './actions';

interface StoreRestaurants {
  type: 'STORE_RESTAURANTS';
  records: IRestaurant[];
}

type Action = StoreRestaurants; // | next action interface

function records(state: IRestaurant[] = [], action: Action) {
  switch (action.type) {
    case STORE_RESTAURANTS:
      return action.records;
    default:
      return state;
  }
}

export default combineReducers({ records });
