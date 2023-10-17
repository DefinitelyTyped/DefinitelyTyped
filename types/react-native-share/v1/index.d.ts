import { Component, ReactNode } from "react";
import { StyleProp, ViewProps } from "react-native";
declare namespace Share {
    function open(options: Options | MultipleOptions): Promise<OpenReturn>;
    function shareSingle(options: Options & { social: SupportedSocialApps }): Promise<ShareSingleReturn>;
}

import Button from "./Button.d";
import Overlay from "./Overlay.d";
import Sheet from "./Sheet.d";

export default Share;

export interface OpenReturn {
    app?: string | undefined;
    dismissedAction?: boolean | undefined;
}

export interface ShareSingleReturn {
    message: string;
}

export interface Options {
    url?: string | undefined;
    urls?: string[] | undefined;
    type?: string | undefined;
    message?: string | undefined;
    title?: string | undefined;
    subject?: string | undefined;
    filename?: string | undefined;
    excludedActivityTypes?: string | undefined;
    failOnCancel?: boolean | undefined;
    showAppsToView?: boolean | undefined;
}
export interface MultipleOptions {
    url?: string | undefined;
    urls: string[];
    type?: string | undefined;
    message?: string | undefined;
    title?: string | undefined;
    subject?: string | undefined;
    excludedActivityTypes?: string | undefined;
    failOnCancel?: boolean | undefined;
    showAppsToView?: boolean | undefined;
}

export type SupportedSocialApps =
    | "facebook"
    | "pagesmanager"
    | "twitter"
    | "whatsapp"
    | "instagram"
    | "googleplus"
    | "email";

export interface ShareSheetProps {
    visible: boolean;
    onCancel: () => void;
    children: ReactNode;
    style?: StyleProp<ViewProps> | undefined;
    overlayStyle?: StyleProp<ViewProps> | undefined;
}

export { Button, Overlay, Sheet };
export class ShareSheet extends Component<ShareSheetProps> {
    backButtonHandler: () => boolean;
    componentDidMount(): void;
    componentWillUnMount(): void;
    render(): JSX.Element;
}
