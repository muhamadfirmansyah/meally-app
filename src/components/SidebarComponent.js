import './parts/CardList';

class SidebarComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="search-form">
          <input type="search" placeholder="Search recommendations by name ..." id="search-meal">
      </div>

      <card-list />
    `;
  }
}

customElements.define('sidebar-component', SidebarComponent);
