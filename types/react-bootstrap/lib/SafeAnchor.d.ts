import * as React from 'react';

declare namespace SafeAnchor {
    export interface SafeAnchorProps extends React.HTMLProps<SafeAnchor> {
        href?: string | undefined;
        onClick?: React.MouseEventHandler<{}> | undefined;
        disabled?: boolean | undefined;
        role?: string | undefined;
        componentClass?: React.ElementType | undefined;
    }
}
declare class SafeAnchor extends React.Component<SafeAnchor.SafeAnchorProps> { }
export = SafeAnchor;
