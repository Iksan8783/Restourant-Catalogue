import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
    <div class="content">
      <h2 class="content__heading" tabindex="0">Your Favorite Restaurant</h2>
      <div id="restaurants" class="restaurants">
 
      </div>
    </div>
  `;
  },

  async afterRender() {
    const heros = document.querySelector('.hero');
    heros.style.display = 'none';

    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Like;
