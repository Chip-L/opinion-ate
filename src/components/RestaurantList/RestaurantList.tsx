import { useEffect } from 'react';
import { IRestaurant } from '../../types/Restaurant';

interface RestaurantListProps {
  loadRestaurants: () => void;
  restaurants: IRestaurant[];
}

export function RestaurantList({
  loadRestaurants,
  restaurants,
}: RestaurantListProps) {
  useEffect(() => {
    loadRestaurants();
  }, [loadRestaurants]);

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}
