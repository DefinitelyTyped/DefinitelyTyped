import * as React from 'react';
import { CSSModule } from '../index';

export type ModalHeaderProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
  wrapTag?: React.ReactType;
  toggle?: () => void;
} & T;

declare class ModalHeader<T = {[key: string]: any}> extends React.Component<ModalHeaderProps<T>> {}
export default ModalHeader;
