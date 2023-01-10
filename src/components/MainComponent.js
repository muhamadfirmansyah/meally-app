class MainComponent extends HTMLElement {
  render(meal) {
    const ingredients = [];

    // eslint-disable-next-line no-plusplus
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const mea = meal[`strMeasure${i}`];

      if (ing) {
        ingredients.push(`${ing}, ${mea}`);
      }
    }

    this.innerHTML = `
        <div class="content">
          <header>
              <div class="badge">${meal?.strCategory}</div>
              <h1>${meal?.strMeal}</h1>
  
              <div class="frame-wrapper">
                <iframe src="https://www.youtube.com/embed/${meal?.strYoutube.match(/([a-z0-9_-]{11})/gim)[0] ?? ''}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen></iframe>
              </div>
          </header>
          <article>
              <h2>Ingredients</h2>
              <ul>
                ${ingredients.map((item) => `<li>${item}</li>`).join('')}
              </ul>
  
  
              <h2>Instructions</h2>
              <pre>${meal?.strInstructions}</pre>
  
              <h2>Source</h2>

              ${meal.strSource ? (`
                <ul>
                    <li><a target="_blank" href="${meal?.strSource}">${meal?.strSource}</a></li>
                </ul>
              `) : ('')}
          </article>
        </div>
      `;
  }
}

customElements.define('main-component', MainComponent);
