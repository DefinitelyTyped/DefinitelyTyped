// Type definitions for react-native-share 3.3
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
//                 pera <https://github.com/santiagofm>
//                 MateusAndrade <https://github.com/MateusAndrade>
//                 Jesse Katsumata <https://github.com/Naturalclar>
//                 Fabian Lee <https://github.com/fabianlee1211>
//                 Evan Cloutier <https://github.com/evancloutier>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import { Component, ReactNode } from "react";
import { StyleProp, ViewProps } from "react-native";
import Button from "./Button.d";
import Overlay from "./Overlay.d";
import Sheet from "./Sheet.d";

declare namespace Share {
    enum Social {
        FACEBOOK = "facebook",
        PAGESMANAGER = "pagesmanager",
        TWITTER = "twitter",
        WHATSAPP = "whatsapp",
        INSTAGRAM = "instagram",
        INSTAGRAM_STORIES = "instagram-stories",
        GOOGLEPLUS = "googleplus",
        EMAIL = "email",
        PINTEREST = "pinterest",
        LINKEDIN = "linkedin",
        SMS = "SMS",
    }
    enum InstagramStories {
        SHARE_BACKGROUND_IMAGE = "shareBackgroundImage",
        SHARE_BACKGROUND_VIDEO = "shareBackgroundVideo",
        SHARE_STICKER_IMAGE = "shareStickerImage",
        SHARE_BACKGROUND_AND_STICKER_IMAGE = "shareBackgroundAndStickerImage",
    }
    function open(options: Options | MultipleOptions): Promise<OpenReturn>;
    function shareSingle(options: Options & { social: Social }): Promise<ShareSingleReturn>;
    function isPackageInstalled(packageName: string): Promise<ShareSingleReturn>;
}

export interface OpenReturn {
    app?: string | undefined;
    dismissedAction?: boolean | undefined;
}

export interface ShareSingleReturn {
    message: string;
}

type ActivityType =
    | "addToReadingList"
    | "airDrop"
    | "assignToContact"
    | "copyToPasteBoard"
    | "mail"
    | "message"
    | "openInIBooks" // iOS 9 or later
    | "postToFacebook"
    | "postToFlickr"
    | "postToTencentWeibo"
    | "postToTwitter"
    | "postToVimeo"
    | "postToWeibo"
    | "print"
    | "saveToCameraRoll"
    | "markupAsPDF"; // iOS 11 or later

interface LinkMetadata {
    originalUrl?: string | undefined;
    url?: string | undefined;
    title?: string | undefined;
    icon?: string | undefined;
    image?: string | undefined;
    remoteVideoUrl?: string | undefined;
    video?: string | undefined;
}

interface ActivityItem {
    content: string;
    type: "text" | "url";
}

export interface ActivityItemSource {
    placeholderItem: ActivityItem;
    item: { [key in ActivityType | string]: ActivityItem | null | undefined };
    subject?: { [key in ActivityType | string]: string } | undefined;
    dataTypeIdentifier?: { [key in ActivityType | string]: string } | undefined;
    thumbnailImage?: { [key in ActivityType | string]: string } | undefined;
    linkMetadata?: LinkMetadata | undefined;
}

export interface Options {
    url?: string | undefined;
    urls?: string[] | undefined;
    type?: string | undefined;
    message?: string | undefined;
    title?: string | undefined;
    subject?: string | undefined;
    activityItemSources?: ActivityItemSource[] | undefined;
    filename?: string | undefined;
    saveToFiles?: boolean | undefined;
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
export interface ShareSheetProps {
    visible: boolean;
    onCancel: () => void;
    children: ReactNode;
    style?: StyleProp<ViewProps> | undefined;
    overlayStyle?: StyleProp<ViewProps> | undefined;
}

export class ShareSheet extends Component<ShareSheetProps> {
    backButtonHandler: () => boolean;
    componentDidMount(): void;
    componentWillUnMount(): void;
    render(): JSX.Element;
}

export { Button, Overlay, Sheet };
export default Share;
