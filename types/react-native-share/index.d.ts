// Type definitions for react-native-share 3.0
// Project: https://github.com/react-native-community/react-native-share#readme
// Definitions by: Mark Nelissen <https://github.com/marknelissen>
//                 pera <https://github.com/santiagofm>
//                 MateusAndrade <https://github.com/MateusAndrade>
//                 Jesse Katsumata <https://github.com/Naturalclar>
//                 Fabian Lee <https://github.com/fabianlee1211>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.1
import { ReactNode, Component } from 'react';
import { ViewProps, StyleProp } from 'react-native';
import Overlay from './Overlay.d';
import Button from './Button.d';
import Sheet from './Sheet.d';

declare namespace Share {
    enum Social {
        FACEBOOK = 'facebook',
        PAGESMANAGER = 'pagesmanager',
        TWITTER = 'twitter',
        WHATSAPP = 'whatsapp',
        INSTAGRAM = 'instagram',
        INSTAGRAM_STORIES = 'instagram-stories',
        GOOGLEPLUS = 'googleplus',
        EMAIL = 'email',
        PINTEREST = 'pinterest',
        LINKEDIN = 'linkedin',
    }
    enum InstagramStories {
        SHARE_BACKGROUND_IMAGE = 'shareBackgroundImage',
        SHARE_STICKER_IMAGE = 'shareStickerImage',
        SHARE_BACKGROUND_AND_STICKER_IMAGE = 'shareBackgroundAndStickerImage',
    }
    function open(options: Options | MultipleOptions): Promise<OpenReturn>;
    function shareSingle(options: Options & { social: Social }): Promise<ShareSingleReturn>;
    function isPackageInstalled(packageName: string): Promise<ShareSingleReturn>;
}

export interface OpenReturn {
    app?: string;
    dismissedAction?: boolean;
}

export interface ShareSingleReturn {
    message: string;
}

export interface Options {
    url?: string;
    urls?: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    filename?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
}
export interface MultipleOptions {
    url?: string;
    urls: string[];
    type?: string;
    message?: string;
    title?: string;
    subject?: string;
    excludedActivityTypes?: string;
    failOnCancel?: boolean;
    showAppsToView?: boolean;
}
export interface ShareSheetProps {
    visible: boolean;
    onCancel: () => void;
    children: ReactNode;
    style?: StyleProp<ViewProps>;
    overlayStyle?: StyleProp<ViewProps>;
}

export class ShareSheet extends Component<ShareSheetProps> {
    backButtonHandler: () => boolean;
    componentDidMount(): void;
    componentWillUnMount(): void;
    render(): JSX.Element;
}

export { Overlay, Button, Sheet };
export default Share;
