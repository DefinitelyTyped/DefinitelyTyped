import {
  define,
  Renderer,
  WithRenderer,
  WithUpdate,
  withComponent,
  withRenderer,
  withChildren,
  withUpdate,
  WithComponent,
  Constructor,
  CustomElement
} from 'skatejs';

// custom class definition needed to get Generics support for custom mixin composition
interface CustomComponentBase<P = {}, S = {}> extends WithUpdate<P, S>, WithRenderer {}
declare class CustomComponentBase<P = {}, S = {}> extends HTMLElement {}

// Explicitly defined renderer mixin interface type
export interface CustomRenderer extends HTMLElement, Renderer<string> {
  renderer(shadowRoot: HTMLElement, render: () => string): void;
}

export const withCustomRendererAsString = (
  Base = HTMLElement
) => {
  class CustomRendererAsString extends Base implements Renderer<string> {
    renderer(shadowRoot: HTMLElement, render: () => string): void {
      // erease content && re-render
      shadowRoot.innerHTML = render();
    }
  }
  return CustomRendererAsString;
};

const customWithComponent = (Base = HTMLElement): typeof WithComponent =>
  withChildren(withUpdate(withRenderer(Base))) as any;

const MComponent = customWithComponent(withCustomRendererAsString());
const MComponent2 = withChildren(withUpdate(withRenderer(withCustomRendererAsString())));
const MComponent3 = withRenderer(withUpdate(withCustomRendererAsString())) as typeof CustomComponentBase;

export const Component = withComponent(withCustomRendererAsString());
// @TODO this doesn't work :( I though this will extend base def and will restrict renderCallback return type
// interface Component<P> {
//   renderCallback(props?: P): string;
// }

// tslint:disable-next-line interface-over-type-literal
export type Props = { greet: string };
// tslint:disable-next-line interface-over-type-literal
export type State = { count: number };

class Mo extends MComponent<Props, State> {
  foo() {
    this.props.greet;
    this.state.count;
  }
}

class Mo2 extends MComponent2 {
  props: Props = { greet: "hi" };
  foo() {
    this.props.greet;
  }
}

class Mo3 extends MComponent3<Props, State> {
  foo() {
    this.props.greet;
    this.state.count;

    // Following will error out, thanks TS ! immutable all the things
    // this.props = {greet:'Martin'}
    // this.props.greet = Martin'

    // update state
    this.state = { count: this.state.count + 1 };

    // Following will error out, thanks TS ! nope prop is not defined on state ;)
    // this.state = {count: this.state.count+1, nope: false}
  }
}

export class Shadowless<P = {}, S = {}> extends Component<P, S> {
  get renderRoot() {
    return this;
  }
}
export class MyComponent extends Component {
  static readonly is = 'my-cmp';
  get renderRoot() {
    return this;
  }
  render() {
    return `
      <div>
        <h1>Hello World</h1>
      </div>
    `;
  }
}
define(MyComponent);

export class NoShadowCmp extends Shadowless<Props, State> {
  static readonly is = 'my-noshadow-cmp';
  render() {
    return `
      <div>
        <h1>Hello World ${this.props.greet}</h1>
        <div>how much is the fish? ${this.state.count}</div>
      </div>
    `;
  }
}
define(NoShadowCmp);
