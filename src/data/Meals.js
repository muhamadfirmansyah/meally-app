export default class Meals {
  static baseURI = 'https://www.themealdb.com/api/json/v1/1/';

  static getMeal() {
    return fetch(`${this.baseURI}random.php`).then((res) => res.json()).then((result) => {
      if (result.meals[0]) {
        return Promise.resolve(result.meals[0]);
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Data not found!');
    });
  }

  static getMealById(id) {
    return fetch(`${this.baseURI}lookup.php?i=${id}`).then((res) => res.json()).then((result) => {
      if (result.meals[0]) {
        return Promise.resolve(result.meals[0]);
      }
      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Data not found!');
    });
  }

  static getMeals(category) {
    return fetch(`${this.baseURI}filter.php?c=${category}`).then((res) => res.json()).then((result) => {
      if (result.meals) {
        return Promise.resolve(result.meals);
      }

      // eslint-disable-next-line prefer-promise-reject-errors
      return Promise.reject('Data not found!');
    });
  }
}
