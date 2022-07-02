import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import FavoriteRestaurantSearchView from './liked-restaurants/favorite-movie-search-view';
import FavoriteRestaurantShowPresenter from './liked-restaurants/favorite-movie-show-presenter';
import FavoriteRestaurantSearchPresenter from './liked-restaurants/favorite-movie-search-presenter';

const view = new FavoriteRestaurantSearchView();

const Favorite = {
  async render() {
    return view.getTemplate();
  },

  async afterRender() {
    new FavoriteRestaurantShowPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
    new FavoriteRestaurantSearchPresenter({ view, favoriteRestaurants: FavoriteRestaurantIdb });
  },
};

export default Favorite;
