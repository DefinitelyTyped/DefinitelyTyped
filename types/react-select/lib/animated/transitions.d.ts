import { default as React, Component, ComponentType, Ref as ElementRef } from 'react';
import { Transition } from 'react-transition-group';

export type fn = () => void;
export type BaseTransition = {
  /** Whether we are in a transition. */
  in: boolean,
  /** Function to be called once transition finishes. */
  onExited: fn
};

// ==============================
// Fade Transition
// ==============================

type FadeProps = BaseTransition & {
  component: ComponentType<any>,
  duration: number,
};
export const Fade: ComponentType<FadeProps>;

// ==============================
// Collapse Transition
// ==============================

export const collapseDuration: number;

type TransitionState = 'exiting' | 'exited';
type Width = number | 'auto';
type CollapseProps = { children: any, in: boolean };
type CollapseState = { width: Width };

// wrap each MultiValue with a collapse transition; decreases width until
// finally removing from DOM
export class Collapse extends Component<CollapseProps, CollapseState> {
  duration: number;
  transition: {
    exiting: any,
    exited: any,
  };

  // width must be calculated; cannot transition from `undefined` to `number`
  getWidth: (ref: ElementRef<any>) => void;

  // get base styles
  getStyle: (width: Width) => any;

  // get transition styles
  getTransition: (state: TransitionState) => any;
}
