import * as React from "react";

export interface MessageStripProps {
    buttonProps?: any;
    children?: React.ReactNode;
    className?: string | undefined;
    disableStyles?: boolean | undefined;
    dismissible?: boolean | undefined;
    link?: string | undefined;
    linkProps?: any;
    linkText?: string | undefined;
    localizedText?: any;
    noGlyph?: boolean | undefined;
    type?: any;
    onCloseClicked?: ((...args: any[]) => any) | undefined;
}

declare const MessageStrip: React.FunctionComponent<MessageStripProps> & {
    displayName: "MessageStrip";
};

export default MessageStrip;
