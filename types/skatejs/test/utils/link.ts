import { link, withComponent } from 'skatejs';

// artificial definitions for 3rd party imports
// import { html } from 'lit-html/lib/lit-extended';
declare const html: (...args: any[]) => string;
// import withLitHtml from '@skatejs/renderer-lit-html';
declare const withLitHtml: () => any;

type Props = {
  state: State;
};
type State = {
  email: string;
};
export default class extends withComponent<Props>(withLitHtml()) {
  // this may look strange, but state is under the hood property of props :)
  render({ state }: Props) {
    return html`
      <input
        name="email"
        on-change="${link(this)}"
        type="email"
        value="${state.email}"
      >
    `;
  }
  private otherLinkUsage() {
    link(this, 'state.customName');
    link(this, 'someProp');
    link(this, 'props.someProp');
  }
}
