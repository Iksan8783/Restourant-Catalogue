import TheRestaurantsDbSource from '../../data/therestaurantdb-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Restaurant = {
  async render() {
    return `
        <div class="content">
          <h2 class="content__heading" tabindex="0">Latest Post</h2>
          <div id="restaurants" class="restaurants">

          </div>
        </div>
      `;
  },

  async afterRender() {
    document.querySelector('.hero').style.display = 'inline-block';
    document.querySelector('.hero__title').style.marginTop = '90px';

    const restaurants = await TheRestaurantsDbSource.Restaurants();
    const restaurantsContainer = document.querySelector('#restaurants');
    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Restaurant;
