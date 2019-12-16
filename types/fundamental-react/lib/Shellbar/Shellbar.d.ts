import * as React from "react";
import { IconSize } from "../Icon/Icon";

export type ShellbarProps = {
    /* Holds all product actions and links. */
    actions?: Array<{
        menu?: React.ReactNode;
        label?: string;
        glyph: string;
        notificationCount: number;
        callback?: (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    }>;
    className?: string;
    /* For use with applications that utilize CoPilot. */
    copilot?: boolean;
    customStyles?: {[x: string]: any};
    disableStyles?: boolean;
    localizedText?: {
        /* Aria-label for <span> element within the <button> element. */
        counterLabel: string;
        /* Aria-label for <button> element. */
        notificationsButton: string;
    };
    /* Provide an img tag for a logo other than the SAP logo. One of the two props (`logo` or `logoSAP`) should be set. */
    logo?: React.ReactNode;
    /* Renders the SAP logo in the Shellbar. One of the two props (`logo` or `logoSAP`) should be set. */
    logoSAP?: boolean;
    /* Information about pending notifications. */
    notifications?: {
        notificationsBody?: React.ReactNode;
        noNotificationsBody?: React.ReactNode;
        notificationCount: number;
        label?: string;
        callback?: (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    };
    /* Holds product titles and navigation. */
    productMenu?: Array<{
        link?: string;
        callback?: (...args: any[]) => void;
        url?: string;
        glyph?: string;
        size?: IconSize;
        name?: React.ReactNode;
    }>;
    /* For navigating between products. */
    productSwitcher?: object;
    /* List of the products. */
    productSwitcherList?: Array<{
        title: string;
        link?: string;
        url?: string;
        glyph: string;
        image: string;
        callback?: (
            event: React.MouseEvent<HTMLButtonElement, MouseEvent>
        ) => void;
    }>;
    /* Displays the current application when no product menu is used. */
    productTitle?: string;
    /* User information (_e.g._ name, initials, etc.) */
    profile?: { [x: string]: any };
    /* List of items for the profile menu. */
    profileMenu?: Array<{ [x: string]: any }>;
    /* Holds `searchInput` properties. */
    searchInput?: { [x: string]: any };
    /* Displays an application context. Should be used rarely. */
    subtitle?: string;
} & { [x: string]: any };

declare class Shellbar extends React.Component<ShellbarProps> {
    static displayName: "Shellbar";
}

export default Shellbar;
