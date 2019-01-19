import * as React from 'react';
import * as ReactDOM from 'react-dom';

declare namespace Badge {
    export interface BadgeProps extends ReactDOM.HTMLProps<Badge> {
        bsClass?: string;
        pullRight?: boolean;
    }
}
declare class Badge extends React.Component<Badge.BadgeProps> { }
export = Badge;
