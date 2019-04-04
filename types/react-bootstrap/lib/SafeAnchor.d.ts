import * as React from 'react';

declare namespace SafeAnchor {
    export interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
        href?: string;
        onClick?: React.MouseEventHandler<{}>;
        disabled?: boolean;
        role?: string;
        componentClass?: React.ElementType;
    }
}
declare class SafeAnchor extends React.Component<SafeAnchor.SafeAnchorProps> { }
export = SafeAnchor;
