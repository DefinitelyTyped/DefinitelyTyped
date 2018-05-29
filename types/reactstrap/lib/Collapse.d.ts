import * as React from 'react';
import { CSSModule } from '../index';

export interface CollapseProps extends React.HTMLProps<HTMLElement> {
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
}

declare class Collapse extends React.Component<CollapseProps> {}
export default Collapse;
