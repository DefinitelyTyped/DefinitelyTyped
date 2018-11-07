// Type definitions for react-blessed 0.3
// Project: https://github.com/yomguithereal/react-blessed#readme
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

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
  
  // relation to blessed export widgets, prepare for next version of react-blessed
  declare namespace JSX {
    interface IntrinsicElements {
      'blessed-box': any,
      'blessed-text': any,
      'blessed-line': any,
      'blessed-scrollablebox': any,
      'blessed-scrollabletext': any,
      'blessed-bigtext': any,
      'blessed-list': any,
      'blessed-filemanager': any,
      'blessed-listtable': any,
      'blessed-listbar': any,
      'blessed-form': any,
      'blessed-input': any,
      'blessed-textarea': any,
      'blessed-textbox': any,
      'blessed-button': any,
      'blessed-checkbox': any,
      'blessed-radioset': any,
      'blessed-radiobutton': any,
      'blessed-table': any,
      'blessed-prompt': any,
      'blessed-question': any,
      'blessed-message': any,
      'blessed-loading': any,
      'blessed-log': any,
      'blessed-progressbar': any,
      'blessed-program': any,
      'blessed-terminal': any,
      'blessed-layout': any,
      'blessed-escape': any,
    }
  }
