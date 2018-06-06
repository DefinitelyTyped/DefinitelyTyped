import * as React from 'react';
import { CSSModule } from '../index';

export type FadeProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  in?: boolean;
  baseClass?: string;
  baseClassIn?: string;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  transitionAppearTimeout?: number;
  transitionEnterTimeout?: number;
  transitionLeaveTimeout?: number;
  transitionAppear?: boolean;
  transitionEnter?: boolean;
  transitionLeave?: boolean;
  onLeave?: () => void;
  onEnter?: () => void;
} & T;

declare class Fade<T = {[key: string]: any}> extends React.Component<FadeProps<T>> {}
export default Fade;
