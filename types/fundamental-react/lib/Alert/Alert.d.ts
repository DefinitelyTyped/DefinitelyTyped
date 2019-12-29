import * as React from "react";

export type AlertType = "warning" | "error" | "success" | "information";

export type AlertProps = {
    buttonProps?: { [x: string]: any };
    className?: string;
    customStyles?: { [x: string]: any };
    disableStyles?: boolean;
    /* Set to **true** to show a dismiss button. */
    dismissible?: boolean;
    /* Value to be applied to the anchor's `href` attribute. */
    link?: string;
    /* Additional props to be spread to the link's `<a>` element. */
    linkProps?: { [x: string]: any };
    /* Localized display text of the link. */
    linkText?: string;
    localizedText?: {
        /* Value for aria-label on the close <button> element. */
        close: string;
    };
    type?: AlertType;
    /* Callback function passing event when close button is clicked. */
    onCloseClicked?: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
} & React.HTMLAttributes<HTMLDivElement>;

declare class Alert extends React.Component<AlertProps> {
    static displayName: "Alert";
}

export default Alert;
