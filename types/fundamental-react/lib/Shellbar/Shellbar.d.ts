import * as React from "react";
import { IconSize } from "../Icon/Icon";

export type ShellbarProps = {
    actions?:
        | Array<{
            menu?: React.ReactNode | undefined;
            label?: string | undefined;
            glyph: string;
            notificationCount: number;
            callback?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
        }>
        | undefined;
    backAction?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    className?: string | undefined;
    copilot?: boolean | undefined;
    disableStyles?: boolean | undefined;
    localizedText?: {
        counterLabel: string;
        notificationsButton: string;
    } | undefined;
    logo?: React.ReactNode | undefined;
    logoSAP?: boolean | undefined;
    notifications?: {
        notificationsBody?: React.ReactNode | undefined;
        noNotificationsBody?: React.ReactNode | undefined;
        notificationCount: number;
        label?: string | undefined;
        callback?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
    } | undefined;
    productMenu?:
        | Array<{
            link?: string | undefined;
            callback?: ((...args: any[]) => void) | undefined;
            url?: string | undefined;
            glyph?: string | undefined;
            size?: IconSize | undefined;
            name?: React.ReactNode | undefined;
        }>
        | undefined;
    productSwitch?: object | undefined;
    productSwitchList?:
        | Array<{
            title: string;
            link?: string | undefined;
            url?: string | undefined;
            glyph: string;
            image: string;
            callback?: ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void) | undefined;
        }>
        | undefined;
    productTitle?: string | undefined;
    profile?: { [x: string]: any } | undefined;
    profileMenu?: Array<{ [x: string]: any }> | undefined;
    searchInput?: { [x: string]: any } | undefined;
    subtitle?: string | undefined;
} & React.HTMLAttributes<Element>;

declare class Shellbar extends React.Component<ShellbarProps> {
    static displayName: "Shellbar";
}

export default Shellbar;
