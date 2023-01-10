import './CardItem';

class CardList extends HTMLElement {
  render(meals) {
    this.innerHTML = '';
    meals.forEach((meal) => {
      const cardItem = document.createElement('card-item');
      cardItem.render(meal);
      this.appendChild(cardItem);
    });
  }
}

customElements.define('card-list', CardList);
