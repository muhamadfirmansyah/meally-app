class CardItem extends HTMLElement {
  render(meal) {
    this.innerHTML = `
        <div class="rec-item">
            <div>
                <img src="${meal?.strMealThumb}" alt="">
                <h3>${meal?.strMeal}</h3>
            </div>
            <div>
                <button data-id="${meal?.idMeal}" class="see-recipe-button" onClick="${this.action}">See Recipe</button>
            </div>
        </div>
        `;
  }
}

customElements.define('card-item', CardItem);
