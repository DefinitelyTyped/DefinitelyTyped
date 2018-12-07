import * as React from 'react';
import { CSSModule } from '../index';

export type ModalBodyProps<T = {}> = React.HTMLAttributes<HTMLElement> & {
  tag?: React.ReactType;
  className?: string;
  cssModule?: CSSModule;
} & T;

declare class ModalBody<T = {[key: string]: any}> extends React.Component<ModalBodyProps<T>> {}
export default ModalBody;
