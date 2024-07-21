import React from 'react';
import RestaurantCard from '../Restaurent/RestaurantCard';
import { useSelector } from 'react-redux';

const Favorites = () => {
  const { auth } = useSelector(store => store);
 

  // Check if auth.favorites is undefined or null
  if (!auth.favorites) {
    return (
      <div className="text-center py-5">
        Loading favorites...
      </div>
    );
  }

  return (
    <div>
      <h1 className='py-5 text-xl font-semibold text-center'>
        My Favorites
      </h1>

      <div className='flex gap-3 flex-wrap justify-center'>
        {auth.favorites.map(item => (
          <RestaurantCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
