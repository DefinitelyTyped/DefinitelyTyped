import * as React from 'react';
import { CSSModule } from '../index';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class ModalBody<T = {[key: string]: any}> extends React.Component<ModalBodyProps> {}
export default ModalBody;
