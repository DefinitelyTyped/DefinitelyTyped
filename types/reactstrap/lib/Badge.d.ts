import * as React from 'react';
import { CSSModule } from '../index';

export interface BadgeProps extends React.HTMLAttributes<HTMLElement> {
    [key: string]: any;
    color?: string;
    pill?: boolean;
    tag?: React.ElementType;
    cssModule?: CSSModule;
}

declare class Badge<T = {[key: string]: any}> extends React.Component<BadgeProps> {}
export default Badge;
