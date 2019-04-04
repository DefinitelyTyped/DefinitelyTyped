import * as React from 'react';
import { CSSModule } from '../index';

export type ModalFooterProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ModalFooter<T = {[key: string]: any}> extends React.Component<ModalFooterProps<T>> {}
export default ModalFooter;
