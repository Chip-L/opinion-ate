import { render, screen } from '@testing-library/react';
import { RestaurantList } from '.';
import { IRestaurant } from '../../types/Restaurant';

describe('RestaurantList', () => {
  const restaurants: IRestaurant[] = [
    { id: 1, name: 'Sushi Place' },
    { id: 2, name: 'Pizza Place' },
  ];
  let loadRestaurants: jest.Mock;

  function renderComponent() {
    loadRestaurants = jest.fn().mockName('loadRestaurants');

    render(
      <RestaurantList
        loadRestaurants={loadRestaurants}
        restaurants={restaurants}
      />
    );
  }

  it('loads restaurants on first render', () => {
    renderComponent();

    expect(loadRestaurants).toHaveBeenCalled();
  });

  it('displays the restaurants', () => {
    renderComponent();

    expect(screen.getByText('Sushi Place')).toBeInTheDocument();
    expect(screen.getByText('Pizza Place')).toBeInTheDocument();
  });
});
