// Type definitions for redux-debounced v0.2.0
// Project: https://github.com/ryanseddon/redux-debounced
// Definitions by: Sean Kelley <https://github.com/seansfkelley>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="../redux/redux.d.ts" />

declare module "redux-debounced" {
  import { Middleware } from 'redux';
  export default function createDebounce(): Middleware;
}
