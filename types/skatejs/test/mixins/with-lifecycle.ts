import { withLifecycle, WithLifecycle } from 'skatejs';

class Base extends HTMLElement {
  protected _isConnected = false;
  connectedCallback() {
    this._isConnected = true;
  }
}

class WithLifecycleComponent extends withLifecycle(Base) {
  connecting() {
    this.innerHTML += this._isConnected ? 'ray!' : 'Hoo';
  }
  connected() {
    this.innerHTML += this._isConnected ? 'ray!' : 'Hoo';
  }
}

customElements.define('with-lifecycle', WithLifecycleComponent);
