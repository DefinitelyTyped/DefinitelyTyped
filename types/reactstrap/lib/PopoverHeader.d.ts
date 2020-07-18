import * as React from 'react';
import { CSSModule } from '../index';

export interface PopoverHeaderProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class PopoverHeader<T = {[key: string]: any}> extends React.Component<PopoverHeaderProps> {}
export default PopoverHeader;
