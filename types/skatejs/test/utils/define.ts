import { define } from 'skatejs';

export const MyComponent = define(
  class extends HTMLElement {
    static is = 'my-element';
  }
);

@define
export default class extends HTMLElement {
  static is = 'my-element';
}
