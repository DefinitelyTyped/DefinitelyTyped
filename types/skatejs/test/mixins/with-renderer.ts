import { withRenderer, Renderer } from 'skatejs';

const myRenderer = (Base = HTMLElement) =>
  class extends Base implements Renderer<string> {
    renderer(root: Element | ShadowRoot, render: (props?: {}) => string) {
      root.innerHTML = render();
    }
  };

class WithRenderer extends withRenderer(myRenderer()) {
  static observedAttributes = ['name'];
  attributeChangedCallback() {
    this.updated();
  }
  render() {
    return `Hello, ${this.getAttribute('name')}!`;
  }
}

customElements.define('with-renderer', WithRenderer);
