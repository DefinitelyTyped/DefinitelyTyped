import { withContext, WithContext, withComponent, WithComponent } from 'skatejs';

// tslint:disable-next-line interface-over-type-literal
type Context = {
  background: string;
  color: string;
  margin: string;
  padding: string;
};

const Base = withContext() as typeof WithContext;
const Component = withComponent();

class WithContextRoot extends Base<Context> {
  context = {
    background: 'white',
    color: 'black',
    margin: '10px 0',
    padding: '10px'
  };
  connectedCallback() {
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <slot></slot>
      <with-context-descendant>
        ...and shadow DOM!
      </with-context-descendant>
    `;
  }
}

class WithContextDescendant extends Base<Context> {
  connectedCallback() {
    const { background, color, margin, padding } = this.context;
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          background: ${background};
          color: ${color};
          display: block;
          margin: ${margin};
          padding: ${padding};
        }
      </style>
      <slot></slot>
    `;
  }
}

customElements.define('with-context', WithContextRoot);
customElements.define('with-context-descendant', WithContextDescendant);

// showcase of full component With context

class WithContextRootFull extends Component<{}, {}, Context> {
  context = {
    background: 'white',
    color: 'black',
    margin: '10px 0',
    padding: '10px'
  };
  connectedCallback() {
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <slot></slot>
      <with-context-descendant>
        ...and shadow DOM!
      </with-context-descendant>
    `;
  }
}

class WithContextDescendantFull extends Component<{}, {}, Context> {
  connected() {
    const { background, color, margin, padding } = this.context;
    this.attachShadow({ mode: 'open' }).innerHTML = `
      <style>
        :host {
          background: ${background};
          color: ${color};
          display: block;
          margin: ${margin};
          padding: ${padding};
        }
      </style>
      <slot></slot>
    `;
  }
}
