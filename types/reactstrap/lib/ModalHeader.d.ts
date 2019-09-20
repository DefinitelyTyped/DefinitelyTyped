import * as React from 'react';
import { CSSModule } from '../index';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
}

declare class ModalHeader<T = {[key: string]: any}> extends React.Component<ModalHeaderProps> {}
export default ModalHeader;
