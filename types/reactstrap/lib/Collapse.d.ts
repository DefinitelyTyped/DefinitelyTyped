import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type CollapseProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
  isOpen?: boolean;
  classNames?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  navbar?: boolean;
  delay?: {
    show: number
    hide: number
  };
  onOpened?: () => void;
  onClosed?: () => void;
  onEntering?: () => void;
  onEntered?: () => void;
  onExit?: () => void;
  onExiting?: () => void;
  onExited?: () => void;
} & T;

export type UncontrolledProps<T = {}> = ReactDOM.HTMLProps<HTMLElement> & {
  isOpen?: boolean;
  className?: string;
  cssModule?: CSSModule;
  tag?: React.ReactType;
  navbar?: boolean;
  toggle?: () => void;
} & T;

export type UncontrolledCollapseProps<T = {}> = UncontrolledProps<T>;

declare class Collapse<T = {[key: string]: any}> extends React.Component<CollapseProps<T>> {}
export default Collapse;
