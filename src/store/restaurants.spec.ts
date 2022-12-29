import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { IRestaurant } from '../types/Restaurant';
import restaurantsReducer from './restaurants/reducers';
import { loadRestaurants } from './restaurants/actions';

describe('restaurants', () => {
  describe('loadRestaurants action', () => {
    it('stores the restaurants', async () => {
      const records: IRestaurant[] = [
        { id: 1, name: 'Sushi Place' },
        { id: 2, name: 'Pizza Place' },
      ];
      const api = { loadRestaurants: () => Promise.resolve(records) };
      const initialState = {
        records: [],
      };

      const store = createStore(
        restaurantsReducer,
        initialState,
        applyMiddleware(thunk.withExtraArgument(api))
      );

      await store.dispatch(loadRestaurants());

      expect(store.getState().records).toEqual(records);
    });
  });
});
