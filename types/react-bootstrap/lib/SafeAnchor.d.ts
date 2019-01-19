import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace SafeAnchor {
    export interface SafeAnchorProps extends ReactDOM.HTMLProps<SafeAnchor> {
        href?: string;
        onClick?: ReactDOM.MouseEventHandler<{}>;
        disabled?: boolean;
        role?: string;
        componentClass?: React.ReactType;
    }
}
declare class SafeAnchor extends React.Component<SafeAnchor.SafeAnchorProps> { }
export = SafeAnchor;
