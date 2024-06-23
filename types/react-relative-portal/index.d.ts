import * as React from "react";

declare class RelativePortal extends React.Component<RelativePortal.Props> {}

declare namespace RelativePortal {
    interface Props {
        children: React.ReactNode;
        className?: string | undefined;
        component: string;
        fullWidth?: boolean | undefined;
        left?: number | undefined;
        onOutClick?: (() => void) | undefined;
        right?: number | undefined;
        top?: number | undefined;
    }
}

export = RelativePortal;
