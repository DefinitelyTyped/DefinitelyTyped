import { props, withComponent, Renderer } from 'skatejs';

const myRenderer = (Base = HTMLElement) =>
  class extends Base implements Renderer<string> {
    renderer(root: Element | ShadowRoot, render: (props?: {}) => string) {
      root.innerHTML = render();
    }
  };

const Component = withComponent(myRenderer());

type Props = { name: string };
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
