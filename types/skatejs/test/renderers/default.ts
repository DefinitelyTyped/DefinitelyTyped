import { props, withComponent } from 'skatejs';

// tslint:disable-next-line interface-over-type-literal
type Props = {
  name: string;
};
class WithDefault extends withComponent<Props>() {
  static props = {
    name: props.string
  };
  render({ name }: Props) {
    return `Hello, ${name}!`;
  }
}

customElements.define('with-default', WithDefault);
