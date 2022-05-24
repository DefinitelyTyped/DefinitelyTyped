import * as React from 'react';

declare namespace Badge {
    export interface BadgeProps extends React.HTMLProps<Badge> {
        bsClass?: string | undefined;
        pullRight?: boolean | undefined;
    }
}
declare class Badge extends React.Component<Badge.BadgeProps> { }
export = Badge;
