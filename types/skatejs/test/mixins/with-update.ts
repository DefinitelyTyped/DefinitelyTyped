import { props, withUpdate } from 'skatejs';

// tslint:disable-next-line interface-over-type-literal
type Props = { name: string };
// tslint:disable-next-line interface-over-type-literal
type State = undefined;

class WithProps extends withUpdate<Props, State>() {
  // This is where you declare your props.
  static props = {
    // This will define a handler for the name attribute that will set the name
    // prop. When the name prop is set, it will trigger an update allowing you
    // to react to the changes in shouldUpdate.
    name: props.string
  };

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  // Called when props have been set regardless of if they've changed.
  updating(props: Props) {}

  // Called to check whether or not the component should call
  // updated(), much like React's shouldComponentUpdate().
  shouldUpdate(props: Props, state: State) {
    return true;
  }

  // Called if shouldUpdate returned true.
  updated() {
    this.shadowRoot!.innerHTML = `Hey, ${this.props.name}!`;
  }
}

customElements.define('with-update', WithProps);
