class NavigationComponent extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <div class="app-logo">
          <img src="https://s3-alpha-sig.figma.com/img/5a20/d1e0/4a98da07ba86ec518eaf0583542467dd?Expires=1674432000&Signature=gh4RejK5u9uYGEm1IBqzLMf4osDG3u6z9Sm1cR7C--0w2si9FzK8y4~cvPVKKQSGnA5~dj1mMUkmMeKfYzCkOyia0biUPADs-ujkqYUGgoIEqu9HAo5ueUoBzSIoXZGVk8JmDh4UYxDAIBfF3zvJmmEG8d5uwIZEMnTeJBzfq0w0lFYzlLY3CHx6pSxE3I2zbJM6VH3uzGIgkJeLU1cX00DRjDuxMC30UIXH823AOG6EL8SSQ-Bny32Iitw5dHOzfIXeuF6oPp~pf-tPaQ0bQ0mTfjz4O-xZHiO~-MGdNgk~uYEgbf44f7CR6ghw0hFZekBdcM4jSFGDojf430Xi1A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="">
      </div>

      <div>
          <button class="shuffle-button" id="shuffle-button" title="Shuffle the meal">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shuffle" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M0 3.5A.5.5 0 0 1 .5 3H1c2.202 0 3.827 1.24 4.874 2.418.49.552.865 1.102 1.126 1.532.26-.43.636-.98 1.126-1.532C9.173 4.24 10.798 3 13 3v1c-1.798 0-3.173 1.01-4.126 2.082A9.624 9.624 0 0 0 7.556 8a9.624 9.624 0 0 0 1.317 1.918C9.828 10.99 11.204 12 13 12v1c-2.202 0-3.827-1.24-4.874-2.418A10.595 10.595 0 0 1 7 9.05c-.26.43-.636.98-1.126 1.532C4.827 11.76 3.202 13 1 13H.5a.5.5 0 0 1 0-1H1c1.798 0 3.173-1.01 4.126-2.082A9.624 9.624 0 0 0 6.444 8a9.624 9.624 0 0 0-1.317-1.918C4.172 5.01 2.796 4 1 4H.5a.5.5 0 0 1-.5-.5z"/>
                  <path d="M13 5.466V1.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192zm0 9v-3.932a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384l-2.36 1.966a.25.25 0 0 1-.41-.192z"/>
                  </svg>
          </button>
      </div>
    `;
  }
}

customElements.define('navigation-component', NavigationComponent);
