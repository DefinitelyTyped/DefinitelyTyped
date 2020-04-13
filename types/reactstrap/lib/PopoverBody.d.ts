import * as React from 'react';
import { CSSModule } from '../index';

export interface PopoverBodyProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class PopoverBody<T = {[key: string]: any}> extends React.Component<PopoverBodyProps> {}
export default PopoverBody;
