import * as React from 'react';
import { CSSModule } from '../index';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
    wrapTag?: string | React.ReactType;
    toggle?: React.MouseEventHandler<any>;
}

declare class ModalHeader<T = {[key: string]: any}> extends React.Component<ModalHeaderProps> {}
export default ModalHeader;
