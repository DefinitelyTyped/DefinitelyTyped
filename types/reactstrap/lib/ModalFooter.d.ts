import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { CSSModule } from '../index';

export type ModalFooterProps<T = {}> = ReactDOM.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ModalFooter<T = {[key: string]: any}> extends React.Component<ModalFooterProps<T>> {}
export default ModalFooter;
