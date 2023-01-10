import './components/NavigationComponent';
import './components/MainComponent';
import './components/SidebarComponent';
import './components/LoadingComponent';

import 'regenerator-runtime';
import Meals from './data/Meals';

export default function app() {
  // Component
  const mainComponent = document.querySelector('main-component');
  const cardlistComponent = document.querySelector('card-list');
  const seeRecipeButton = document.getElementsByClassName('see-recipe-button');
  const loader = document.querySelector('loading-component');

  // Functionality
  const shuffleButton = document.getElementById('shuffle-button');
  const searchMeal = document.getElementById('search-meal');

  let currentCategory = '';
  let searchKey = '';
  let mealLists = [];

  const renderMealContent = (id) => {
    loader.render(true);
    Meals.getMealById(id).then((meal) => {
      mainComponent.render(meal);
      loader.render(false);
    });
  };

  const initiateButtons = () => {
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < seeRecipeButton.length; i++) {
      const element = seeRecipeButton[i];
      element.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopImmediatePropagation();
        const id = e.currentTarget.getAttribute('data-id');
        renderMealContent(id);
      });
    }
  };

  const renderMealLists = () => {
    const filtered = mealLists.filter(
      (obj) => Object.values(obj).some(
        (val) => val.toLowerCase().toString().includes(searchKey.toLowerCase()),
      ),
    );
    cardlistComponent.render(filtered);
    initiateButtons();
    loader.render(false);
  };

  const getMealLists = () => {
    loader.render(true);
    Meals.getMeals(currentCategory).then((meals) => {
      mealLists = meals;

      renderMealLists();
      initiateButtons();
      loader.render(false);
    });
  };

  const renderRandomMealContent = () => {
    loader.render(true);
    Meals.getMeal().then((meal) => {
      mainComponent.render(meal);

      currentCategory = meal?.strCategory;
      getMealLists();
      loader.render(false);
    });
  };

  const initialApp = () => {
    renderRandomMealContent();
  };

  initialApp();

  // Functionality

  shuffleButton.addEventListener('click', () => {
    renderRandomMealContent();
  });

  searchMeal.addEventListener('input', (e) => {
    searchKey = e.target.value;
    renderMealLists();
  });
}
