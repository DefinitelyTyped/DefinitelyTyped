// Type definitions for react-bootstrap 0.31
// Project: https://github.com/react-bootstrap/react-bootstrap
// Definitions by: Walker Burgin <https://github.com/walkerburgin>,
//                 Vincent Siao <https://github.com/vsiao>,
//                 Danilo Barros <https://github.com/danilojrr>,
//                 Batbold Gansukh <https://github.com/Batbold-Gansukh>,
//                 Raymond May Jr. <https://github.com/octatone>,
//                 Cheng Sieu Ly <https://github.com/chengsieuly>,
//                 Kat Busch <https://github.com/katbusch>,
//                 Vito Samson <https://github.com/vitosamson>
//                 Karol Janyst <https://github.com/LKay>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';

export type Diff<T extends string, U extends string> = ({ [P in T]: P } & { [P in U]: never } & { [x: string]: never })[T];
export type Omit<T, K extends keyof T> = Pick<T, Diff<keyof T, K>>;

export type Sizes = 'xs' | 'xsmall' | 'sm' | 'small' | 'medium' | 'lg' | 'large';

export interface SelectCallback extends React.EventHandler<any> {
  (eventKey: any, e: React.SyntheticEvent<{}>): void;
  /**
   * @deprecated
   * This signature is a hack so can still derive from HTMLProps.
   * It does not reflect the underlying event and should not be used.
   */
  (e: React.MouseEvent<{}>): void;
}

export interface TransitionCallbacks {
  onEnter?(node: HTMLElement): any;
  onEntered?(node: HTMLElement): any;
  onEntering?(node: HTMLElement): any;
  onExit?(node: HTMLElement): any;
  onExited?(node: HTMLElement): any;
  onExiting?(node: HTMLElement): any;
}

export * from './lib';
