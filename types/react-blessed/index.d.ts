// Type definitions for react-blessed 0.3.0
// Project: https://github.com/Yomguithereal/react-blessed
// Definitions by: Century Guo <http://github.com/guoshencheng>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

declare module 'react-blessed' {
  import * as React from 'react';
  import * as Blessd from 'blessed';
  import { Widgets, screen } from 'blessed';
  export type Callback = () => void | null | undefined;
  export type renderer = (
    c: JSX.Element, s: Widgets.Screen, callback?: Callback,
  ) => React.Component<any, any> | null;
  export function render(
    c: JSX.Element, s: Widgets.Screen, callback?: Callback
  ): React.Component<any, any> | null;
  export function createBlessedRenderer(b: typeof Blessd): renderer;
}

declare namespace JSX {
  interface IntrinsicElements {
    'blessed-progressbar': any,
    'blessed-box': any,
    'blessed-listtable': any,
    'blessed-button': any,
    'blessed-form': any
  }
}
