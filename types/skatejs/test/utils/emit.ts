import { emit } from 'skatejs';

class Test extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }
  connectedCallback() {
    emit(this, 'myevent', {
      detail: {}
    });

    emit(this.shadowRoot!, 'myeventfromshadow', {
      // Does not propagate through shadow boundaries by default, need to explicitly override to true
      composed: true
    });
  }
}
