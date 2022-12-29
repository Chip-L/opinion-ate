import { Dispatch } from 'react';
import { IRestaurant } from '../../types/Restaurant';

export const STORE_RESTAURANTS = 'STORE_RESTAURANTS';

export const loadRestaurants =
  () => async (dispatch: Dispatch<any>, getState: any, api: any) => {
    const records = await api.loadRestaurants();
    dispatch(storeRestaurants(records));
  };

const storeRestaurants = (records: IRestaurant[]) => ({
  type: STORE_RESTAURANTS,
  records,
});
