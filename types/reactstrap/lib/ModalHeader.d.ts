import * as React from 'react';
import { CSSModule } from '../index';

export type ModalHeaderProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ElementType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ElementType;
  toggle?: () => void;
} & T;

declare class ModalHeader<T = {[key: string]: any}> extends React.Component<ModalHeaderProps<T>> {}
export default ModalHeader;
