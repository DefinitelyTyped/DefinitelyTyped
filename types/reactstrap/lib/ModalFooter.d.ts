import * as React from 'react';
import { CSSModule } from '../index';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class ModalFooter<T = {[key: string]: any}> extends React.Component<ModalFooterProps> {}
export default ModalFooter;
