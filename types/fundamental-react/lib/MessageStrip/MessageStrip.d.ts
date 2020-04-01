import * as React from "react";

export interface MessageStripProps {
    buttonProps?: any;
    className?: string;
    disableStyles?: boolean;
    dismissible?: boolean;
    link?: string;
    linkProps?: any;
    linkText?: string;
    localizedText?: any;
    noGlyph?: boolean;
    type?: any;
    onCloseClicked?: (...args: any[]) => any;
}

declare const MessageStrip: React.FunctionComponent<MessageStripProps> & {
    displayName: "MessageStrip";
};

export default MessageStrip;
