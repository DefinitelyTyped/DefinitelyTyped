// Type definitions for react-visibility-sensor 5.0
// Project: https://github.com/joshwnj/react-visibility-sensor#readme
// Definitions by: Rasmus Bergström <https://github.com/JRasmusBm>
//                 Gabriel Cangussu <https://github.com/gcangussu>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from "react";

export as namespace ReactVisibilitySensor;

interface Shape {
  top?: number;
  left?: number;
  bottom?: number;
  right?: number;
}

interface ChildFunctionArg {
  isVisible: boolean | null;
  visibilityRect: Shape;
}

type ChildFunction = (arg: ChildFunctionArg) => React.ReactNode;

interface Props {
  onChange?: (isVisible: boolean) => void;
  active?: boolean;
  partialVisibility?: boolean;
  offset?: Shape;
  minTopValue?: number;
  intervalCheck?: boolean;
  intervalDelay?: number;
  scrollCheck?: boolean;
  scrollDelay?: number;
  scrollThrottle?: number;
  resizeCheck?: boolean;
  resizeDelay?: number;
  resizeThrottle?: number;
  containment?: HTMLElement;
  delayedCall?: boolean;
  children?: React.ReactElement | ChildFunction;
}

declare const ReactVisibilitySensor: React.StatelessComponent<Props>;

export = ReactVisibilitySensor;
