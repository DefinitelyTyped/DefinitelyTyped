import * as React from "react";
import { IconSize } from "../Icon/Icon";

export type ShellbarProps = {
    actions?: Array<{
        menu?: React.ReactNode;
        label?: string;
        glyph: string;
        notificationCount: number;
        callback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }>;
    backAction?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    className?: string;
    copilot?: boolean;
    disableStyles?: boolean;
    localizedText?: {
        counterLabel: string;
        notificationsButton: string;
    };
    logo?: React.ReactNode;
    logoSAP?: boolean;
    notifications?: {
        notificationsBody?: React.ReactNode;
        noNotificationsBody?: React.ReactNode;
        notificationCount: number;
        label?: string;
        callback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    };
    productMenu?: Array<{
        link?: string;
        callback?: (...args: any[]) => void;
        url?: string;
        glyph?: string;
        size?: IconSize;
        name?: React.ReactNode;
    }>;
    productSwitch?: object;
    productSwitchList?: Array<{
        title: string;
        link?: string;
        url?: string;
        glyph: string;
        image: string;
        callback?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
    }>;
    productTitle?: string;
    profile?: { [x: string]: any };
    profileMenu?: Array<{ [x: string]: any }>;
    searchInput?: { [x: string]: any };
    subtitle?: string;
} & React.HTMLAttributes<Element>;

declare class Shellbar extends React.Component<ShellbarProps> {
    static displayName: "Shellbar";
}

export default Shellbar;
