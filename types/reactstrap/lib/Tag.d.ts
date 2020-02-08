import * as React from 'react';
import { CSSModule } from '../index';

export interface TagProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    color?: string;
    pill?: boolean;
    tag?: string | React.ReactType;
    className?: string;
    cssModule?: CSSModule;
}

declare class Tag<T = {[key: string]: any}> extends React.Component<TagProps> {}
export default Tag;
