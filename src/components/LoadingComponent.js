class LoadingComponent extends HTMLElement {
  render(isLoading) {
    this.innerHTML = isLoading ? '<div id="loader">Wait a second ...</div>' : '';
  }
}

customElements.define('loading-component', LoadingComponent);
