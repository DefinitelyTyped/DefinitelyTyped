import * as React from "react";

export type DialogProps = {
    actions: React.ReactNode[];
    title: string;
    /** Specific function to select list of node to lock the focus */
    allowListForLockFocus?: (activeElement: HTMLElement) => void;
    backdropClassName?: string | undefined;
    bodyProps?: any;
    className?: string | undefined;
    contentProps?: any;
    /** Additional props to disable auto closing dialog */
    disableAutoClose?: boolean;
    /** Additional props to be spread to the footer of the dialog */
    focusElementOnClose?: object;
    footerProps?: any;
    header?: string | React.ReactNode;
    headerProps?: any;
    headingLevel?: number;
    /** Heading style, if it should be different from the default style for the Dialog. */
    headingStyle?: number;
    /** Set to **true** to make the dialog visible */
    show?: boolean | undefined;
    size?: "s" | "m" | "l" | "xl";
    subheader?: string | undefined;
    titleProps?: any;
    onClose?: ((...args: any[]) => any) | undefined;
} & React.HTMLAttributes<HTMLSpanElement>;

declare class Dialog extends React.Component<DialogProps> {}

export default Dialog;
