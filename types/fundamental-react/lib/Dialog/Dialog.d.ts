import * as React from "react";

export type DialogProps = {
    actions: React.ReactNode[];
    title: string;
    backdropClassName?: string;
    bodyProps?: any;
    className?: string;
    contentProps?: any;
    disableStyles?: boolean;
    footerProps?: any;
    header?: string;
    headerProps?: any;
    headingLevel?: any;
    show?: boolean;
    size?: any;
    subheader?: string;
    titleProps?: any;
    onClose?: (...args: any[]) => any;
} & React.HTMLAttributes<HTMLSpanElement>;

declare class Dialog extends React.Component<DialogProps> {}

export default Dialog;
