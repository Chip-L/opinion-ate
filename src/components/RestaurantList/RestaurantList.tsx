import { useEffect } from 'react';
import { connect } from 'react-redux';
import { IRestaurant } from '../../types/Restaurant';
import { loadRestaurants } from '../../store/restaurants/actions';

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
      {restaurants?.map((restaurant) => (
        <li key={restaurant.id}>{restaurant.name}</li>
      ))}
    </ul>
  );
}

const mapStateToProps = (state: {
  restaurants: { records: IRestaurant[] };
}) => ({
  restaurants: state.restaurants.records,
});

const mapDispatchToProps = { loadRestaurants };

export default connect(mapStateToProps, mapDispatchToProps)(RestaurantList);
