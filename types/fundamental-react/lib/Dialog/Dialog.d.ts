import * as React from "react";

export type DialogProps = {
    actions: React.ReactNode[];
    title: string;
    backdropClassName?: string | undefined;
    bodyProps?: any;
    className?: string | undefined;
    contentProps?: any;
    disableStyles?: boolean | undefined;
    footerProps?: any;
    header?: string | undefined;
    headerProps?: any;
    headingLevel?: any;
    show?: boolean | undefined;
    size?: any;
    subheader?: string | undefined;
    titleProps?: any;
    onClose?: ((...args: any[]) => any) | undefined;
} & React.HTMLAttributes<HTMLSpanElement>;

declare class Dialog extends React.Component<DialogProps> {}

export default Dialog;
