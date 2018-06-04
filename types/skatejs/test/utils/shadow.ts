import { shadow } from 'skatejs';

class CustomElement extends HTMLElement {
  connectedCallback() {
    shadow(this).innerHTML = 'Hello, World!';
  }
}
