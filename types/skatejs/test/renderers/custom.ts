import { withComponent, Renderer, define } from 'skatejs';

const withRenderer = () =>
  class extends HTMLElement implements Renderer<Element> {
    renderer(root: HTMLElement, html: () => Element): void {
      root.innerHTML = '';
      root.appendChild(html());
    }
  };

const Component = withComponent(withRenderer());

class MyComponent extends Component {
  render() {
    const el = document.createElement('div');
    el.innerHTML = 'Hello, <slot></slot>!';
    return el;
  }
}

define(MyComponent);
