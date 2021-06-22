// Type definitions for react-relative-portal 1.8
// Project: https://github.com/smartprogress/react-relative-portal#readme
// Definitions by: Andy Katz <https://github.com/katz12>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

declare class RelativePortal extends React.Component<RelativePortal.Props> {}

declare namespace RelativePortal {
    interface Props {
        children: React.ReactNode;
        className?: string;
        component: string;
        fullWidth?: boolean;
        left?: number;
        onOutClick?: () => void;
        right?: number;
        top?: number;
    }
}

export = RelativePortal;
