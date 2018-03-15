import { props, withComponent, Renderer } from 'skatejs';

const myRenderer = (Base = HTMLElement) =>
  class extends Base implements Renderer<string> {
    renderer(root: Element | ShadowRoot, render: (props?: {}) => string) {
      root.innerHTML = render();
    }
  };

const Component = withComponent(myRenderer());

// tslint:disable-next-line interface-over-type-literal
type Props = { name: string };
// tslint:disable-next-line interface-over-type-literal
type State = { count: number };

class WithComponent extends withComponent(myRenderer())<Props, State> {
  static props = {
    name: props.string
  };
  state = {
    count: 0
  };
  render({ name }: Props) {
    return `Hello, ${this.props.name}!`;
  }
}

class WithComponentBase extends Component<Props, State> {
  static props = {
    name: props.string
  };
  state = {
    count: 0
  };
  render({ name }: Props) {
    return `Hello, ${this.props.name}!`;
  }
}

customElements.define('with-component', WithComponent);
