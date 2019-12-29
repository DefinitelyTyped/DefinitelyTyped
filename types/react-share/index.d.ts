// Type definitions for react-share 3.0
// Project: https://github.com/nygardk/react-share#readme
// Definitions by: icopp <https://github.com/icopp>
//                 Maxim Zasorin <https://github.com/maximzasorin>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

import * as React from 'react';

// =============================================================================
// Share buttons
// =============================================================================

export interface CommonShareButtonProps {
    /**
     * URL of the shared page
     */
    url: string;
    /** Disables click action and adds `disabled` class */
    disabled?: boolean;
    /**
     * Style when button is disabled
     * @default { opacity: 0.6 }
     */
    disabledStyle?: React.StyleHTMLAttributes<HTMLDivElement>;
    windowWidth?: number;
    windowHeight?: number;
    /**
     * Whether to center the share box respectively to the screen or to the window.
     * @default "windowCenter"
     */
    windowPosition?: 'windowCenter' | 'screenCenter';
    /**
     *  Takes a function that returns a Promise to be fulfilled before calling
     * `onClick`. If you do not return promise, `onClick` is called immediately.
     */
    beforeOnClick?: () => Promise<void>|void;
    /**
     * Takes a function to be called after closing share dialog.
     */
    onShareWindowClose?: () => void;
    /**
     * A class name to add to the others added by react-share (SocialMediaShareButton, ...).
     */
    className?: string;
    /**
     * Click callback handler.
     */
    onClick?: (link: string) => void;
    /**
     * If false, does not open a new window and call the onClick callback instead.
     * @default true
     */
    openWindow?: boolean;
    /**
     * The HTML role of the div.
     * @default "button"
     */
    role?: React.HTMLAttributes<HTMLDivElement>['role'];
    /**
     * Extra style for the button.
     */
    style?: React.HTMLAttributes<HTMLDivElement>['style'];
    /**
     * Indicates that its element can be focused, and where it participates in sequential keyboard
     * navigation.
     * @default "0"
     */
    tabIndex?: React.HTMLAttributes<HTMLDivElement>['tabIndex'];
    /**
     * An object to pass any additional properties, such as `aria-*` attributes.
     */
    additionalProps?: React.HTMLAttributes<HTMLDivElement>;
}

export const FacebookShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** A quote to be shared along with the link. */
        quote?: string;
        /**
         * A hashtag specified by the developer to be added to the shared
         * content. People will still have the opportunity to remove this
         * hashtag in the dialog. The hashtag should include the hash symbol.
         */
        hashtag?: string;
    }
>;
export const LinkedinShareButton: React.StatelessComponent<CommonShareButtonProps>;
export const TwitterShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        via?: string;
        hashtags?: string[];
    }
>;
export const TelegramShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
    }
>;
export const WhatsappShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /**
         * Separates title from the url
         * @default ' '
         */
        separator?: string;
    }
>;
export const PinterestShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** An absolute link to the image that will be pinned */
        media: string;
        /** Description of the shared page */
        description?: string;
    }
>;
export const VKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const OKShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const RedditShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
    }
>;
export const TumblrShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        tags?: string[];
        /** Description of the shared page */
        caption?: string;
    }
>;
export const LivejournalShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
    }
>;
export const MailruShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const ViberShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Separates title from the url, default: ' ' */
        separator?: string;
    }
>;
export const WorkplaceShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** A quote to be shared along with the link. */
        quote?: string;
        /**
         * A hashtag specified by the developer to be added to the shared
         * content. People will still have the opportunity to remove this
         * hashtag in the dialog. The hashtag should include the hash symbol.
         */
        hashtag?: string;
    }
>;
export const LineShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
    }
>;
export const WeiboShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** An absolute link to the image that will be shared */
        image?: string;
    }
>;
export const EmailShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        subject?: string;
        /** Body of the email, will be prepended to the url. */
        body?: string;
        /** Separates body from the url, default: ' ' */
        separator?: string;
        /** Opens the mail client in a new window. Defaults to false */
        openWindow?: boolean;
    }
>;
export const PocketShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /**
         * Title of the shared page. Note that if Pocket detects a title tag
         * on the page being saved, this parameter will be ignored
         * and the title tag of the saved page will be used instead.
         */
        title?: string;
    }
>;
export const InstapaperShareButton: React.StatelessComponent<
    CommonShareButtonProps & {
        /** Title of the shared page */
        title?: string;
        /** Description of the shared page */
        description?: string;
    }
>;

// =============================================================================
// Share counts
// =============================================================================

export interface ShareCountComponentProps {
    /** The URL you are sharing */
    url: string;
    /** Classes to apply (if any) */
    className?: string;
    /** Supply a function as the child to render anything but the count */
    children?: (shareCount: number) => React.ReactNode;
}

export const FacebookShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const PinterestShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const VKShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const OKShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const RedditShareCount: React.StatelessComponent<ShareCountComponentProps>;
export const TumblrShareCount: React.StatelessComponent<ShareCountComponentProps>;

// =============================================================================
// Icons
// =============================================================================

export interface IconComponentProps {
    /** Icon size in pixels */
    size?: number;
    /** Whether to show round or rect icons */
    round?: boolean;
    /** Allow rounded corners if using rect icons */
    borderRadius?: number;
    /** Customize background style, e.g. fill */
    iconBgStyle?: React.CSSProperties;
    /**
     * Customize logo's fill color
     * @default 'white'
     */
    logoFillColor?: string;
}

export const FacebookIcon: React.StatelessComponent<IconComponentProps>;
export const TwitterIcon: React.StatelessComponent<IconComponentProps>;
export const TelegramIcon: React.StatelessComponent<IconComponentProps>;
export const WhatsappIcon: React.StatelessComponent<IconComponentProps>;
export const LinkedinIcon: React.StatelessComponent<IconComponentProps>;
export const PinterestIcon: React.StatelessComponent<IconComponentProps>;
export const VKIcon: React.StatelessComponent<IconComponentProps>;
export const OKIcon: React.StatelessComponent<IconComponentProps>;
export const RedditIcon: React.StatelessComponent<IconComponentProps>;
export const TumblrIcon: React.StatelessComponent<IconComponentProps>;
export const LivejournalIcon: React.StatelessComponent<IconComponentProps>;
export const MailruIcon: React.StatelessComponent<IconComponentProps>;
export const ViberIcon: React.StatelessComponent<IconComponentProps>;
export const WorkplaceIcon: React.StatelessComponent<IconComponentProps>;
export const LineIcon: React.StatelessComponent<IconComponentProps>;
export const PocketIcon: React.StatelessComponent<IconComponentProps>;
export const InstapaperIcon: React.StatelessComponent<IconComponentProps>;
export const EmailIcon: React.StatelessComponent<IconComponentProps>;
